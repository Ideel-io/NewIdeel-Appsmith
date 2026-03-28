export default {
	goToPage: () => {
		const urlParameters = {
			"userId": appsmith.URL.queryParams.userId,
			"email": appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId}

		navigateTo('Opportunity Details Auto', 
							 urlParameters,
							 "SAME_WINDOW")
	}
}