export default {
	goToPage: () => {
		const urlParameters = {
			"email": appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId}

		navigateTo('Opportunity Details Energy', 
							 urlParameters,
							 "SAME_WINDOW")
	}
}