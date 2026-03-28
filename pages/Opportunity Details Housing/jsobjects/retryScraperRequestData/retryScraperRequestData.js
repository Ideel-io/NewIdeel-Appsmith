export default {
	retryScraperRequestData() {
	var retryHouse = {
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

		"number_of_rooms": select_number_of_rooms.selectedOptionValue,
		"number_of_large_rooms": select_number_of_large_rooms.selectedOptionValue,

		"housing_number_adults": select_nb_adults.selectedOptionValue,
		"housing_number_children": select_nb_childs.selectedOptionValue,

		"housing_number_sinister": select_sinister.selectedOptionValue,

		"housing_type_sinister": select_type_first_sinister_H.selectedOptionValue,
		"housing_type_second_sinister": select_type_second_sinister_H.selectedOptionValue,
		"housing_type_third_sinister": select_type_third_sinister_H.selectedOptionValue,

		"profile_selection_habitation": SelectProfile.selectedOptionValue,
		"housing_selection_habitation": SelectHousing.selectedOptionValue,

		"housing_area_size": housing_area.text,
		"value_furnitures": value_furnituresSelect.selectedOptionValue,
		"value_luxury_goods": valueLuxuryGoodsSelect.selectedOptionValue,

		
		"housing_cave": CaveSelect.selectedOptionValue,
		"housing_cave_size": caveSizeInput.text, 

		"housing_features_multi": JSON.stringify(featuresMultiSelect.selectedOptionValues)
	};

	return JSON.stringify(retryHouse);
}
};