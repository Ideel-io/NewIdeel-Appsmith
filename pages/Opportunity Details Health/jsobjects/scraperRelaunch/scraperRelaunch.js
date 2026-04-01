export default {
	
	EstimationPartner: {
		ACHEEL: 'acheel',
		AMI3F: 'ami_trois_f',
		APRIL: 'april',
		AXA: 'axa',
		MALJ: 'malj',
		NOVELIA: 'novelia',
		HENNER: 'henner',
		SWISSLIFE: 'swisslife',
		NÉOLIANE: 'neoliane',
		REPAM: 'repam_assurances',
		APICIL: 'apicil'
	},
	
	scraper: {
		[this.EstimationPartner.ACHEEL]: false || checkbox_acheel.isChecked,
		[this.EstimationPartner.AXA]: false || checkbox_axa.isChecked,
		[this.EstimationPartner.AMI3F]: false || checkbox_ami3f.isChecked,
		[this.EstimationPartner.APRIL]: false || checkbox_april.isChecked,
		[this.EstimationPartner.MALJ]: false || checkbox_majl.isChecked,
		[this.EstimationPartner.NOVELIA]: false || checkbox_novelia.isChecked,	
		
		[this.EstimationPartner.HENNER]: false || checkbox_henner.isChecked,	
		[this.EstimationPartner.SWISSLIFE]: false || checkbox_swisslife.isChecked,	
		[this.EstimationPartner.NÉOLIANE]: false || checkbox_neoliane.isChecked,	
		[this.EstimationPartner.REPAM]: false || checkbox_repam.isChecked,	
		[this.EstimationPartner.APICIL]: false || checkbox_apicil.isChecked,	
	},	
	isCurrentInsurer: (estimationPartner) => {
		const currentInsurer = getProcedureById.data.data?.getProcedureById.recurrentSubscription.partner.label;
		return currentInsurer === estimationPartner;
	},
	
	handleCoverdPersonSelection() {
    const value = CoveredPersonSelect.selectedOptionValue;
		
		CoveredChildrenNumber.setVisibility(false);
		ContainerPerson2.setVisibility(false);
		ContainerPerson3.setVisibility(false);
		ContainerPerson4.setVisibility(false);
		ContainerPerson5.setVisibility(false);
		ContainerPerson6.setVisibility(false);
		CoveredChildrenNumber.setSelectedOption('');
		SpouseProfileSelect.setSelectedOption('');
		FirstChildSelect.setSelectedOption('');
		SecondChildSelect.setSelectedOption('');
		ThirdChildSelect.setSelectedOption('');
		FourthChildSelect.setSelectedOption('');

    switch (value) {
      case "non":
        break;

      case "conjoint":
				ContainerPerson2.setVisibility(true);
        break;

      case "conjoint_et_enfants":
				ContainerPerson2.setVisibility(true);
        CoveredChildrenNumber.setVisibility(true);
        break;

      case "enfants":
				ContainerPerson2.setVisibility(false);
        CoveredChildrenNumber.setVisibility(true);
        break;

      default:
        console.log("Unknown selection");
    }
  },
	
	handleCoverdPersonNumber() {
    const value = CoveredChildrenNumber.selectedOptionValue;
		
		
		ContainerPerson3.setVisibility(false);
		ContainerPerson4.setVisibility(false);
		ContainerPerson5.setVisibility(false);
		ContainerPerson6.setVisibility(false);

		SpouseProfileSelect.setSelectedOption('');
		FirstChildSelect.setSelectedOption('');
		SecondChildSelect.setSelectedOption('');
		ThirdChildSelect.setSelectedOption('');
		FourthChildSelect.setSelectedOption('')
    switch (value) {
      case "un":
				ContainerPerson3.setVisibility(true);
        break;

      case "deux":
				ContainerPerson3.setVisibility(true);
				ContainerPerson4.setVisibility(true);
        break;

      case "trois":
        ContainerPerson3.setVisibility(true);
				ContainerPerson4.setVisibility(true);
				ContainerPerson5.setVisibility(true);
        break;

      case "quatre_ou_plus":
				ContainerPerson3.setVisibility(true);
				ContainerPerson4.setVisibility(true);
				ContainerPerson5.setVisibility(true);
				ContainerPerson6.setVisibility(true);
        break;

      default:
        console.log("Unknown selection");
    }
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
				await resetWidget("ScrapersCopy");
				const chosenOffers = Quote.getChosenOffersRows();
				
	      if (chosenOffers.length > 0) {
			     await getProcedureById2.run();
			     AutoRefreshScraperResultSwitch.setValue(false)
		     } 

			}, refreshRate ,intervalId);
	},
	getRunningScraper: (scraper) => {
		const runningScraperList = Object.entries(scraper).filter(([, v]) => v === true)
		const runningScraperLabel = runningScraperList.map(([k, ]) => k)
		return runningScraperLabel
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
				closeModal(RelanceScraperHealth.name);
				showModal(ScraperLoadingModal.name);
			};
		} catch(error) {
			return showAlert(error.message, 'error');
		}
	}
}