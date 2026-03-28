export default {
	complet: "Incompleted",
	validation: false,
	contrat : GetUser.data["0"]["# de contrat à résilier"],
	ContainerEnregistrer : false,
	
	
	async runQueries() {
    // Check if findUserByEmail has returned the userId
		await getProcedureById.run();
    const procedureId = getProcedureById.data && getProcedureById.data.data.getProcedureById.id;

    if (procedureId) {
      NewPartnerSelect.run();
			NouveauxPartner.run();
			// user_contrat_type.setSelectedOption(getProcedureById.data.data.getProcedureById.recurrentSubscription.subCategory.name)
    }
  },

	ratio: {
		"WEEKLY": 4,
		"EVERY_2_WEEKS": 2,
		"MONTHLY": 1,
		"EVERY_2_MONTHS": 1/2,
		"EVERY_3_MONTHS": 1/3,
		"EVERY_6_MONTHS": 1/6,
		"EVERY_7_MONTHS": 1/7,
		"EVERY_9_MONTHS": 1/9,
		"YEARLY": 1/12,
		"EVERY_2_YEARS": 1/24,
	},

	disable: () => {
		user_first_name.setDisabled(true)
		user_last_name.setDisabled(true)
		user_email.setDisabled(true)
		user_birthdate.setDisabled(true)
		user_cotisation.setDisabled(true)
		user_contrat_type.setDisabled(true)
		user_new_partner.setDisabled(true)
		user_new_tarif.setDisabled(true)
		user_date_effet.setDisabled(true)
		Signe_Checkbox1.setDisabled(true)
		Signe_Button.setDisabled(true)
		Enregistrer.setDisabled(true)
	},

	getrequiredDocs: () => {
		if (GetUser.data["0"]) {
			const 	requiredDocs = {
				contrat_signé: (!GetUser.data["0"]["Pièce manquantes"].includes("contrat_signé")),
				new_contract:  (!GetUser.data["0"]["Pièce manquantes"].includes("new_contract"))
			};
			return requiredDocs;
		} else {
			const 	requiredDocs = {
				contrat_signé: false,
				new_contract: false
			};
			return requiredDocs;
		}
	},

	requiredDocs: {
		contrat_signé: JSObject1.getrequiredDocs.data.contrat_signé,
		new_contract: JSObject1.getrequiredDocs.data.new_contract
	},

	getUnverifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === false)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},

	getVerifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === true)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},
	
	getSignedContractLink: () => {
		const campaign = user_new_partner.selectedOptionLabel;
	
		const link = NewPartnerSelect.data.find(
			item => item.Compagnie === campaign
    )["Lien Contrat signé"];
				
		navigateTo(link, {}, 'NEW_WINDOW');
	},

	RequiredDocumentsStatus: {
		Completed: 'Completed',
		Incompleted: 'Incompleted',
		Uncertainty: 'Uncertainty',
	},

	typeDeContrat: {
		"Assurance deux roues": 'Assurance 2 roues',
		"Assurance habitation": 'Assurance Habitation',
		"Assurance emprunteur": 'Assurance Emprunteur',
		"Assurance auto": 'Assurance Auto',
		"Assurance santé & prévoyance": 'Mutuelle Sante',
	},

	isSouscriptionFormValid: () => {
		const requiredFields = [
			user_first_name,
			user_last_name,
			user_email,
			user_birthdate,
			user_cotisation,
			user_contrat_type,
			user_new_partner,
			user_new_tarif,
			user_date_effet
		]
		return requiredFields.every(field => field.isValid)
	},
	
	capitalize: (str) => {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	},
}