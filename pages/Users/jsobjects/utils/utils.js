export default {
	UserType: {
		User: 'user',
		Staff: 'staff',
		CoCourtage: 'coCourtage',
	},
	UserOccupation: {
		employee: "Salarié(e)",
		executive: "Salarié(e) Cadre",
		farmer: "Salarié(e) / exploitant(e) agricole",
		entrepreneur: "Chef d'entreprise",
		selfEmployed: "Travailleur / Travailleuse non salarié(e)",
		unemployed: "Sans profession",
		functionary: "Fonctionnaire",
		student: "Étudiant(e)",
		retired: "Retraité(e)",
		other: "Autre",
	},
	UtmSource: {
		B2B: 'B2B',
		SEO: 'SEO',
		App: 'Direct',
		Referral: 'Referral',
		Ambassador: 'Ambassador',
		Partenariat: 'Partenariat',
		"Bouche à oreille": "Word of mouth",
	},
	UtmMedium: {
		"web": "web",
		"ios": "ios", 
		"android": "android",
		"appsmith": "appsmith",
	},
	AccountStatus: {
		ACTIVE: 'ACTIVE',
		INACTIVE: 'INACTIVE',
	},
	ClientStatus: {
		LEAD: 'LEAD',
		ACCOUNT: 'ACCOUNT',
		CLIENT: 'CLIENT',
	},
	AccountStatusMap: {
		[this.AccountStatus.ACTIVE]: 'Actif',
		[this.AccountStatus.INACTIVE]: 'Inactif',
	},
	ClientStatusMap: {
		[this.ClientStatus.LEAD]: 'Lead',
		[this.ClientStatus.ACCOUNT]: 'Compte',
		[this.ClientStatus.CLIENT]: 'Client',
	},
	isNewUserFormValidCoCourtage: () => {
		const requiredFields = [
			newUserEmail, 
			newUserLastName, 
			newUserFirstName, 
			newUserDateBirth,
			newUserOccupation,
			newUserPhoneNumber,
			newUser_marital_status,
		]
		return requiredFields.every(field => field.isValid)
	},
	isNewUserFormValid: () => {
		const requiredFields = [
			newUserEmail, 
			newUserLastName, 
			newUserFirstName, 
			newUserDateBirth,
			newUserUtmSource,
			newUserUtmMedium,
			newUserOccupation,
			newUserPhoneNumber,
			newUser_marital_status
		]
		return requiredFields.every(field => field.isValid)
	},
	formatPhoneNumber: (phoneNumber) => {
		const noLeadingZero = phoneNumber.replace(/^0/, ""); 
		const formatted = noLeadingZero.replace(/\s/g, ""); 
		if (formatted.startsWith("+33")) return formatted;
		return `+33${formatted}`; 
	},
	getUtmSourceOptions: () => Object.entries(this.UtmSource).map(([name, value]) => ({name, value})),
	getUtmMediumOptions: () => Object.entries(this.UtmMedium).map(([id, ownerName]) => ({id, ownerName})),
	getNewUserOccupationOptions: () => Object.entries(this.UserOccupation).map(([value, name]) => ({name, value})),
	createNewUser: async () => {
		try{
			await createAccountByStaff.run({
				userInput: {
					email: newUserEmail.text,
					lastName: newUserLastName.text,
					firstName: newUserFirstName.text,
					...(newUser_marital_status.selectedOptionValue ? {maritalStatus: newUser_marital_status.selectedOptionValue} : {}),
					...(newUserUtmSource.selectedOptionValue ? {utmSource: newUserUtmSource.selectedOptionValue} : {}),
					...(newUserUtmMedium.selectedOptionValue ? {utmMedium: newUserUtmMedium.selectedOptionLabel} : {}),
					...(newUserPhoneNumber.text ? {phoneNumber: utils.formatPhoneNumber(newUserPhoneNumber.text)} : {}),
					...(newUserOccupation.selectedOptionValue ? {occupation: newUserOccupation.selectedOptionValue} : {}),
					...(newUserDateBirth.selectedDate ? {dateBirth: dayjs(newUserDateBirth.selectedDate).valueOf()} : {}),
					...(newUserUtmSource.selectedOptionLabel === this.UtmSource.B2B ? {partner: newUserUtmMedium.selectedOptionValue}: {})
				}
			});

			if (createAccountByStaff.data.errors) throw new Error(createAccountByStaff.data.errors[0].message);

			closeModal(createNewUserModal.name);
			showAlert('Utilisateur créé avec succès !', 'success');

			await getAllUser.run();
			await navigateTo('User details', { email: newUserEmail.text }, 'NEW_WINDOW');
		} catch(error){
			showAlert(`Création impossible ! (${error.message})`, 'error');
		}
	},
	capitalize: (str) => {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	}
}