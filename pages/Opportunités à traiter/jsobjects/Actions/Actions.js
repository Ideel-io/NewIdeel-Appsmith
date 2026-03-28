export default {
	initPage: async () => {
		await getAllOptimizationByStepAndCat.run({
			categories: utils.getFilterCategories(),
			currentStepIds: utils.getFilterStepIds(),
		})
	},
	goToSubscriptionPage (rowData) {
		if (!rowData) {
			return showAlert("Aucune ligne n'est sélectionnée", "warning");
		}
		const subcategory = rowData?.node?.category;
		const subcategoryToPageMap = {
			assurance_auto: "Subscription Auto",
			assurance_habitation: "Subscription Housing",
			assurance_sante_et_prevoyance: "Subscription Health",
			assurance_credit: "Subscription Loan",
			gaz: "Subscription Energy",
			electricite: "Subscription Energy",
			electricite_et_gaz: "Subscription Energy",
			assurance_rc_professionelle: "Subscription Pro",
			assurance_mutuelle_entreprise: "Subscription Pro",
			assurance_prevoyance_collective: "Subscription Pro",
			assurance_decennale_do: "Subscription Pro",
			assurance_cybersecurite: "Subscription Pro",
			assurance_vehicules_flotte_auto: "Subscription Pro",
			assurance_multirisque_locaux: "Subscription Pro",
			assurance_prevoyance_individuelle: "Subscription Pro",
			assurance_autres_risques: "Subscription Pro",
		};
		const pageToUse = subcategoryToPageMap[subcategory]

		if (!pageToUse) {
			return showAlert(`Pas de page pour "${subcategory}"`, "warning");
		}

		const email = rowData?.node?.user?.email;

		if (!email) {
			return showAlert("Email pas trouvé dans la démarche", "error");
		}

		const userId = rowData?.node?.user?.id;

		const procedureId = rowData?.node?.id;

		if (!procedureId) {
			return showAlert("ProcedureId pas trouvé dans la démarche", "error");
		}

		const recurrentSubscriptionId = rowData?.node?.recurrentSubscriptionId;

		if (!recurrentSubscriptionId) {
			return showAlert("RecurrentSubscriptionId pas trouvé dans la démarche", "error");
		}

		const urlParams = { userId, email, procedureId, recurrentSubscriptionId };

		return navigateTo(pageToUse, urlParams, "SAME_WINDOW");
	},
	async goToProcedureDetails (userId, subcategory, email, procedureId, recurrentSubscriptionId, mode="NEW_WINDOW") {
		try {
			const params = { userId,  email, procedureId, recurrentSubscriptionId };

			const subcategoryToScreenMap = {
				assurance_auto: "Opportunity Details Auto",
				assurance_habitation: "Opportunity Details Housing",
				assurance_sante_et_prevoyance: "Opportunity Details Health",
				electricite: "Opportunity Details Energy",
				electricite_et_gaz: "Opportunity Details Energy",
				gaz: "Opportunity Details Energy",
				assurance_rc_professionelle: "Opportunity Details Pro",
				assurance_mutuelle_entreprise: "Opportunity Details Pro",
				assurance_prevoyance_collective: "Opportunity Details Pro",
				assurance_decennale_do: "Opportunity Details Pro",
				assurance_cybersecurite: "Opportunity Details Pro",
				assurance_vehicules_flotte_auto: "Opportunity Details Pro",
				assurance_multirisque_locaux: "Opportunity Details Pro",
				assurance_prevoyance_individuelle: "Opportunity Details Pro",
				assurance_autres_risques: "Opportunity Details Pro",
				assurance_credit: "Opportunity Details Loan",
			};

			const targetScreen = subcategoryToScreenMap[subcategory] || "Opportunity Details";

			return navigateTo(targetScreen, params, mode);
		} catch (error) {
			return showAlert(error.message, "error");
		}
	},
	async searchAllOpportunities() {
		try{
			getProcedureBySalesOwner.clear();
			await getAllOptimizationByStepAndCat.run({
				currentStepIds: utils.getFilterStepIds(),
				categories: utils.getFilterCategories(),
				...utils.getFilterStartAndEndTimes(),
			});

			if (getAllOptimizationByStepAndCat.data.errors)
				throw new Error(getAllOptimizationByStepAndCat.data.errors[0].message);

			showAlert("Opportunité(s) trouvée(s) par Filtres !", "success");
		} catch(error) {
			showAlert(`Opportunité(s) introuvable(s) avec ces filtres ! (${error.message})`, "error");
		}
	},
	async searchOpportunitiesBySalesOwner() {
		try{
			getAllOptimizationByStepAndCat.clear();
			await getProcedureBySalesOwner.run({
				salesOwnerEmail: SalesOwnerEmailSelect.selectedOptionValue,
				currentStepIds: utils.getFilterStepIds(),
				categories: utils.getFilterCategories(),
				...utils.getFilterStartAndEndTimes(),
			});

			if (getProcedureBySalesOwner.data.errors)
				throw new Error(getProcedureBySalesOwner.data.errors[0].message);

			showAlert("Opportunité(s) trouvée(s) par SalesOwner !", "success");
		} catch(error) {
			showAlert(`Opportunité(s) introuvable(s) pour ce Sales ! (${error.message})`, "error");
		}
	},
	async searchOpportunities() {
		try {
			if (SalesOwnerEmailSelect.selectedOptionValue) 
				return await this.searchOpportunitiesBySalesOwner();

			return await this.searchAllOpportunities();
		} catch (error) {
			showAlert(`Opportunité(s) introuvable(s). Vérifiez vos informations. (${error.message})`, "error");
		}
	},
	async cleanFilters() {
		try{
			resetWidget("EndDate", true); 
			resetWidget("StartDate", true);
			resetWidget("stepSelect", true);
			resetWidget("categorySelect", true);
			resetWidget("ProceduresStep01", true);
			resetWidget("SalesOwnerEmailSelect", true);
			resetWidget("DateTimeFiltersSwitch", true);
			getProcedureBySalesOwner.clear();
			await getAllOptimizationByStepAndCat.run({ currentStepIds: utils.DefaultStepsIds });
		} catch(error) {
			return showAlert(error.message, "error");
		} 
	},
}