export default {
	goToPage: () => {
		const urlParameters = {
			"email": appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
						"userId" : appsmith.URL.queryParams.userId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId}

		navigateTo('Opportunity Details Loan', 
							 urlParameters,
							 "SAME_WINDOW")
	}
}