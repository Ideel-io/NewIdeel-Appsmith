export default {
	PeriodicityEnglishToFrench: {
		[utils.TypePeriodicitySubscription.WEEKLY]: utils.FrenchPeriodicity.par_semaine,
		[utils.TypePeriodicitySubscription.EVERY_2_WEEKS]: utils.FrenchPeriodicity.deux_fois_par_mois,
		[utils.TypePeriodicitySubscription.MONTHLY]: utils.FrenchPeriodicity.par_mois,
		[utils.TypePeriodicitySubscription.EVERY_2_MONTHS]: utils.FrenchPeriodicity.par_deux_mois,
		[utils.TypePeriodicitySubscription.EVERY_3_MONTHS]: utils.FrenchPeriodicity.par_trois_mois,
		[utils.TypePeriodicitySubscription.EVERY_6_MONTHS]: utils.FrenchPeriodicity.par_six_mois,
		[utils.TypePeriodicitySubscription.EVERY_7_MONTHS]: utils.FrenchPeriodicity.par_sept_mois,
		[utils.TypePeriodicitySubscription.EVERY_9_MONTHS]: utils.FrenchPeriodicity.par_neuf_mois,
		[utils.TypePeriodicitySubscription.YEARLY]: utils.FrenchPeriodicity.par_an,
		[utils.TypePeriodicitySubscription.EVERY_2_YEARS]: utils.FrenchPeriodicity.par_deux_ans,
	},
	FrenchPeriodicityNames: {
		[utils.FrenchPeriodicity.par_semaine]: 'Par semaine',
		[utils.FrenchPeriodicity.deux_fois_par_mois]: "Deux fois par mois",
		[utils.FrenchPeriodicity.par_mois]: "Par mois",
		[utils.FrenchPeriodicity.par_deux_mois]: "Tous les deux mois",
		[utils.FrenchPeriodicity.par_trois_mois]: "Tous les trois mois",
		[utils.FrenchPeriodicity.par_six_mois]: "Deux fois par an",
		[utils.FrenchPeriodicity.par_sept_mois]: 'Tous les sept mois',
		[utils.FrenchPeriodicity.par_neuf_mois]: 'Tous les neuf mois',
		[utils.FrenchPeriodicity.par_an]: "Par an",
		[utils.FrenchPeriodicity.par_deux_ans]: "Tous les deux ans",
	},
	getPeriodicityOptions: Object.entries(this.FrenchPeriodicityNames).map(([value, name]) => ({name, value})),
	getSubscriptionPeriodicity: () => {
		const defaultPeriodicity = utils.TypePeriodicitySubscription.MONTHLY;
		const periodicity = getProcedureById.data.data?.getProcedureById.recurrentSubscription.periodicity;
		return this.PeriodicityEnglishToFrench[periodicity ?? defaultPeriodicity]
	},
	canUpdateSubscriptionInfo: subscriptionPriceInput.isValid && subscriptionPeriodicitySelect.isValid && subscriptionCover.isValid,
	parsePriceInput: () => {
		const priceStr = subscriptionPriceInput.text.replace(',', '.');
		const integerPriceStr = (parseFloat(priceStr) * 100).toFixed(0);
		return parseInt(integerPriceStr);
	},
	updateSubscriptionInfo: async () => {
		try{
			if (!this.canUpdateSubscriptionInfo) return;
			const parsedPrice = this.parsePriceInput();

			await updatePriceAndPeriodicity.run({
				price: parsedPrice,
				periodicity: subscriptionPeriodicitySelect.selectedOptionValue,
				contractType: subscriptionCover.selectedOptionValue,
				partnerId: parseInt(partnerSelect.selectedOptionValue),
				userId: appsmith.URL.queryParams.userId,
				recurrentSubscriptionId: getProcedureById.data.data?.getProcedureById.recurrentSubscriptionId,
			});

			if (updatePriceAndPeriodicity.data.errors) 
				throw new Error(updatePriceAndPeriodicity.data.errors[0].message);

			closeModal(updateSubscriptionModal.name);
			showAlert('Informations mises à jour avec succès !', 'success');

			await getProcedureById.run();
			await getProcedureDetails.run();
			showModal(ModalNewContract.name)
		} catch(error) {
			showAlert(`Mise à jour impossible ! (${error.message})`, 'error');
		}
	}
}