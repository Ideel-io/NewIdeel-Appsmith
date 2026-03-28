export default {
	complet: "Incompleted",
	validation: false,
	contrat : GetUser.data["0"]["# de contrat à résilier"],
	subscriptionId : getProcedureById.data.data.getProcedureById.recurrentSubscriptionId,
	userId : getProcedureById.data.data.getProcedureById.user.id,

	async runQueries() {
    // Check if findUserByEmail has returned the userId
		await getProcedureById.run();
    const procedureId = getProcedureById.data && getProcedureById.data.data.getProcedureById.id;

    if (procedureId) {
			NouveauxPartner.run();
    }
		
		await getProcedureDetails.run();

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
		EditerValider.setDisabled(true)
	},

	requiredDocs: {
		contrat_signé: false || (!GetUser.data["0"]["Pièce manquantes"].includes("contrat_signé") && GetUser.data["0"]["Status"] == "vérifié"),
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
}