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
	isProcedureCompleted: Object.keys(this.ProcedureEndState).includes(getProcedureById.data.data?.getProcedureById.endState),
	userAnsweredOptiPost: !!getProcedureDetails.data.data?.getProcedureDetails.questionList,
 	canPutProcedureInStandBy: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId < 2,	
	showOpportunityDetailsModal: false, //appsmith.store.ctx.role === "staff",
	canMoveProcedureToSharedQuote: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId < 3,
  canSendQuoteToSubscription: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId === 3,
	canCreateQuote: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId === 0,
	 showCompartifTable: !this.isProcedureCompleted && getProcedureById.data.data?.getProcedureById.currentStepId > 0,



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
		closeModal(CancelProcedureModal.name);
		await getProcedureById.run();
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
	procedureDetails: () => {		
		const details = {
			price: "",
			profileId: "",
			housingId: "",
			periodicity: "",
			dentalNeeds: "",
			medicalNeeds: "",
			opticalNeeds: "",
			hospitalNeeds: "",
			contractType: "",
			currentInsurer: "",
			insuranceCoverage: "",
			children: [],
			familyMembers: []
		};
		details['price'] = Prix.getFormattedMonthlyPrice();
		details['currentInsurer'] = getProcedureById.data.data?.getProcedureById.recurrentSubscription.partner.name;

		getProcedureDetails.data.data?.getProcedureDetails.questionList?.forEach(
			(question) => {
				if (question.questionLabel === "periodicity")
					details['periodicity'] = question.pickedAnswer.replaceAll('_',' ');

				if (question.questionLabel === "coverage_dental_needs")
					details['dentalNeeds'] = question.pickedAnswer.replaceAll('_',' ');

				if (question.questionLabel === "coverage_medical_needs")
					details['medicalNeeds'] = question.pickedAnswer.replaceAll('_',' ');

				if (question.questionLabel === "coverage_optic_needs")
					details['opticalNeeds'] = question.pickedAnswer.replaceAll('_',' ');

				if (question.questionLabel === "coverage_hospital_needs")
					details['hospitalNeeds'] = question.pickedAnswer.replaceAll('_',' ');

				if (question.questionLabel === "contract_type_selection")
					details['contractType'] = question.pickedAnswer;

				if (question.questionLabel === "who_is_covered_by_health_insurance")
					details['insuranceCoverage'] = question.pickedAnswer.replaceAll('_',' ');

				if (question.questionLabel === "profile_selection_credit_health")
					details['profileId'] = question.pickedAnswer;

				if (question.questionLabel === "housing_selection_other")
					details['housingId'] = question.pickedAnswer;
			});

		getProcedureDetails.data.data?.getProcedureDetails.familyMemberList?.forEach(
			(member) => {
				if (member.familyTiesWithUser !== "myself")
					details['familyMembers'].push(member);

				if (member.familyTiesWithUser === "child")
					details['children'].push(member);
			});

		return details;
	},
	openProcedureDetails: () => {
		this.procedureDetails();
		showModal(Procedure_Details.name);
	},
	isUrl: (link) => link.includes("https"), 
	openEstimationResult: (link) => {
		if (!link) 
			return showAlert('Aucun lien ni numéro de devis fourni !', 'error');

		if (this.isUrl(link))
			return navigateTo(link, {}, 'NEW_WINDOW');

		return copyToClipboard(link, {debug: false, format: "text/plain"}).then(() => { 
			showAlert('Numero de devis copié !', 'success');
		})
	},
	formatDate(date) {
		return dayjs(date).format("DD/MM/YYYY");
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
	
	getAnswer(procedureDetails, questionLabel, format) {
		if (!procedureDetails.questionList) return "";

		const question = procedureDetails.questionList.find((item) => item.questionLabel === questionLabel);
		if (!question) return "";

		if (!question.pickedAnswer) return "";

		if (format) return format(question.pickedAnswer);

		return question.pickedAnswer;
	},
}