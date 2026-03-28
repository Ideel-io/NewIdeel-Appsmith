export default {
	
	goToOpportunityTable: (category, stepId) => {
	const urlParameters = {
		"category": category,
		"stepId": stepId,
	};
		
	const page = stepId < 3 ? "Opportunités à traiter"	: "Subscriptions Management"
	
	navigateTo(page, urlParameters, "SAME_WINDOW");
},
	myFun1: () => {
		const goToPage = {
			assurance_auto: "Subscription Auto",
			assurance_deux_roues: "Subscription Auto",
			assurance_habitation: "Subscription Housing",
			assurance_credit: "Subscription Loan",
			assurance_sante_et_prevoyance: "Subscription Health",
			electricite_et_gaz: "Subscription Energy",						
			electricite: "Subscription Energy",
			gaz: "Subscription Energy"
		}

		const urlParameters = {
			"email":
			appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId
		}

		navigateTo(
			goToPage[getProcedureById.data.data.getProcedureById.recurrentSubscription.subCategory.label], 
			urlParameters,
			"SAME_WINDOW")
	},
}