export default {
	DefaultStepsIds: [0, 1, 2, 3],
	EmptySalesOwner: 'empty',
	getFilterCategories: () => {
		const categoriesFromUrl = appsmith.URL.queryParams.category;

		if (categorySelect.selectedOptionLabel)
			return [categorySelect.selectedOptionValue];

		if (categoriesFromUrl)
			return categoriesFromUrl.split(',').map(item => item.trim());

		return [];
	},
	getFilterStepIds: () => {
		const stepIdsFromUrl = appsmith.URL.queryParams.stepId;

		if (stepSelect.selectedOptionLabel) 
			return [stepSelect.selectedOptionValue];

		if (stepIdsFromUrl)
			return [parseInt(appsmith.URL.queryParams.stepId)];

		return this.DefaultStepsIds;
	},
	getFilterStartAndEndTimes:  () => ({
		...( StartDate.selectedDate ? { startTime: utils.getTimestampFromSelectedDate(StartDate.selectedDate) } : {} ),
		...( EndDate.selectedDate ? { endTime: utils.getTimestampFromSelectedDate(EndDate.selectedDate) } : {} ),
	}),
	getTimestampFromSelectedDate : (date) => dayjs(date).valueOf(),
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
	isPriceNull: (price) => price === null || price === undefined,
	getMonthlyPrice: (price, periodicity) => price * this.ratio[periodicity],
	getFormattedMonthlyPrice: (price, periodicity) => {
		const result = this.getMonthlyPrice(price, periodicity) / 100;
		if (this.isPriceNull(result) || !periodicity) return "Non renseigné";
		if (result < 0) return "Valeur incorrecte";
		return `${result.toFixed(2)} €`;
	},
	getEstimationRating (
		estimationResults,
		estimationStatus,
		subscriptionPrice, 
		subscriptionPeriodicity, 
	) {
		if (!estimationStatus || !estimationResults || this.isPriceNull(subscriptionPrice) || !subscriptionPeriodicity) return null;	

		let nbInsurers = 0;
		const competitiveInsurers = new Set();
		const parsedResults = JSON.parse(estimationResults);
		const monthlySubscriptionPrice = this.getMonthlyPrice(subscriptionPrice, subscriptionPeriodicity);

		Object.entries(parsedResults).map(([insurer, offers]) => {
			nbInsurers += 1;
			Object.values(offers).map((offer) => {
				if (offer <= monthlySubscriptionPrice) competitiveInsurers.add(insurer);
			})
		});

		const successfulInsurers = estimationStatus.replace(/^\d/, nbInsurers);
		var rating = "⭐️";

		if (competitiveInsurers.size > 0 ) rating =  "⭐️⭐️⭐️";
		if (competitiveInsurers.size === nbInsurers) rating = "⭐️⭐️⭐️⭐️⭐️";

		return `(${successfulInsurers}) ${rating}`;
	},
}