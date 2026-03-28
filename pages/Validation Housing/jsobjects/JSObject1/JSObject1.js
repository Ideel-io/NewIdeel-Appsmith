export default {
	complet: "Incompleted",
	validation: false,
	isResiliationDone :false,
	signedContract : false,


	async runQueries() {
		await NouveauxPartner.run();
		await getProcedureById.run();
		await getProcedureDetails.run();
		await getAllFamilyMembersByStaff.run()
		await getDocuments.run();
		await GetAllAdress.run();
		await MySendingBoxAdress.run();
		JSObject2.getCommessionOptions();
	},
	
	async validateContract() {
    try {
      await validateContract.run();
			
			if (validateContract.data.errors) throw new Error(validateContract.data.errors[0].message);

      closeModal(Modal_Valide.name);
      JSObject1.validation = true;
      navigateTo("Validation Management", {}, "SAME_WINDOW");
      showAlert('Fait !', 'success');
    } catch (e) {
      showAlert('Error', 'error');
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
		user_date_effet.setDisabled(true)
		user_compagnie_a_resilier.setDisabled(true)
		user_ancien_contrat.setDisabled(true)
		user_birthdate.setDisabled(true)
	},



	getUnverifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === false)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},

	getSignedContractLink: () => {
		const campaign = user_new_partner.selectedOptionLabel;

		if (campaign === "AXA") navigateTo('auth.yousign.app', {}, 'NEW_WINDOW')
		const link = NouveauxPartner.data.find(
			item => item.Compagnie === campaign
		)["Lien Contrat signé"];

		navigateTo(link, {}, 'NEW_WINDOW');
	},

	getVerifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === true)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},

	RequiredDocumentsStatus: {
		Completed: 'Completed',
		Incompleted: 'Incompleted',
		Uncertainty: 'Uncertainty',
	},
}