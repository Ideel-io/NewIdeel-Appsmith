export default {
	isPriceNull: (price) => price === null || price === undefined,
	getRawPrice: () => {
		const price = getProcedureById.data.data?.getProcedureById.recurrentSubscription.price;
		if (this.isPriceNull(price)) return null;
		return price / 100;
	},
	getMonthlyPrice: () => {
		const price = getProcedureById.data.data?.getProcedureById.recurrentSubscription.price;
		const periodicity = getProcedureById.data.data?.getProcedureById.recurrentSubscription.periodicity;
		if (this.isPriceNull(price) || !periodicity) return null;
		return (price * utils.ratio[periodicity]) / 100;
	},
	showPriceDifference: (estimationPrice) => {
		const monthlySubscriptionPrice = this.getMonthlyPrice();
		const pricesNonNull = !this.isPriceNull(estimationPrice) && !this.isPriceNull(monthlySubscriptionPrice);
		const pricesGreaterhanZero = estimationPrice > 0 && monthlySubscriptionPrice > 0;
		return pricesNonNull && pricesGreaterhanZero;
	},
	getFormattedMonthlyPrice: () => {
		const price = this.getMonthlyPrice();
		if (this.isPriceNull(price)) return "Non renseigné";
		if (price < 0) return "Valeur incorrecte";
		return `${price.toFixed(2)} € / mois`;
	},
	getFormattedYearlyPriceDifference: (price) => {
		const monthlyEstimationPrice = price ? price / 100 : null;
		const monthlySubscriptionPrice  = this.getMonthlyPrice();

		if (this.isPriceNull(price) || this.isPriceNull(monthlySubscriptionPrice)) return "Non renseigné";
		if (price <= 0 || monthlySubscriptionPrice <= 0) return "Valeur(s) incorrecte(s)";

		const difference = monthlySubscriptionPrice - monthlyEstimationPrice;		
		const yearlyDifference = (difference * 12).toFixed(0);
		const prefix = difference > 0 ? '+' : '';

		return `${prefix}${yearlyDifference} €`;
	},
	getFormattedPriceDifferencePercentage: (price) => {
		const monthlyEstimationPrice = price ? price / 100 : null;
		const monthlySubscriptionPrice  = this.getMonthlyPrice();

		if (this.isPriceNull(price) || this.isPriceNull(monthlySubscriptionPrice)) return "Non renseigné";
		if (price <= 0 || monthlySubscriptionPrice <= 0) return "Valeur(s) incorrecte(s)";

		const ratio = (monthlyEstimationPrice * 100) / monthlySubscriptionPrice;
		const percentageFromSubscriptionPrice = (100 - ratio).toFixed(0)
		const prefix = percentageFromSubscriptionPrice > 0 ? '+' : '';

		return `${prefix}${percentageFromSubscriptionPrice} %`;
	},
	getPriceDifferenceCellColor: (formattedDifference) => {
		const green = "#22c55e";

		if (formattedDifference[0] === '+') return green;
		if (formattedDifference[0] === '-') return "red";
		return "yellow"
	}
}