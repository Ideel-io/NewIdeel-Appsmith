export default {
	sharedStates: ["CHOSEN", "SHARED"],
	areQueriesLoading: getProcedureById.isLoading || getPotentialOffersOfLastRun.isLoading,
	offersAlreadyShared: () => {
		const offers = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun ?? [];
		return offers.some((offer) => this.sharedStates.includes(offer.state));
	},
	procedureMovedPastOfferChoice: getProcedureById.data.data?.getProcedureById.currentStepId > 2,
	offerChoiceStep: getProcedureById.data.data?.getProcedureById.currentStepId == 2,
	canResetOffersShared: this.offersAlreadyShared() && !this.procedureMovedPastOfferChoice,
	canShareQuote: !this.offersAlreadyShared() && this.offerChoiceStep,
	checkOffersNumber(selectedRows) {
		if (selectedRows.length !== 3) {
			throw new Error(`Il faut sélectionner exactement 3 offres valides pour continuer (offres sélectionnées: ${selectedRows.length})`);
		}
	},
	checkOffersValidity(selectedRows) {
		if ( selectedRows.some((row) => row.price === 0 || row.state !== "SUCCEEDED") ) 
			throw new Error("Votre sélection contient une ou des offres non valides");
	},
	offerToAdd: {},
	async prepareOfferEncodedParams(selectedRows) {
		const subAnnualPrice = Prix.getMonthlyPrice() ? (Math.round(Prix.getMonthlyPrice() * 12 * 100)) : null;
		const offerIds = [];
		for (const row of selectedRows) {
			const newOffer = {
				id: ULID.ulid(),
				"p-label": row.partner,
				"p-name": row.partner[0].toUpperCase() + row.partner.slice(1),
				name: row.name,
				"cap-mobilier": row["Capital Mobilier"],
				franchise: row.Franchise,
				"val-reequip": row["Valeur réequipement"],
				incendie: row.Incendie ? "1" : "0",
				"degats-eau": row["Dégat des eaux"] ? "1" : "0",
				cata: row["Catastrophes naturelles"] ? "1" : "0",
				vol: row["Vol / Vandalisme"] ? "1" : "0",
				vitre: row["Bris de vitre"] ? "1" : "0",
				"dom-appareils": row["Dommage appareils électriques"],
				"civil-resp": row["Responsabilité Civile"] ? "1" : "0",
				"ass-personne": row["Assistance personnes"] ? "1" : "0",
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
			navigateTo("https://apps.ideel.io/app/quote/habitation-687fb3bf1fcbb25154ccab8f", params, "NEW_WINDOW");
		} catch(error) {
			return showAlert(error.message, "warning");
		}
	},
	checkIfOnlyOneOffer(selectedRows) {
		if (selectedRows.length !== 1) {
			throw new Error(`Il faut sélectionner une seule offre valide pour continuer (offres sélectionnées: ${selectedRows.length})`);
		}
	},
	async goToFinalQuote(selectedRows) {
		try {
			this.checkIfOnlyOneOffer(selectedRows);
			this.checkOffersValidity(selectedRows);
			const encoded = await this.prepareOfferEncodedParams(selectedRows);
			navigateTo("Quote Habitation Final", { d: encoded });
		} catch(error) {
			return showAlert(error.message, "warning");
		}
	},
	async resetSharedOffers() {
		try{
			const lastRunOffers = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun;

			if (!lastRunOffers)
				throw new Error("Impossible d'accéder aux offres trouvées !");

			await resetSharedPotentialOffers.run({ 
				offerRunId: lastRunOffers[0].runId
			});

			if (resetSharedPotentialOffers.data.errors) 
				throw new Error(resetSharedPotentialOffers.data.errors[0].message);

			if (resetSharedPotentialOffers.data.data?.resetSharedPotentialOffers) {
				showAlert('Offres partagées réinitialisées !', 'success');

				await getPotentialOffersOfLastRun.run();
				closeModal(ResetOffersSharedModal.name);
			};
		}catch(error){
			showAlert(error.message, 'error');
		}
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
		 Garanties_Habitation.run();
	   showAlert('Fait !', 'success');
	 }
}