export default {
	complet: "Incompleted",
	validation: false,
	subscriptionId : getProcedureById.data.data.getProcedureById.recurrentSubscriptionId,
	userId : findUserByEmail.data.data.findUserByEmail.id,


	async runQueries() {
		await GetUser.run();
		await findUserByEmail.run();
		await getDocuments.run();
		await getProcedureById.run();
		await getProcedureDetails.run();
		await getAllFamilyMembersByStaff.run();
		await NouveauxPartner.run();
		await GetAllAdress.run();
		await MySendingBoxAdress.run();
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
		Pret_Checkbox.setDisabled(true)
		Connexe_Checkbox.setDisabled(true)
		Delegation_Checkbox.setDisabled(true)
		Info_Delegataire.setDisabled(true)
		Info_Conseiller.setDisabled(true)
		Button_Commentaires.setDisabled(true)
	},

	requiredDocs: {
		contrat_signé: false || (!GetUser.data["0"]["Pièce manquantes"].includes("contrat_signé")),
		identité: false || (!GetUser.data["0"]["Pièce manquantes"].includes("identité")),
		tableau_offre: false || (!GetUser.data["0"]["Pièce manquantes"].includes("tableau_offre")),
		new_contract: false || (!GetUser.data["0"]["Pièce manquantes"].includes("new_contract")),

	},

	getVerifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === true)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},

	getUnverifiedDocs: (requiredDocs) => {
		const verifiedDocsList = Object.entries(requiredDocs).filter(([, v]) => v === false)
		const verifiedDocsLabels = verifiedDocsList.map(([k, ]) => k)
		return verifiedDocsLabels.join()
	},

	getSignedContractLink: () => {
		const campaign = user_new_partner.selectedOptionLabel;

		const link = NouveauxPartner.data.find(
			item => item.Compagnie === campaign
		)["Lien Contrat signé"];

		navigateTo(link, {}, 'NEW_WINDOW');
	},

	RequiredDocumentsStatus: {
		Completed: 'Completed',
		Incompleted: 'Incompleted',
		Uncertainty: 'Uncertainty',
	},

	todayDate: () => {
		const todayDate = new Date();
		return dayjs(todayDate).format("YYYY/MM/DD").toString();
	},

}