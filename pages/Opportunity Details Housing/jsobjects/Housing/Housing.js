export default {
	housingLoaded: false,
	placeSelectorShown: false,
	currentSelectedHousing: {},
	openHousingModal() {
		if (!this.housingLoaded) {
			getUserAllHousingsByStaff.run();
			this.housingLoaded = true;
		}
		showModal(HousingModal.name);
	},
	residenceTypes: {
		main: "Résidence principale",
		secondary: "Résidence secondaire",
		rentedOut: "Bien mis en location",
	},
	housingTypes: {
		groundAppartement: "Un appartement au rez-de-chaussée",
		intermediateAppartement: "Un appartement à un étage intermédiaire",
		lastAppartement: "Un appartement au dernier étage",
		houseOneStage: "Une maison à un étage",
		houseTwoStage: "Une maison à deux étages",
		houseThreeStage: "Une maison à trois étages",
		houseFourStage: "Une maison à quatre étages ou plus",
	},
	ownership: {
		owner: "Propriétaire",
		furnished: "En location meublé",
		notFurnished: "En location non meublé",
	},
	residenceTypeOptions: Object.entries(this.residenceTypes).map(([value, name]) => ({name, value})),
	housingTypeOptions: Object.entries(this.housingTypes).map(([value, name]) => ({name, value})),
	ownershipOptions: Object.entries(this.ownership).map(([value, name]) => ({name, value})),
	openEditHousingModal(currentRow) {
		this.currentSelectedHousing = getUserAllHousingsByStaff.data.data.getUserAllHousingsByStaff.housings.find((h) => h.id === currentRow.id);
		showModal(UpdateHousingModal.name);
	},
	showPlaceSelector() {
		this.placeSelectorShown = true;
	},
	hidePlaceSelector() {
		this.placeSelectorShown = false;
	},
	async addHousing() {
		try{
			await createHousingByStaff.run({
				userId: getProcedureById.data.data.getProcedureById.user.id,
				input: {
					address: AddGoogleMaps.model.data,
					...(AddResidenceType.selectedOptionValue ? { residenceType: AddResidenceType.selectedOptionValue } : {}),
					...(AddHousingType.selectedOptionValue ? { housingType: AddHousingType.selectedOptionValue } : {}),
					...(AddOwnership.selectedOptionValue ? { furnished: AddOwnership.selectedOptionValue } : {}),
				}
			});

			if (createHousingByStaff.data.errors) throw new Error(createHousingByStaff.data.errors[0].message);

			await getUserAllHousingsByStaff.run();
			await showAlert('Logement ajouté !', 'success');
			await SelectHousing.setSelectedOption(createHousingByStaff.data.data.createHousingByStaff.id);
			showModal(RelanceScraperHabitation.name);
		} catch(error){
			showAlert(`Ajout impossible ! (${error.message})`, 'error');
		}
	},
	async updateHousing() {
		try{
			await updateHousingByStaff.run({
				userId: getProcedureById.data.data.getProcedureById.user.id,
				input: {
					id: Housing.currentSelectedHousing.id,
					address: UpdateGoogleMaps.model.hasValue ? UpdateGoogleMaps.model.data : Housing.currentSelectedHousing.address,
					...(UpdateResidenceType.selectedOptionValue ? { residenceType: UpdateResidenceType.selectedOptionValue } : {}),
					...(UpdateHousingType.selectedOptionValue ? { housingType: UpdateHousingType.selectedOptionValue } : {}),
					...(UpdateOwnership.selectedOptionValue ? { furnished: UpdateOwnership.selectedOptionValue } : {}),
				}
			});

			if (updateHousingByStaff.data.errors) throw new Error(updateHousingByStaff.data.errors[0].message);

			await getUserAllHousingsByStaff.run();
			showAlert('Logement mis à jour !', 'success');
			await SelectHousing.setSelectedOption(updateHousingByStaff.data.data.updateHousingByStaff.id);
			showModal(RelanceScraperHabitation.name);
		} catch(error){
			showAlert(`Mise à jour impossible ! (${error.message})`, 'error');
		}
	},
	async deleteHousing(housingId) {
		try{
			await deleteHousingByStaff.run({
				userId: getProcedureById.data.data.getProcedureById.user.id,
				housingId,
			});

			if (deleteHousingByStaff.data.errors) throw new Error(deleteHousingByStaff.data.errors[0].message);

			await getUserAllHousingsByStaff.run();

			showAlert('Logement supprimé !', 'success');
		} catch(error){
			showAlert(`Suppression impossible ! (${error.message})`, 'error');
		}
	},
	housingSelector: getUserAllHousingsByStaff.data ? getUserAllHousingsByStaff.data.data.getUserAllHousingsByStaff.housings.map((h) => {
		return { label: h.address.name, value: h.id };
	}) : [],
	findHousing(id) {
		if (!id || !getUserAllHousingsByStaff.data) return {};

		return getUserAllHousingsByStaff.data.data.getUserAllHousingsByStaff.housings.find((h) => h.id === id);
	},
	getDefaultHousingSelectionValue() {
		const housingChoice = getProcedureDetails.data.data?.getProcedureDetails?.housingChoice;

		if (housingChoice) 
			return housingChoice.id;

		if (!getLastHousingRunData.data.data.getLastHousingRunData.userPersonalInfo.route && getUserAllHousingsByStaff.data && getUserAllHousingsByStaff.data.data.getUserAllHousingsByStaff.housings.length === 1) {
			return getUserAllHousingsByStaff.data.data.getUserAllHousingsByStaff.housings[0].id;
		}

		return "";
	}
}