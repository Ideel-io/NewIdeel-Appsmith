export default {
	myVar1: [],
	myVar2: {},
	ratio: {
			"WEEKLY": 4,
			"MONTHLY": 1,
			"BI_MONTHLY": 0.5,
			"QUARTERLY": 0.3,
			"YEARLY": 0.083,
		},
		//return (price * ratio[periodicity] / 100).toFixed(2);
		//return (218700 * ratio["par_an"] / 100).toFixed(2) ;
	
	async goContractDetails (contractId, recurrentSubscriptionId, mode="NEW_WINDOW") {
		try {
			const params = { contractId, recurrentSubscriptionId };

			return navigateTo("Contract Details", params, mode);
		} catch (error) {
			return showAlert(error.message, "error");
		}
	}
}