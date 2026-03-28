export default {
	retryScraperRequestData() {
	var retryHealth = {
		"procedureId": appsmith.URL.queryParams.procedureId,
		"recurrentSubscriptionId": getProcedureById.data.data.getProcedureById.recurrentSubscriptionId,
		"userId": getProcedureById.data.data.getProcedureById.user.id,

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

		"residenceType": select_holder_residence_type.selectedOptionValue,
		"housingType": select_holder_housing_type.selectedOptionValue,
		"furnished": select_holder_furnished.selectedOptionValue,


		"contract_type_selection": ContractTypeSelect.selectedOptionValue,
    "coverage_hearing_needs": HearingNeedsSelect.selectedOptionValue,
		"coverage_alternative_medicine_needs": AlternativeMedicineSelect.selectedOptionValue,
		
	
		"coverage_medical_needs": MedicalNeedsSelect.selectedOptionValue,
		"coverage_hospital_needs": HospitalNeedsSelect.selectedOptionValue,
		"coverage_optic_needs": OpticNeedsSelect.selectedOptionValue,
		"coverage_dental_needs": DentalNeedsSelect.selectedOptionValue,
		

		"who_is_covered_by_health_insurance": CoveredPersonSelect.selectedOptionValue,

		"how_many_children_covered": CoveredChildrenNumber.selectedOptionValue,

		"spouse_details": SpouseProfileSelect.selectedOptionValue,
		"first_child_details": FirstChildSelect.selectedOptionValue,
		"second_child_details": SecondChildSelect.selectedOptionValue,
		"third_child_details": ThirdChildSelect.selectedOptionValue,
		"fourth_child_details": FourthChildSelect.selectedOptionValue,

		"profile_selection_credit_health": SelectProfile.selectedOptionValue,

		"housing_selection_other": SelectHousing.selectedOptionValue,
	};

	Object.keys(retryHealth).forEach((key) => {
		if (
			retryHealth[key] === null ||
			retryHealth[key] === undefined ||
			retryHealth[key] === ""
		) {
			delete retryHealth[key];
		}
	});

	return JSON.stringify(retryHealth);
}
};