export default {
	complet: "Incompleted",
	validation: false,
	
	ContainerEnregistrer : false,

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

	async runQueries() {
		await GetAllAdress.run();
		await NouveauxPartner.run();
		await MySendingBoxType.run();
		await getAllFamilyMembersByStaff.run();
		await getLastHousingRunData.run();
		await getProcedureDetails.run();
		await getDocuments.run();
		await getProcedureById.run();
		await MySendingBoxAdress.run();
		await ContractNumberValidation.run();
	},



	RequiredDocumentsStatus: {
		Completed: 'Completed',
		Incompleted: 'Incompleted',
		Uncertainty: 'Uncertainty',
	},

	getSignedContractLink: () => {
	
		const partner = Object.values(NouveauxPartner.data).find(entry => 
        entry["Compagnie"] === user_new_partner.selectedOptionLabel
       );

		const link = partner["Lien Contrat signé"];

		navigateTo(link, {}, 'NEW_WINDOW');
	},

	resiliationContractNotExist: () => {
	  this.validation = true;
		contract_resiliation.setColor("gray");
    contract_resiliation.setLabel('❌ Un contrat à résilier');
		pas_resiliation.setColor("#93c5fd");
		pas_resiliation.setLabel('✅ Pas de résiliation nécessaire');
		user_resiliation_a_faire.setSelectedOption("false");

		user_ancien_contrat.setValue('')
		user_property.setValue('')
		SelectProfileResiliation.setSelectedOption('')
		
				user_resiliation_a_faire.setVisibility(false);

    	user_compagnie_a_resilier.setVisibility(false);
			user_property.setVisibility(false);
			user_ancien_contrat.setVisibility(false);
		 textResiliation.setVisibility(false)
		SelectProfileResiliation.setVisibility(false)
	},

	resiliationContractExist: () => {
		this.validation = true;
		contract_resiliation.setColor("#93c5fd");
		pas_resiliation.setColor("gray");
		pas_resiliation.setLabel('❌ Pas de résiliation nécessaire');
		contract_resiliation.setLabel('✅ Un contrat à résilier');
		
		user_resiliation_a_faire.setVisibility(true);
		user_compagnie_a_resilier.setVisibility(true);
			user_property.setVisibility(true);
			user_ancien_contrat.setVisibility(true);
		 textResiliation.setVisibility(true)
				SelectProfileResiliation.setVisibility(true)

			const partner = Object.values(NouveauxPartner.data).find(entry => 
        entry["Compagnie"] === user_new_partner.selectedOptionLabel
       );

		const resiliationIdeel = partner["Résiliation ideel"];

		if (resiliationIdeel) {
			user_resiliation_a_faire.setSelectedOption("true");
			user_compagnie_a_resilier.setDisabled(false);
			user_property.setDisabled(false);
			user_ancien_contrat.setDisabled(false);
			getLastHousingRunData.run();
			MySendingBoxAdress.run();
		} else {
			user_resiliation_a_faire.setSelectedOption("false");
			user_ancien_contrat.setValue('');
			user_compagnie_a_resilier.setSelectedOption('');
			user_property.setValue('');
			user_compagnie_a_resilier.setDisabled(true);
			user_property.setDisabled(true);
			user_ancien_contrat.setDisabled(true);
		}

	},
	
	resetResiliationContract: () => {
		this.validation = false;
		contract_resiliation.setColor("#93c5fd");
		pas_resiliation.setColor("#93c5fd");
		pas_resiliation.setLabel('Pas de résiliation nécessaire');
		contract_resiliation.setLabel('Un contrat à résilier');
		
		user_ancien_contrat.setValue('')
		user_property.setValue('')
		SelectProfileResiliation.setSelectedOption('')
		
				user_resiliation_a_faire.setVisibility(false);

    	user_compagnie_a_resilier.setVisibility(false);
			user_property.setVisibility(false);
			user_ancien_contrat.setVisibility(false);
		 textResiliation.setVisibility(false)
		SelectProfileResiliation.setVisibility(false)

	},
	
	
	checkDateValidityBeforeSendLetter:() => {
		
		const effectiveDate = user_date_effet.selectedDate; 
    const sendingDate = user_date_envoie.selectedDate; 
    const diffDays = moment(effectiveDate).diff(moment(sendingDate), "days");

    if (diffDays >= 32) {
			showModal(ModalLetter.name);
		} else {
			showAlert("Attention : la date d'effet renseignée pour le nouveau contrat ne respecte pas le délai de 32 jours nécessaires à la"  +             "résiliation de l'ancien contrat. Veuillez vérifier les informations saisies.", "warning");
		}
	},

	isDateValid: () => {
		const requiredFields = [
			user_date_effet1,
			user_date_effet2
		]
		return requiredFields.some(field => field.formattedDate.length > 0)
	},

	typeDeContrat: {
		"Assurance deux roues": 'Assurance 2 roues',
		"Assurance habitation": 'Assurance Habitation',
		"Assurance emprunteur": 'Assurance Emprunteur',
		"Assurance auto": 'Assurance Auto',
		"Assurance santé & prévoyance": 'Mutuelle Sante',
	},
	
	isSendLetterFormValid: () => {
		const requiredFieldsEmail = [
			user_adress1,
			user_adress2,
			user_adress3,
			user_type_envoie,
			user_date_envoie,
			mail_lre
		];
		
		const requiredFieldsLetter = [
			user_adress1,
			user_adress2,
			user_adress3,
			user_type_envoie,
			user_date_envoie
		];
		
		let requiredFields = paperLetter.isSwitchedOn ? requiredFieldsEmail : requiredFieldsLetter;
		
		return requiredFields.every(field => field.isValid)
	},

	isSouscriptionFormValid: () => {
		const requiredFields = [
			SelectProfile,
			user_cotisation,
			user_new_partner,
			user_resiliation_a_faire,
			user_new_tarif,
			user_date_effet,
			Commission_pourcentage,
			Commission_pourcentage2,
			Commission_pourcentage3
		];

		return requiredFields.every(field => field.isValid)
	},
}