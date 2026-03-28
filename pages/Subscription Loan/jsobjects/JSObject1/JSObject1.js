export default {
	complet: "Incompleted",
	validation: false,
	contrat : GetUser.data["0"]?.["# de contrat à résilier"],
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

	disable: () => {
		user_first_name.setDisabled(true)
		user_last_name.setDisabled(true)
		user_email.setDisabled(true)
		user_compagnie_a_resilier.setDisabled(true)
		user_ancien_contrat.setDisabled(true)
		user_birthdate.setDisabled(true)
		user_cotisation.setDisabled(true)
		user_contrat_type.setDisabled(true)
		user_new_partner.setDisabled(true)
		user_property.setDisabled(true)
		user_resiliation_a_faire.setDisabled(true)
		user_new_tarif.setDisabled(true)
		Signe_Checkbox1.setDisabled(true)
		Signe_Button.setDisabled(true)
		Offre_Checkbox1.setDisabled(true)
		Tableau_Checkbox1.setDisabled(true)
		Tableau_Button.setDisabled(true)
		Tableau_File_Picker.setDisabled(true)
		Enregistrer.setDisabled(true)
	},
	
	getrequiredDocs: () => {
		if (GetUser.data["0"]) {
			const 	requiredDocs = {
				contrat_signé: (!GetUser.data["0"]["Pièce manquantes"].includes("contrat_signé")),
				identité: (!GetUser.data["0"]["Pièce manquantes"].includes("identité")),
				tableau_offre: (!GetUser.data["0"]["Pièce manquantes"].includes("tableau_offre")),
			};
			return requiredDocs;
		} else {
			const 	requiredDocs = {
				contrat_signé: false,
				identité: false,
			  tableau_offre: false,
			};
			return requiredDocs;
		}
	},

	requiredDocs: {
		contrat_signé: JSObject1.getrequiredDocs.data.contrat_signé,
		identité: JSObject1.getrequiredDocs.data.identité,
		tableau_offre: JSObject1.getrequiredDocs.data.tableau_offre,
		new_contract: false,
		old_contract: false
	},

	getVerifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === true)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},

	getunVerifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === false)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},

	RequiredDocumentsStatus: {
		Completed: 'Completed',
		Incompleted: 'Incompleted',
		Uncertainty: 'Uncertainty',
	},
	
	getSignedContractLink: () => {
		const campaign = user_new_partner.selectedOptionLabel;
	
		const link = NewPartnerSelect.data.find(
			item => item.Compagnie === campaign
    )["Lien Contrat signé"];
				
		navigateTo(link, {}, 'NEW_WINDOW');
	},
	
	resiliationContractNotExist: () => {
		contract_resiliation.setColor("gray");
    contract_resiliation.setLabel('❌ Un contrat à résilier');
		pas_resiliation.setColor("#93c5fd");
		pas_resiliation.setLabel('✅ Pas de résiliation nécessaire');
		user_resiliation_a_faire.setSelectedOption("Non");
		
		user_ancien_contrat.setValue('')
		user_compagnie_a_resilier.setSelectedOption('')
		user_property.setValue('')
		
		user_date_effet1.setValue(GetUser.data["0"]?.["Date effet du nouveau contrat"] ? moment(GetUser.data["0"]?.["Date effet du nouveau contrat"]) : "")
		user_date_effet2.setValue('')
	},
	
	resiliationContractExist: () => {
		contract_resiliation.setColor("#93c5fd");
		pas_resiliation.setColor("gray");
		pas_resiliation.setLabel('❌ Pas de résiliation nécessaire');
		contract_resiliation.setLabel('✅ Un contrat à résilier');

		user_date_effet1.setValue('')
		user_date_effet2.setValue(GetUser.data["0"]?.["Date effet du nouveau contrat"] || "")
		
		
		const campaign = user_new_partner.selectedOptionLabel;
	
		const resiliationIdeel = NewPartnerSelect.data.find(
			item => item.Compagnie === campaign
    )["Résiliation ideel"];
		
		if (resiliationIdeel === "Résiliation Ideel") {
			user_resiliation_a_faire.setSelectedOption("Oui");
			user_compagnie_a_resilier.setDisabled(false);
			user_property.setDisabled(false);
			user_ancien_contrat.setDisabled(false);
		  getProcedureDetails.run();
		} else {
			user_resiliation_a_faire.setSelectedOption("Non");
			user_ancien_contrat.setValue('');
		  user_compagnie_a_resilier.setSelectedOption('');
		  user_property.setValue('');
			user_compagnie_a_resilier.setDisabled(true);
			user_property.setDisabled(true);
			user_ancien_contrat.setDisabled(true);
		}

	},
	
	isDateValid: () => {
		const requiredFields = [
			user_date_effet1,
			user_date_effet2
		]
		return requiredFields.some(field => field.formattedDate.length > 0)
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
			user_resiliation_a_faire,
			user_new_tarif,
		]
		return requiredFields.every(field => field.isValid)
	},
}