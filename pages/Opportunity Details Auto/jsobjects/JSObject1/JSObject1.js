export default {
	
	goToOpportunityTable: (category, stepId) => {
	const urlParameters = {
		"category": category,
		"stepId": stepId,
	};
		
	const page = stepId < 3 ? "Opportunités à traiter"	: "Subscriptions Management"
	
	navigateTo(page, urlParameters, "SAME_WINDOW");
  },
	
	goToSubscriptionScreen: () => {
		const urlParameters = {
			"userId": appsmith.URL.queryParams.userId,
			"email": appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId
		}

		return navigateTo("Subscription Auto", urlParameters, "SAME_WINDOW");
	},
	valid () {
		return holder_first_name.isValid && holder_last_name.isValid && holder_birthdate.isValid && select_holder_occupation.isValid && select_holder_marital_status.isValid && holder_street_number.isValid && holder_route.isValid && holder_postal_code.isValid && holder_city.isValid && holder_country.isValid && select_holder_housing_type.isValid && select_holder_furnished.isValid && select_kilometers.isValid && select_usage.isValid && select_stationnement.isValid && date_achat_vehicule_input.isValid && select_date_first_release_car.isValid && select_finance.isValid && select_immat.isValid && select_date_driving.isValid && select_bonus_malus.isValid && select_nb_sinisters_auto.isValid && select_incidents.isValid && select_type_1s_auto.isValid && select_resp_1s_auto.isValid && select_type_2s_auto.isValid && select_resp_2s_auto.isValid && select_type_3s_auto.isValid && select_resp_3s_auto.isValid && select_resi5year_auto.isValid && select_motif_auto.isValid && select_expectation.isValid && SelectProfile.isValid && SelectHousing.isValid;
	},
	expandContainer: true,
}