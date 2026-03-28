export default {
	isPriceNull: (price) => price === null || price === undefined,
	getMonthlyPrice: () => {
		const price = getProcedureById.data.data?.getProcedureById.recurrentSubscription.price;
		const periodicity = getProcedureById.data.data?.getProcedureById.recurrentSubscription.periodicity;
		if (this.isPriceNull(price) || !periodicity) return null;
		return (price * utils.ratio[periodicity]) / 100;
	},
	getFormattedMonthlyPrice: () => {
		const price = this.getMonthlyPrice();
		if (this.isPriceNull(price)) return "Non renseigné";
		if (price < 0) return "Valeur incorrecte";
		return `${price.toFixed(2)} €`;
	},
}