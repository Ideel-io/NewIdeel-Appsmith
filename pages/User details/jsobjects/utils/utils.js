export default {
	showSubscriptions: false,
	referralTransactionsLoaded: false,
	bankAccountLoaded: false,
	openReferralModal() {
		if (!this.referralTransactionsLoaded) {
			getReferralTransactions.run();
			this.referralTransactionsLoaded = true;
		}
		showModal(ReferralModal.name);
	},
	openBankAccountModal() {
		if (!this.bankAccountLoaded) {
			getAllUserPaymentIbansByStaff.run();
			this.bankAccountLoaded = true;
		}
		showModal(BankAccountModal.name);
	},
	SUBSCRIPTION_SUBCATEGORY: [
		{
			"subcategoryId": 42,
			"subcategoryName":  "Assurance de Prêt"
		},
		{
			"subcategoryId": 38,
			"subcategoryName": "Assurance Santé"
		},
		{
			"subcategoryId": 39,
			"subcategoryName": "Assurance Auto"
		},
		{
			"subcategoryId": 40,
			"subcategoryName": "Assurance Deux Roues"
		},
		{
			"subcategoryId": 37,
			"subcategoryName": "Assurance Habitation"
		},
		{
			"subcategoryId": 2,
			"subcategoryName": "Forfait mobile"
		},
		{
			"subcategoryId": 1,
			"subcategoryName": "Forfait internet"
		},
		{
			"subcategoryId": 48,
			"subcategoryName": "Forfait mobile et internet"
		},
		{
			"subcategoryId": 32,
			"subcategoryName": "Contrat Gaz"
		},
		{
			"subcategoryId": 31,
			"subcategoryName": "Contrat Electricité"
		},
		{
			"subcategoryId": 33,
			"subcategoryName": "Electricité et gaz"
		},
		{
			"subcategoryId": 91,
			"subcategoryName": "Assurance RC Professionelle"
		},
		{
			"subcategoryId": 92,
			"subcategoryName": "Assurance Mutuelle d'Entreprise"
		},
		{
			"subcategoryId": 93,
			"subcategoryName": "Assurance Prévoyance Collective"
		},
		{
			"subcategoryId": 94,
			"subcategoryName": "Assurance Décennale / DO"
		},
		{
			"subcategoryId": 95,
			"subcategoryName": "Assurance Cybersécurité"
		},
		{
			"subcategoryId": 96,
			"subcategoryName": "Assurance Véhicules & Flotte Auto"
		},
		{
			"subcategoryId": 97,
			"subcategoryName": "Assurance Multirisque Locaux"
		},
		{
			"subcategoryId": 98,
			"subcategoryName": "Assurance Autres Risques"
		},
	],
	ProcedureEndState: {
		SUCCESS: 'SUCCESS',
		FAILURE: 'FAILURE',
		CANCELLATION: 'CANCELLATION',
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
	MaritalStatus: {
		single: "Célibataire",
		married: "Marié(e)",
		pacs: "Pacsé(e)",
		divorced: "Divorcé(e)",
		couple: "Concubin(e)",
		widow: "Veuf/ve"
	},
	ProfessionalStatus: {
		employee: "Salarié(e)",
		executive: "Salarié(e) Cadre",
		farmer: "Salarié(e) / exploitant(e) agricole",
		entrepreneur: "Chef d'entreprise",
		selfEmployed: "Travailleur / Travailleuse non salarié(e)",
		unemployed: "Sans profession",
		functionary: "Fonctionnaire",
		student: "Étudiant(e)",
		retired: "Retraité(e)",
		other: "Autre"
	},
	familyTies: {
		conjoint: "Conjoint / Conjointe",
		child: "Enfant",
		parent: "Parent",
		spouse: "Époux / Épouse",
		other: "Autre",
		myself: "Moi-même",
	},
	getMaritalStatusOptions: () => Object.entries(this.MaritalStatus).map(([value, name]) => ({name, value})),
	getProfessionalStatusOptions: () => Object.entries(this.ProfessionalStatus).map(([value, name]) => ({name, value})),
	getFamilyTiesOptions: () => Object.entries(this.familyTies).filter(([key]) => key !== "myself").map(([value, name]) => ({name, value})),
	formatBirthdate: () => {
		const birthdate = findUserByEmail.data.data?.findUserByEmail.dateBirth;
		return birthdate ? new Date(birthdate) : ""
	},
	formatSituationConjugale: (status) => {
		return this.MaritalStatus[status] || ""
	},
	formatSituationPro: (status) => {
		return this.ProfessionalStatus[status]
	},
	createProcedure: async (subcatId) => {
		try{
			const userId = findUserByEmail.data?.data?.findUserByEmail.id;
			const subCategoryId = subcatId ?? createProcedureSubcatSelect.selectedOptionValue;

			await createProcedure.run({ userId, subCategoryId });

			if (createProcedure.data.errors) throw new Error(createProcedure.data.errors[0].message);

			closeModal(createProcedureModal.name);
			showAlert('Démarche créée avec succès !', 'success');

			await getAllUserProcedures.run({ userId });
			await findUserByEmail.run();
			Actions.goToProcedureDetails(
				findUserByEmail.data.data.findUserByEmail.id,
				createProcedure.data.data.startStandaloneProcedureByStaff.recurrentSubscription.subCategory?.label,
				findUserByEmail.data.data.findUserByEmail.email,
				createProcedure.data.data.startStandaloneProcedureByStaff.id,
				createProcedure.data.data.startStandaloneProcedureByStaff.recurrentSubscription.id,
				"NEW_WINDOW",
			);
		} catch(error) {
			showAlert(`Création impossible ! (${error.message})`, 'error');
		}
	},
	getAllProceduresByLastCreated: () => {
		if (!getAllUserProcedures.data.data) return [];
		return getAllUserProcedures.data.data.getAllUserProcedures.sort((p1, p2) => p1.updatedAt - p2.updatedAt).reverse();
	},
	getAllActiveProcedures: () => {
		if (!getAllUserProcedures.data.data) return [];
		const activeProcedures = getAllUserProcedures.data.data.getAllUserProcedures.filter(
			(procedure) => !procedure.endState || procedure.currentState !== 'COMPLETED'
		);
		return activeProcedures;
	},
	getAllClosedProcedures: () => {
		if (!getAllUserProcedures.data.data) return [];
		const closedProcedures = getAllUserProcedures.data.data.getAllUserProcedures.filter(
			(procedure) => procedure.endState || procedure.currentState === 'COMPLETED'
		);
		return closedProcedures;
	},
	capitalize: (str) => {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	},
	canCancelProcedure: (endState, currentState, currentStepId) => {
		const isAlreadyCompleted = currentState === 'COMPLETED' || currentStepId === 5 || Object.keys(this.ProcedureEndState).includes(endState);
		return !isAlreadyCompleted;
	},
	cancelProcedure: async () => {
		await cancelProcedureByStaff.run({
			"procedureId": procedures_table.triggeredRow.id,
			"recurrentSubscriptionId": procedures_table.triggeredRow.recurrentSubscriptionId,
			"reason": "DONT_HAVE_ANY_NEEDS"
		});
		closeModal(CancelProcedureModal.name);
		await getAllUserProcedures.run();
	},
	updateUserInfo: async () => {
		try{
			await updateFamilyMemberByStaff.run({
				userId: findUserByEmail.data.data?.findUserByEmail.id,
				input: {
					id: findUserByEmail.data.data?.findUserByEmail.id,
					lastname: updateLastNameInput.text,
					firstname: updateFirstNameInput.text,
					familyTiesWithUser: "myself",
					...(updateBirthdateInput.selectedDate ? {birthdate: dayjs(updateBirthdateInput.selectedDate).valueOf()} : {}),
					...(updateOccupationInput.selectedOptionValue ? {occupation: updateOccupationInput.selectedOptionValue} : {}),
					...(updateMaritalStatusInput.selectedOptionValue ? {maritalStatus: updateMaritalStatusInput.selectedOptionValue} : {}),
				}
			});

			if (updateFamilyMemberByStaff.data.errors) throw new Error(updateFamilyMemberByStaff.data.errors[0].message);

			closeModal(UpdateUserInfoModal.name);
			showAlert('Informations mises à jour avec succès !', 'success');

			await findUserByEmail.run();
		} catch(error) {
			showAlert(`Mise à jour impossible ! (${error.message})`, 'error');
		}
	},
	formatDate(date) {
		return dayjs(date).format("DD/MM/YYYY");
	},
	getLastNoteContent: () => {
		const userLastNote = findUserByEmail.data.data?.findUserByEmail.notes?.[0];
		if (!userLastNote) return "";
		return userLastNote.content;
	},
	formatLastNoteDate: () => {
		const userLastNote = findUserByEmail.data.data?.findUserByEmail.notes?.[0];
		if (!userLastNote) return "";

		const lastUpdateDate = this.formatDate(userLastNote.date);
		return `Dernières modifications : ${lastUpdateDate} - ${userLastNote.author}`;
	},
	formatNotesButtonLabel: () => {
		const basicLabel = "🖋️ Notes"
		const userLastNote = findUserByEmail.data.data?.findUserByEmail.notes?.[0];

		if (!userLastNote) return basicLabel;

		const lastUpdate = this.formatDate(userLastNote.date)
		return `${basicLabel} (${lastUpdate})`
	}
}