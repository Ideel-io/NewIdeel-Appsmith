export default {
	createNewHouseScraper() {
		var retryHouse = {
			"procedureId": appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId": getProcedureDetails.data.data.getProcedureDetails.recurrentSubscriptionId,
			"userId": getProcedureById.data.data.getProcedureById.user.id,
			"dateBirth": holder_birthdate.text,
			"lastName": holder_last_name.text,
			"email": holder_e_mail.text,
			"firstName": holder_first_name.text,
			"phoneNumber": holder_phone_number.text,
			"occupation": select_holder_occupation.selectedOptionValue,
			"maritalStatus": select_holder_marital_status.selectedOptionValue,
			"country": getProcedureDetails.data.data.getProcedureDetails.housingChoice.address.country,
			"route": getProcedureDetails.data.data.getProcedureDetails.housingChoice.address.route,
			"streetNumber": getProcedureDetails.data.data.getProcedureDetails.housingChoice.address.streetNumber,
			"postalCode": getProcedureDetails.data.data.getProcedureDetails.housingChoice.address.postalCode,
			"locality": getProcedureDetails.data.data.getProcedureDetails.housingChoice.address.locality,
			"residenceType": getProcedureDetails.data.data.getProcedureDetails.housingChoice.residenceType,
			"housingType": getProcedureDetails.data.data.getProcedureDetails.housingChoice.housingType,
			"furnished": getProcedureDetails.data.data.getProcedureDetails.housingChoice.furnished,
			"number_of_rooms": select_number_of_rooms.selectedOptionValue,
			"number_of_large_rooms": select_number_of_large_rooms.selectedOptionValue,
			"house_outbuilding": select_dependances.selectedOptionValue,
			"housing_equipment": select_equipments.selectedOptionValue,
			"housing_number_adults": select_nb_adults.selectedOptionValue,
			"housing_number_children": select_nb_childs.selectedOptionValue,
			"housing_number_sinister": select_sinister.selectedOptionValue,
			"housing_type_sinister": select_type_first_sinister_H.selectedOptionValue,
			"housing_type_second_sinister": select_type_second_sinister_H.selectedOptionValue,
			"housing_type_third_sinister": select_type_third_sinister_H.selectedOptionValue,
			"previous_cancelation_reasons_home_insurance": select_resiliation_5year.selectedOptionValue,
			"previous_cancelation_home_insurance_reasons": select_motif.selectedOptionValue
		};
		return retryHouse;
	}
};