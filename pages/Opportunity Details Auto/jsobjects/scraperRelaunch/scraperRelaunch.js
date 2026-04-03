export default {
	canRelaunch: JSObject1.valid(), // temp version (03.04.2026)
	//canRelaunch: !(checkbox_ami_trois_f.isChecked || checkbox_axa.isChecked || checkbox_flitter.isChecked || checkbox_novelia.isChecked) || !JSObject1.valid(), // To use in Lancer button
	scraper: { // On hold for now (03.04.2026)
		//axa: false || checkbox_axa.isChecked,
		//ami_trois_f: false || checkbox_ami_trois_f.isChecked,
		//flitter: false || checkbox_flitter.isChecked,
		//novelia: false || checkbox_novelia.isChecked,
	},
	allScrapers: ["axa", "ami_trois_f", "flitter", "novelia", "april", "direct_assurance", "assurea"],
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
					await getProcedureById.run();
					AutoRefreshScraperResultSwitch.setValue(false)
				} 
				await Garanties.run();

			}, refreshRate ,intervalId);
	},
	// TODO: put back "targetPartnerLabels": scraperRelaunch.getRunningScraper(scraperRelaunch.scraper) in queries
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
				closeModal(RelanceScraperAuto.name);
				showModal(ScraperLoadingModal.name);
			};
		} catch(error) {
			return showAlert(error.message, 'error');
		}
	}
}