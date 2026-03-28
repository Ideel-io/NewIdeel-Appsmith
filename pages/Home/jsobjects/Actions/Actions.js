export default {
	goToOpportunityTable: (page, category, stepId) => {
		const urlParameters = {
			"category": category,
			"stepId": stepId,
		};
		navigateTo(page, urlParameters, "SAME_WINDOW");
	}, 

	goToContractsTable: (title, xLine) => {
		let page;
		let category = [];

		if (title === "e) Signés vérifiés") {
			page = "Mes contrats finalisés"
		}

		if (title === "d) Signés / non-vérifiés") {
			page = "Mes contrats actifs"
		}

		switch (xLine) {
			case "⚡ Energie":
				category.push("gaz", "electricite", "electricite_et_gaz")
				break;
			case "🚗 Ass. Auto":
				category.push("assurance_auto")
				break;
			case "🏡 Ass. Hab":
				category.push("assurance_habitation")
				break;
			case "💊 Santé":
				category.push("assurance_sante_et_prevoyance")
				break;
			case "🏦 Ass. Prêt":
				category.push("assurance_credit")
				break;
			case "👨‍💼 Ass. Pro":
				category.push("assurance_rc_professionelle", "assurance_mutuelle_entreprise", "assurance_prevoyance_collective",    "assurance_decennale_do", "assurance_cybersecurite", "assurance_vehicules_flotte_auto", "assurance_multirisque_locaux", "assurance_autres_risques")
				break;	

			default:
				break;
		}

		const urlParameters = {
			"category": category,
		};
		navigateTo(page, urlParameters, "SAME_WINDOW");
	}, 
}