export default {
	//canRelaunch : scraperRelaunch.noPartnerSelected || !JSObject1.valid()
	canRelaunch : !JSObject1.valid(),
	EstimationPartner: {
		ACHEEL: 'acheel',
		AMI3F: 'ami_trois_f',
		APRIL: 'april',
		AXA: 'axa',
		DIRECT_ASSURANCE: 'direct_assurance',
		GENERALI: 'generali',
		MALJ: 'malj',
		NOVELIA: 'novelia',
	},
	allScrapers: Object.values(this.EstimationPartner),
	scraper: {
		[this.EstimationPartner.ACHEEL]: false || checkbox_acheel.isChecked,
		[this.EstimationPartner.AXA]: false || checkbox_axa.isChecked,
		[this.EstimationPartner.AMI3F]: false || checkbox_ami3f.isChecked,
		[this.EstimationPartner.APRIL]: false || checkbox_april.isChecked,
		[this.EstimationPartner.MALJ]: false || checkbox_majl.isChecked,
		[this.EstimationPartner.GENERALI]: false || checkbox_generali.isChecked,
		[this.EstimationPartner.NOVELIA]: false || checkbox_novelia.isChecked,		
	},	
	noPartnerSelected: !(checkbox_acheel.isChecked || checkbox_axa.isChecked || checkbox_majl.isChecked || checkbox_generali.isChecked),
	isCurrentInsurer: (estimationPartner) => {
		const currentInsurer = getProcedureById.data.data?.getProcedureById.recurrentSubscription.partner.label;
		return currentInsurer === estimationPartner;
	},
	autoRefreshScraperResults () {
		const intervalId = "scraperResultRefreshId";
		const refreshRate = 60 * 1000; //in milliseconds

		if (!AutoRefreshScraperResultSwitch.isSwitchedOn) 
			return clearInterval(intervalId);

		if (AutoRefreshScraperResultSwitch.isSwitchedOn) 
			return setInterval(async () => {
				showAlert("Résultats actualisés");
				await getPotentialOffersOfLastRun.run();
				const chosenOffers = this.getChosenOffersRows(); 
				if (chosenOffers.length > 0) {
					await getProcedureById.run();
					AutoRefreshScraperResultSwitch.setValue(false)
				}  
				await this.getScraperResultsGuarantees();
			}, refreshRate ,intervalId);


	},
	getRunningScraper (scraper) {
		const runningScraperList = Object.entries(scraper).filter(([, v]) => v === true)
		const runningScraperLabel = runningScraperList.map(([k, ]) => k)
		return runningScraperLabel;
	},
	getSharedOffersRows: () => {
		const sharedOffersRows = [];
		const sharedStates = [ 'SHARED', 'CHOSEN'];
		const lastRunOffers = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun ?? [];
		lastRunOffers.forEach((offer, index) => {
			if (sharedStates.includes(offer.state)) sharedOffersRows.push(index);
		});
		return sharedOffersRows;
	},
	getChosenOffersRows: () => {
		const chosenOffersRows = [];
		const chosenStates = ['CHOSEN'];
		const lastRunOffers = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun ?? [];
		lastRunOffers.forEach((offer, index) => {
			if (chosenStates.includes(offer.state)) chosenOffersRows.push(index);
		});
		return chosenOffersRows;
	},

	launch: async () => {
		try{
			await retryScraper.run()

			if (retryScraper.data.errors) throw new Error(retryScraper.data.errors[0].message);

			if (retryScraper.data.data?.searchPotentialOffersAgain) {
				showAlert('Fait !', 'success');
				AutoRefreshScraperResultSwitch.setValue(true);
				this.autoRefreshScraperResults();					
				await utils.moveProcedureToSecondStep();
				closeModal(RelanceScraperHabitation.name);
				showModal(ScraperLoadingModal.name);
			};
		}catch(error){
			showAlert(error.message, 'error');
		}
	},
	getWarranteeLabel: (insurer, formule) => {
		if (!insurer || !formule) return null;
		const insurerName = insurer.toLocaleLowerCase();
		const insurerFormule = formule.toLocaleLowerCase();
		return `${insurerName}_${insurerFormule}`;
	},
	getFormattedWarrantees: async () => {
		await Garanties_Habitation.run();
		const formattedWarrantees = {};
		Garanties_Habitation.data?.map((warrantee) => {
			const offerLabel = this.getWarranteeLabel(warrantee.Assureur, warrantee.Formule);
			if (offerLabel) 
				formattedWarrantees[`${offerLabel}`] = warrantee;
		})
		return formattedWarrantees;
	},
	getScraperResultsGuarantees: async () => {
		const scraperResults = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun ?? [];
		if (!scraperResults.length) {
			return [];
		}

		const warrantees = await this.getFormattedWarrantees();

		const resultsWithWarrantees = scraperResults.map((offer) => {
			const offerLabel = this.getWarranteeLabel(offer.partner, offer.name);
			return {
				...offer, 
				...(offerLabel ? warrantees[`${offerLabel}`] : {})
			};
		})
		return resultsWithWarrantees;
	},
}