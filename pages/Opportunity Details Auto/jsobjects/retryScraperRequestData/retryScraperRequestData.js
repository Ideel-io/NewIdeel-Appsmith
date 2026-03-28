export default {
	retryScraperRequestData() {
	var retryAuto = {
		"procedureId": appsmith.URL.queryParams.procedureId,
		"recurrentSubscriptionId": getProcedureById.data.data.getProcedureById.recurrentSubscriptionId,
		"userId": getProcedureById.data.data.getProcedureById.user.id,
		"familyMembers": [],

		"dateBirth": holder_birthdate.text,
		"lastName": holder_last_name.text,
		"email": holder_e_mail.text,
		"firstName": holder_first_name.text,
		"phoneNumber": holder_phone_number.text,
		"occupation": select_holder_occupation.selectedOptionValue,
		"maritalStatus": select_holder_marital_status.selectedOptionValue,

		"country": holder_country.text,
		"route": holder_route.text,
		"streetNumber": holder_street_number.text,
		"postalCode": holder_postal_code.text,
		"locality": holder_city.text,

		"housingType": select_holder_housing_type.selectedOptionValue,
		"furnished": select_holder_furnished.selectedOptionValue,

		"date_first_release_car": select_date_first_release_car.text,
		"improvement_needs_car_motorbike": select_expectation.selectedOptionValue,

		"funding_method_car_insurance": select_finance.selectedOptionValue,
		"license_plate_car_insurance": select_immat.text,
		"workplace_car_insurance": workplace_postal_code_input.text, 

		"driving_license_date_auto_insurance": select_date_driving.text,
		"bonus_malus_auto_insurance": select_bonus_malus.text,

		"insurance_history_primary": select_insurance_history_prima.selectedOptionValue,
		"insurance_history_secondary": select_insurance_history_secon.selectedOptionValue,

		"number_claims": select_nb_sinisters_auto.selectedOptionValue,

		"type_first_claim": select_type_1s_auto.selectedOptionValue,
		"responsibility_level_first_claim": select_resp_1s_auto.selectedOptionValue,

		"type_second_claim": select_type_2s_auto.selectedOptionValue,
		"responsibility_level_second_claim": select_resp_2s_auto.selectedOptionValue,

		"type_third_claim": select_type_3s_auto.selectedOptionValue,
		"responsibility_level_third_claim": select_resp_3s_auto.selectedOptionValue,

		"incidents_car_insurance": select_incidents.selectedOptionValue,
		"previous_cancelation_vehicle_insurance": select_resi5year_auto.selectedOptionValue,
		"previous_cancelation_reasons_vehicle_insurance": select_motif_auto.selectedOptionValue,

		"usage_car_insurance": select_usage.selectedOptionValue,

		"yearly_kilometers_car_insurance": select_kilometers.selectedOptionValue,
		"parking_type_car_insurance": select_stationnement.selectedOptionValue,

		"date_purchase_car_insurance": date_achat_vehicule_input.text,
		"isnt_new_car": select_etat.selectedOptionValue,

		"profile_selection_auto": SelectProfile.selectedOptionValue,
		"housing_selection_auto": SelectHousing.selectedOptionValue,
	};

	return JSON.stringify(retryAuto);
}
};