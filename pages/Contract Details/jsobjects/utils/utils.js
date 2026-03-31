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
		const userLastNote = getContract.data.data?.getContract.user.notes?.[0];
		if (!userLastNote) return "";
		return userLastNote.content;
	},
	formatLastNoteDate: () => {
		const userLastNote = getContract.data.data?.getContract.user.notes?.[0];
		if (!userLastNote) return "";

		const lastUpdateDate = this.formatDate(userLastNote.date);
		return `Dernières modifications : ${lastUpdateDate} - ${userLastNote.author}`;
	},
	formatNotesButtonLabel: () => {
		const basicLabel = "🖋️ Notes"
		const userLastNote = getContract.data.data?.getContract.user.notes?.[0];

		if (!userLastNote) return basicLabel;

		const lastUpdate = this.formatDate(userLastNote.date)
		return `${basicLabel} (${lastUpdate})`
	}
}