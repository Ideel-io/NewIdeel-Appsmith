export default {
	ProcedureEndState: {
		SUCCESS: 'SUCCESS',
		FAILURE: 'FAILURE',
		CANCELLATION: 'CANCELLATION',
	},
	ratio: {
		WEEKLY: 4,
		EVERY_2_WEEKS: 2,
		MONTHLY: 1,
		EVERY_2_MONTHS: 1 / 2,
		EVERY_3_MONTHS: 1 / 3,
		EVERY_6_MONTHS: 1 / 6,
		EVERY_7_MONTHS: 1 / 7,
		EVERY_9_MONTHS: 1 / 9,
		YEARLY: 1 / 12,
		EVERY_2_YEARS: 1 / 24,
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
	myFun2: (Contrat) => {
		const contrat = {
			"Assurance deux roues" : "2 Roues",
			"Électricité": "Electricité",
			"Gaz": "Gaz",
			"Électricité & Gaz": "Electricité et Gaz"
		}
		return contrat[Contrat]
	},
	userAnsweredOptiPost: !!getProcedureDetails?.data?.data?.getProcedureDetails?.questionList?.length,
	showOpportunityDetailsModal: appsmith.store.ctx.role === "staff",
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
	isTelecom(category) {
		return ["telephone", "internet", "telephone_et_internet"].includes(category);
	},
	isInternet(category) {
		return ["internet", "telephone_et_internet"].includes(category);
	},
	isPhone(category) {
		return ["telephone", "telephone_et_internet"].includes(category);
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
	getInternetBoxTypeForProcedureStep(internetType) {
		return internetType === 'autre' ? 'fibre' : internetType;
	},
	prepareParamsForComparator() {
		const lastName = getProcedureById.data.data.getProcedureById.user.lastName;
		const firstName = getProcedureById.data.data.getProcedureById.user.firstName;
		const partnerLabel = PartnerTelecom.selectedOptionValue || getProcedureById.data.data.getProcedureById.recurrentSubscription.partner.label;
		console.log("partner:", partnerLabel);
		if (partnerLabel === "partenaire_inconnu") return;

		const price = getProcedureById.data.data.getProcedureById.recurrentSubscription.price || (PrixTelecom.text * 100);
		console.log("price:", price);
		if (Prix.isPriceNull(price)) return;

		const periodicity = getProcedureById.data.data.getProcedureById.recurrentSubscription.periodicity || PeriodicityTelecom.selectedOptionValue;
		console.log("periodicity:", periodicity);
		if (!periodicity) return;

		const monthlyPrice = (price * utils.ratio[periodicity]) / 100;

		return { lastName, firstName, partnerSelect: partnerLabel, price: `${monthlyPrice}` };
	},
	goToInternetComparator() {
		const urlParams = this.prepareParamsForComparator();
		if (!urlParams) return showModal(TelecomModal.name);

		const internetType = getProcedureDetails?.data?.data?.getProcedureDetails?.questionList?.find((q) => q.questionLabel === "internet_type")?.pickedAnswer ?? 'autre';

		const internetParams  = {
			...urlParams,
			type: this.getInternetBoxTypeForProcedureStep(internetType),
		};

		return navigateTo("https://apps.ideel.io/app/telecom/comparateur-internet-2024-65b928ea1242fd0a33657ed8", internetParams, "NEW_WINDOW");
	},
	goToPhoneComparator() {
		const urlParams = this.prepareParamsForComparator();
		if (!urlParams) return showModal(TelecomModal.name);

		return navigateTo("https://apps.ideel.io/app/telecom/comparateur-forfait-2024-65b10bad1242fd0a33657d2e", urlParams, "NEW_WINDOW");
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
	}
}