export default {
	getMonthlyPrice: () => {
		const price = getProcedureById.data.data?.getProcedureById.recurrentSubscription.price;
		const periodicity = getProcedureById.data.data?.getProcedureById.recurrentSubscription.periodicity;
		if (!price || !periodicity) return null;
		return (price * utils.ratio[periodicity]) / 100;
	},
	getFormattedMonthlyPrice: () => {
		const price = this.getMonthlyPrice();
		if (!price) return "Non renseigné";
		return `${price.toFixed(2)} € / mois`;
	},
	getFormattedYearlyPriceDifference: (price) => {
		const monthlyEstimationPrice = price ? price / 100 : null;
		const monthlySubscriptionPrice  = this.getMonthlyPrice();

		if (!price || !this.getMonthlyPrice) return "Non renseigné";

		const difference = monthlySubscriptionPrice - monthlyEstimationPrice;		
		const yearlyDifference = (difference * 12).toFixed(0);
		const prefix = difference >= 0 ? '+' : '';

		return `${prefix}${yearlyDifference} €`;
	},
	getFormattedPriceDifferencePercentage: (price) => {
		const monthlyEstimationPrice = price ? price / 100 : null;
		const monthlySubscriptionPrice  = this.getMonthlyPrice();

		if (!price || !this.getMonthlyPrice) return "Non renseigné";

		const ratio = (monthlyEstimationPrice * 100) / monthlySubscriptionPrice;
		const percentageFromSubscriptionPrice = (100 - ratio).toFixed(0)
		const prefix = percentageFromSubscriptionPrice >= 0 ? '+' : '';

		return `${prefix}${percentageFromSubscriptionPrice} %`;
	}
}