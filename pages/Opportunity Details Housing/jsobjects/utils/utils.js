export default {
	ProcedureEndState: {
		SUCCESS: 'SUCCESS',
		FAILURE: 'FAILURE',
		CANCELLATION: 'CANCELLATION',
	},
	FrenchPeriodicity: {
		par_semaine: 'par_semaine',
		deux_fois_par_mois: 'deux_fois_par_mois',
		par_mois: 'par_mois',
		par_deux_mois: 'par_deux_mois',
		par_trois_mois: 'par_trois_mois',
		par_six_mois: 'par_six_mois',
		par_sept_mois: 'par_sept_mois',
		par_neuf_mois: 'par_neuf_mois',
		par_an: 'par_an',
		par_deux_ans: 'par_deux_ans',
	},
	TypePeriodicitySubscription: {
		WEEKLY: 'WEEKLY',
		EVERY_2_WEEKS: 'EVERY_2_WEEKS',
		MONTHLY: 'MONTHLY',
		EVERY_2_MONTHS: 'EVERY_2_MONTHS',
		EVERY_3_MONTHS: 'EVERY_3_MONTHS',
		EVERY_6_MONTHS: 'EVERY_6_MONTHS',
		EVERY_7_MONTHS: 'EVERY_7_MONTHS',
		EVERY_9_MONTHS: 'EVERY_9_MONTHS',
		YEARLY: 'YEARLY',
		EVERY_2_YEARS: 'EVERY_2_YEARS',
	},
	ratio: {
		[this.TypePeriodicitySubscription.WEEKLY]: 4,
		[this.TypePeriodicitySubscription.EVERY_2_WEEKS]: 2,
		[this.TypePeriodicitySubscription.MONTHLY]: 1,
		[this.TypePeriodicitySubscription.EVERY_2_MONTHS]: 1/2,
		[this.TypePeriodicitySubscription.EVERY_3_MONTHS]: 1/3,
		[this.TypePeriodicitySubscription.EVERY_6_MONTHS]: 1/6,
		[this.TypePeriodicitySubscription.EVERY_7_MONTHS]: 1/7,
		[this.TypePeriodicitySubscription.EVERY_9_MONTHS]: 1/9,
		[this.TypePeriodicitySubscription.YEARLY]: 1/12,
		[this.TypePeriodicitySubscription.EVERY_2_YEARS]: 1/24,
	},
	occupationTypeMap: {
		'employee': 'Salarié(e)',
		'executive': 'Salarié(e) cadre',
		'farmer': 'Salarié(e) exploitant agrricole',
		'entrepreneur': 'Chef d entreprise',
		'selfEmployed': 'Travailleur/Travailleuse non salariée',
		'unemployed': 'sans profession',
		'functionary': 'fonctionnaire',
		'student': 'Étudiant(e)',
		'retired': 'retraité(e)',
		'other': 'autres',
	},
	maritalStatusMap: {
		'single': 'célibataire',
		'married': 'marié(e)',
		'divorced': 'divorcé(e)',
		'couple': 'concubin(e)',
		'widow': 'veuf(ve)',
		'pacs': 'pacsé(e)',
	},
	colorMAp: {
		[scraperRelaunch.EstimationPartner.AXA]: "#0003B5",
		[scraperRelaunch.EstimationPartner.MALJ]: "#DEDEDE",
		[scraperRelaunch.EstimationPartner.ACHEEL]: "#000000",
		[scraperRelaunch.EstimationPartner.GENERALI]: "#C5281C",
		[scraperRelaunch.EstimationPartner.APRIL]: "#39393A",
		[scraperRelaunch.EstimationPartner.NOVELIA]: "#CFCFCF",
	},
	isProcedureCompleted: Object.keys(this.ProcedureEndState).includes(getProcedureById.data.data?.getProcedureById.endState) ?? false,
	userAnsweredOptiPost: false,   // !!getProcedureDetails.data.data?.getProcedureDetails.questionList,
	showOpportunityDetailsModal: false,       // appsmith.store.ctx.role === "staff",
	capitalize: (str) => {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	},
	canCancelProcedure: () => {
		if (!getProcedureById.data.data) return false;
		const procedure = getProcedureById.data.data.getProcedureById
		const isAlreadyCompleted = [this.ProcedureEndState.FAILURE, this.ProcedureEndState.CANCELLATION].includes(procedure.endState)

		return !(procedure.currentStepId === 5 || isAlreadyCompleted)
	},
	cancelProcedure: async () => {
		await cancelProcedureByStaff.run();
		closeModal(Modal3.name);
		await getProcedureById.run();
	},
	canPutProcedureInStandBy: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId < 2,
	canMoveProcedureToSharedQuote: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId < 3,
	showCompartifTable: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId > 0,
	canCreateQuote: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId === 0,
	canSendQuoteToSubscription: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId === 3,
	isUrl: (link) => link.includes("https"), 
	estimationLinkButtonText: (link) => {
		if (!link) return "Voir";
		return this.isUrl(link) ? "Voir" : "Copier"
	},
	openEstimationResult: (link) => {
		if (!link) 
			return showAlert('Aucun lien ni numéro de devis fourni !', 'error');

		if (this.isUrl(link))
			return navigateTo(link, {}, 'NEW_WINDOW');

		return copyToClipboard(link, {debug: false, format: "text/plain"}).then(() => { 
			showAlert('Numero de devis copié !', 'success');
		})
	},
	moveProcedureToStep: async (step) => {
		await goToStep.run({ 
			stepId: step,
			notifyUser : false,
			procedureId: getProcedureById.data.data?.getProcedureById.id,
		});
		await getProcedureById.run();
	},
	moveProcedureToSecondStep: async () => {
		if (getProcedureById.data.data?.getProcedureById.currentStepId !== 0) return;
		await this.moveProcedureToStep(1);
	},
	moveProcedureToThirdStep: async () => {
		if (!getProcedureById.data.data?.getProcedureById || !this.canPutProcedureInStandBy) return;
		await this.moveProcedureToStep(2);
	},
	moveProcedureToFourthStep: async () => {
		if (!getProcedureById.data.data.getProcedureById || !this.canMoveProcedureToSharedQuote) return;
		await this.moveProcedureToStep(3);
	},
	replaceUnderscoresWithSpaces(text) {
		return text.replaceAll("_", " ");
	},
	formatDate(date) {
		return dayjs(date).format("DD/MM/YYYY");
	},
	getAnswer(procedureDetails, questionLabel, format) {
		if (!procedureDetails.questionList) return "";

		const question = procedureDetails.questionList.find((item) => item.questionLabel === questionLabel);
		if (!question) return "";

		if (!question.pickedAnswer) return "";

		if (format) return format(question.pickedAnswer);

		return question.pickedAnswer;
	},
	getLastNoteContent: () => {
		const userLastNote = getProcedureById.data.data?.getProcedureById.user.notes?.[0];
		if (!userLastNote) return "";
		return userLastNote.content;
	},
	formatLastNoteDate: () => {
		const userLastNote = getProcedureById.data.data?.getProcedureById.user.notes?.[0];
		if (!userLastNote) return "";

		const lastUpdateDate = this.formatDate(userLastNote.date);
		return `Dernières modifications : ${lastUpdateDate} - ${userLastNote.author}`;
	},
	formatNotesButtonLabel: () => {
		const basicLabel = "🖋️ Notes"
		const userLastNote = getProcedureById.data.data?.getProcedureById.user.notes?.[0];

		if (!userLastNote) return basicLabel;

		const lastUpdate = this.formatDate(userLastNote.date)
		return `${basicLabel} (${lastUpdate})`
	},
	findGarantyRow(partner, offer) {
		const result = Garanties_Habitation.data.find((row) => row.Assureur === partner && row.Formule === offer) || { };
		return result;
	},
	getNumberOfRooms() {
		const textNumber = getLastHousingRunData.data.data.getLastHousingRunData.userHousingInfo?.number_of_rooms;
		const numbersMap = {
			un: 1,
			deux: 2,
			trois: 3,
			quatre_ou_plus: 4,
		};
		return numbersMap[textNumber] || 0;
	},
	spaceOnBigNumber(num) {
		const number = num.toString();
		if (number.length > 3) {
			return number.slice(0, number.length - 3) + " " + number.slice(-3);
		}

		return number;
	},
	getAxaFranchise(offer) {
		const numberOfRooms = this.getNumberOfRooms();
		const basicOfferFranchise = numberOfRooms * 6000;
		const serenityOfferFranchise = basicOfferFranchise + (numberOfRooms * 10000);
		const franchise = offer === "Sérénité" ? serenityOfferFranchise : basicOfferFranchise;
		return `${this.spaceOnBigNumber(franchise)}€`
	}
}