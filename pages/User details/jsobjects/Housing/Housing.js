export default {
	housingLoaded: false,
	placeSelectorShown: false,
	currentSelectedHousing: {},
	mainHousing: "",
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
	getMainHousingAddress() {
		const housings = getUserAllHousingsByStaff?.data?.data?.getUserAllHousingsByStaff?.housings;

    if (!housings) {
			return "Non renseigné";
    }
		
  
    const mainHousing = housings.find(housing => housing.residenceType === "main");
  
    if (mainHousing && mainHousing.address) {
			return mainHousing.address.fullAddress;
		} else {
			return "Non renseigné";
		}
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
				userId: findUserByEmail.data.data?.findUserByEmail.id,
				input: {
					address: AddGoogleMaps.model.data,
					...(AddResidenceType.selectedOptionValue ? { residenceType: AddResidenceType.selectedOptionValue } : {}),
					...(AddHousingType.selectedOptionValue ? { housingType: AddHousingType.selectedOptionValue } : {}),
					...(AddOwnership.selectedOptionValue ? { furnished: AddOwnership.selectedOptionValue } : {}),
				}
			});

			if (createHousingByStaff.data.errors) throw new Error(createHousingByStaff.data.errors[0].message);
			
			await getUserAllHousingsByStaff.run();
			showAlert('Logement ajouté !', 'success');
			showModal(HousingModal.name);
		} catch(error){
			showAlert(`Ajout impossible ! (${error.message})`, 'error');
		}
	},
	async updateHousing() {
		try{
			await updateHousingByStaff.run({
				userId: findUserByEmail.data.data?.findUserByEmail.id,
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
			showModal(HousingModal.name);
		} catch(error){
			showAlert(`Mise à jour impossible ! (${error.message})`, 'error');
		}
	},
	async deleteHousing(housingId) {
		try{
			await deleteHousingByStaff.run({
				userId: findUserByEmail.data.data?.findUserByEmail.id,
				housingId,
			});

			if (deleteHousingByStaff.data.errors) throw new Error(deleteHousingByStaff.data.errors[0].message);
			
			await getUserAllHousingsByStaff.run();

			showAlert('Logement supprimé !', 'success');
		} catch(error){
			showAlert(`Suppression impossible ! (${error.message})`, 'error');
		}
	}
}