export default {
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
	
	async prepareOfferEncodedParams(selectedRows) {
		const subAnnualPrice = Prix.getMonthlyPrice() ? (Math.round(Prix.getMonthlyPrice() * 12 * 100)) : null;
		const offerIds = [];
		for (const row of selectedRows) {
			const newOffer = {
				id: ULID.ulid(),
				"p-label": row.partner.split("/").slice(-1)[0].slice(0, -4),
				"p-name": row.Assureur,
				name: row.name,
				"civil-resp": row["Resp. Civile"] ? "1" : "0",
				"dom-corporel": row["Dommages corporels"] ? "1" : "0",
				glace: row["Bris deglace"] ? "1" : "0",
				cata: row["Catastrophes naturelles"] ? "1" : "0",
				vol: row["Vol / Incendie"] ? "1" : "0",
				attentat: row["Attentats"] ? "1" : "0",
				"dom-accident": row["Dommages tous accidents"] ? "1" : "0",
				"ass-panne": row["Assistance panne"],
				"ass-accident": row["Assistance accident"],
				remplacement: row["Véhicule de remplacement"],
				price: row.price.toString(),
				...(subAnnualPrice ? { "sub-annual-price": subAnnualPrice.toString() } : {}),
				procedureId: row.procedureId,
				email: getProcedureById.data.data.getProcedureById.user.email,
				firstName: getProcedureById.data.data.getProcedureById.user.firstName,
			};
			this.offerToAdd = newOffer;
			await AddOfferData.run();
			offerIds.push(newOffer.id);
		}
		
		return Base64.encodeURI(JSON.stringify(offerIds));
	},
	checkOffersNumber(selectedRows) {
		if (selectedRows.length !== 3) {
			throw new Error(`Il faut sélectionner exactement 3 offres valides pour continuer (offres sélectionnées: ${selectedRows.length})`);
		}
	},
	checkIfOnlyOneOffer(selectedRows) {
		if (selectedRows.length !== 1) {
			throw new Error(`Il faut sélectionner une seule offre valide pour continuer (offres sélectionnées: ${selectedRows.length})`);
		}
	},
	checkOffersValidity(selectedRows) {
		if (selectedRows.some((row) => row.price === 0)) {
			throw new Error("Votre sélection contient une ou des offres non valides");
		}
	},
	
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
			navigateTo("https://apps.ideel.io/app/quote/auto-686b8f8d1fcbb25154cc90a5", params, "NEW_WINDOW");
		} catch(error) {
			return showAlert(error.message, "warning");
		}
	},
	async goToFinalQuote(selectedRows) {
		try {
			this.checkIfOnlyOneOffer(selectedRows);
			this.checkOffersValidity(selectedRows);
			const encoded = await this.prepareOfferEncodedParams(selectedRows);
			navigateTo("Quote Auto Final", { d: encoded });
		} catch(error) {
			return showAlert(error.message, "warning");
		}
	},
	offerToAdd: {},
	
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
		 Garanties.run();
	   showAlert('Fait !', 'success');
	 }
}