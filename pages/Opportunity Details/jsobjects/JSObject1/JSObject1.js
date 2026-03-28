export default {
	executeQueriesInSequence: async () => {
		await getProcedureById.run();
		if (utils.isTelecom(getProcedureById.data.data.getProcedureById.category)) {
			await getAllPartnersBySubCategory.run();
			return;
		}
		
		await Nos_Partenaires.run();
	},
	myFun1: () => {
		
		console.log('sub', getProcedureById.data.data.getProcedureById.recurrentSubscription.subCategory.name)
		const goToPage = {
			"Assurance auto": "Subscription Auto",
			"Assurance 2 roues" : "Subscription Auto",
			"Assurance habitation": "Subscription Housing",
			"GAV": "Subscription Housing",
			"Protection juridique": "Subscription Housing",
			"Assurance emprunteur": "Subscription Loan",
			"Assurance santé & prévoyance": "Subscription Health",
			"Prevoyance": "Subscription Health",
			"Assurance RC Professionelle" : "Subscription Pro",
      "Assurance Mutuelle d'Entreprise": "Subscription Pro",
      "Assurance Prévoyance Collective": "Subscription Pro",
      "Assurance Décennale / DO": "Subscription Pro",
      "Assurance Cybersécurité": "Subscription Pro",
      "Assurance Véhicules & Flotte Auto": "Subscription Pro",
      "Assurance Multirisque Locaux": "Subscription Pro",
      "Assurance Autres Risques": "Subscription Pro"
			}

		const urlParameters = {
			"email":
			appsmith.URL.queryParams.email,
			"procedureId" : appsmith.URL.queryParams.procedureId,
			"recurrentSubscriptionId" : appsmith.URL.queryParams.recurrentSubscriptionId
		}

		navigateTo(
			goToPage[getProcedureById.data.data.getProcedureById.recurrentSubscription.subCategory.name], 
			urlParameters,
			"SAME_WINDOW")
		
	},
}