export default {
		async goToQuoteCreator() {
		try {
			
			const lastRunOffers = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun;

			if (!lastRunOffers)
				throw new Error("Impossible d'accéder aux offres trouvées !");
			const offerRunId = lastRunOffers[0].runId
			const params = {
				offerRunId, 
				stage: appsmith.store.environment
			}
			return navigateTo("https://apps.ideel.io/app/quote/health-695f93c39fadf613eacbc9cd", params, "NEW_WINDOW");
		} catch(error) {
			return showAlert(error.message, "warning");
		}
	},
	
	sharedStates: ["CHOSEN", "SHARED"],
	areQueriesLoading: getProcedureById.isLoading || getPotentialOffersOfLastRun.isLoading,
	offerChoiceStep: getProcedureById.data.data?.getProcedureById.currentStepId == 2,
	
  offersAlreadyShared: () => {
		const offers = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun ?? [];
		return offers.some((offer) => this.sharedStates.includes(offer.state));
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
	formatFormulesLine: () => {
			const selectedPartner = Object.values(Nos_Partenaires.data).find(entry => 
							entry["Compagnie"] === user_new_partner.selectedOptionLabel
		);	
			return selectedPartner["Formules"]
				.split(';')
        .map(item => item.trim())
        .filter(item => item.length > 0)
        .map(item => ({
				label: item,
        value: item
			}));
		}, 
	createManualQuote: async () => {
		 await createPotentialOffer.run();
		  if (createPotentialOffer.data.errors) 
				throw new Error(createPotentialOffer.data.errors[0].message); 
     closeModal(ModalNewContract.name)
		 await utils.moveProcedureToThirdStep();
		 await getPotentialOffersOfLastRun.run();
	   showAlert('Fait !', 'success');
	 }
}