export default {
	checkOffersNumber(selectedRows) {
		if (selectedRows.length !== 3) {
			throw new Error(`Il faut sélectionner exactement 3 offres valides pour continuer (offres sélectionnées: ${selectedRows.length})`);
		}
	},
	checkOffersValidity(selectedRows) {
		if (selectedRows.some((row) => row.price === 0)) {
			throw new Error("Votre sélection contient une ou des offres non valides");
		}
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
			const partnerLabel = getProcedureById.data.data.getProcedureById.recurrentSubscription.partner.label;
			const annualPrice = Prix.getMonthlyPrice() ? (Math.round(Prix.getMonthlyPrice() * 12 * 100)) : null;;
			const subcategory = getProcedureById.data.data.getProcedureById.recurrentSubscription.subCategory.label ;
			const mode = Tarification_select.selectedOptionValue;
			const procedureId = appsmith.URL.queryParams.procedureId ;
			const email = getProcedureById.data.data.getProcedureById.user.email;
			const params = {
				partnerLabel, annualPrice, subcategory, mode, procedureId, email
			}
			navigateTo("Quote Energie", params, "SAME_WINDOW");
		} catch(error) {
			return showAlert(error.message, "warning");
		}
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
	checkIfOnlyOneOffer(selectedRows) {
		if (selectedRows.length !== 1) {
			throw new Error(`Il faut sélectionner une seule offre valide pour continuer (offres sélectionnées: ${selectedRows.length})`);
		}
	}
}