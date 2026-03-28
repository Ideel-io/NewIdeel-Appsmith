export default {
	currentStep: getProcedureById.data.data?.getProcedureById.currentStepId,
	state: getProcedureById.data.data?.getProcedureById.currentStepId,
	isProcedureClosed: getProcedureById.data.data?.getProcedureById.endState === "CANCELLATION" || getProcedureById.data.data.getProcedureById.endState === "FAILURE",
	state_map_opti: {
		"0" : "A) Demande Identifiée",
		"1" : "B) Besoins & Infos Collectées",
		"2" : "En Stand-By",
		"3" : "C) Devis Partagé",
		"4" : "D) Souscription Finalisée",
		"5" : "E) Contrat Validé",
	},
	currentOptimizationMappedState: this.state_map_opti[this.currentStep],
	getCurrentStatus: () => {
		let currentStatus = "Ouvert";
		const {endState, currentState} = getProcedureById.data.data?.getProcedureById;

		if (currentState === "IN_PROGRESS") return currentStatus;

		switch (endState) {
			case "SUCCESS":
				currentStatus = "Succès";
				break;
			case "FAILURE":
				currentStatus = "Échec";
				break;
			case "CANCELLATION":
				currentStatus = "Abandon";
				break;
			default:
				break;
		}
		return currentStatus;
	},
	isMoveToDevisPartageDisabled: this.currentStep >= 3 || this.isProcedureClosed,
	isMoveToSouscriptionDisabled:  this.currentStep <= 1 || this.currentStep >= 4 || this.isProcedureClosed,
	standBy: async () => {
		ProcedureState.state = 2;
		await goToStep.run();
		await getProcedureById.run();
	},
	moveToDevisPartage: async () => {
		ProcedureState.state = 3;
		await goToStep.run();
		await getProcedureById.run();
	},
	goToSubscriptionScreen: () => {
		const urlParameters = {
			"userId": appsmith.URL.queryParams.userId,
			"email": appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId
		}

		return navigateTo("Subscription Health", urlParameters, "SAME_WINDOW");
	},
	valid () {
		return holder_first_name.isValid && holder_last_name.isValid && holder_birthdate.isValid && select_holder_occupation.isValid && select_holder_marital_status.isValid && holder_street_number.isValid && holder_route.isValid && holder_postal_code.isValid && holder_city.isValid && holder_country.isValid  && MedicalNeedsSelect.isValid && HospitalNeedsSelect.isValid && OpticNeedsSelect.isValid && DentalNeedsSelect.isValid && CoveredPersonSelect.isValid  && SelectProfile.isValid && SelectHousing.isValid;
	},
}