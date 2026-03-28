export default {

	async goToProcedureDetails (userId, subcategory, email, procedureId, recurrentSubscriptionId, mode="SAME_WINDOW") {
		try {
			const params = { userId, email, procedureId, recurrentSubscriptionId };

			const subcategoryToScreenMap = {
				assurance_auto: "Opportunity Details Auto",
				assurance_habitation: "Opportunity Details Housing",
				assurance_sante_et_prevoyance: "Opportunity Details Health",
				electricite: "Opportunity Details Energy",
				electricite_et_gaz: "Opportunity Details Energy",
				gaz: "Opportunity Details Energy",
				assurance_rc_professionelle: "Opportunity Details Pro" ,
				assurance_mutuelle_entreprise: "Opportunity Details Pro",
				assurance_prevoyance_collective: "Opportunity Details Pro",
				assurance_decennale_do: "Opportunity Details Pro",
				assurance_cybersecurite: "Opportunity Details Pro",
				assurance_vehicules_flotte_auto: "Opportunity Details Pro",
				assurance_multirisque_locaux: "Opportunity Details Pro",
				assurance_autres_risques: "Opportunity Details Pro",
				assurance_credit: "Opportunity Details Loan",
			};

			const targetScreen = subcategoryToScreenMap[subcategory] || "Opportunity Details";

			return navigateTo(targetScreen, params, mode);
		} catch (error) {
			return showAlert(error.message, "error");
		}
	},


	async goContractDetails (userId, email, procedureId, recurrentSubscriptionId, mode="SAME_WINDOW") {
		try {
			const params = { userId, email, procedureId, recurrentSubscriptionId };

			return navigateTo("Contract Details", params, mode);
		} catch (error) {
			return showAlert(error.message, "error");
		}
	},

	async goToDetails (currentState, userId, subcategory, email, procedureId, recurrentSubscriptionId, mode="SAME_WINDOW") {
		if (["D) Souscription Finalisée","E) Contrat Validé",].includes(currentState)) {
			await this.goContractDetails (userId, email, procedureId, recurrentSubscriptionId, mode)
		} else {
			await this.goToProcedureDetails (userId, subcategory, email, procedureId, recurrentSubscriptionId, mode)
		}
	},
	
}