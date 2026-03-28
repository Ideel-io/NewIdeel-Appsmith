export default {
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
	capitalize: (str) => {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	},
	
	getChosenOffers: () => {
		const chosenOffersRows = [];
		const chosenStates = ['CHOSEN'];
		const lastRunOffers = getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun ?? [];
		lastRunOffers.forEach((offer) => {
			if (chosenStates.includes(offer.state)) chosenOffersRows.push(offer);
		});
		return chosenOffersRows[0];
	},
		bankAccountLoaded: false,
	openBankAccountModal() {
		if (!this.bankAccountLoaded) {
			getAllUserPaymentIbansByStaff.run();
			this.bankAccountLoaded = true;
		}
		showModal(BankAccountModal.name);
	},
}