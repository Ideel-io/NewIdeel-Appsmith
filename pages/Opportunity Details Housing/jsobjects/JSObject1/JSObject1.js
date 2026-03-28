export default {
	valid () {
		return holder_first_name.isValid && holder_last_name.isValid && holder_birthdate.isValid && select_holder_occupation.isValid && select_holder_marital_status.isValid && holder_street_number.isValid && holder_route.isValid && holder_postal_code.isValid && holder_city.isValid && holder_country.isValid && select_holder_housing_type.isValid && select_holder_residence_type.isValid && select_holder_furnished.isValid && housing_area.isValid && CaveSelect.isValid && select_number_of_large_rooms.isValid &&  value_furnituresSelect.isValid && select_nb_adults.isValid && select_nb_childs.isValid && valueLuxuryGoodsSelect.isValid && select_type_third_sinister_H.isValid && select_type_second_sinister_H.isValid && select_type_first_sinister_H.isValid && SelectProfile.isValid && SelectHousing.isValid;
	},
	myFun1: () => {
		const urlParameters = {
			"userId": appsmith.URL.queryParams.userId,
			"email":
			appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId
		}

		navigateTo(
			"Subscription Housing", 
			urlParameters,
			"SAME_WINDOW")
	},
	expandContainer: true,
	
}