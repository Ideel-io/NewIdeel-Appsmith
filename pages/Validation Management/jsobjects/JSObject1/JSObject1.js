export default {
	myVar1: [],
	myVar2: {},
	annuler: "",
	myFun2: function() {
		return {
			dateEffet: Table1.triggeredRow["Date d'effet du nouveau contrat"]
		}
	},
	myFun1: (procedureId, contractType, userId, recurrentSubscriptionId) => {
		const goToPage = {
			"Assurance auto": "Validation Auto",
			"Assurance 2 roues" : "Validation Auto",
			"Assurance habitation": "Validation Housing",
			"GAV": "Validation Housing",
			"Protection juridique": "Validation Housing",
			"Assurance Emprunteur": "Validation Loan",
			"Mutuelle Sante": "Validation Health",
			"Prevoyance": "Validation Health",
			"Gaz": "Validation Energy",
			"Electricite & Gaz": "Validation Energy",
			"Electricite": "Validation Energy",
			"Assurance RC Professionelle" : "Validation Pro",
			"Assurance Mutuelle d'Entreprise": "Validation Pro",
			"Assurance Prévoyance Collective": "Validation Pro",
			"Assurance Décennale / DO": "Validation Pro",
			"Assurance Cybersécurité": "Validation Pro",
			"Assurance Véhicules & Flotte Auto": "Validation Pro",
			"Assurance Multirisque Locaux": "Validation Pro",
			"Assurance Autres Risques": "Validation Pro"
		}

		const urlParameters = {
			procedureId,
			userId,
			recurrentSubscriptionId
		}

		navigateTo(
			goToPage[contractType], 
			urlParameters,
			"NEW_WINDOW")
	},

	
	async goToProcedureDetails (userId, subcategory, email, procedureId, recurrentSubscriptionId, mode="NEW_WINDOW") {
		try {
			const params = { userId,  email, procedureId, recurrentSubscriptionId };

			const subcategoryToScreenMap = {
				assurance_auto: "Opportunity Details Auto",
				assurance_habitation: "Opportunity Details Housing",
				assurance_sante_et_prevoyance: "Opportunity Details Health",
				electricite: "Opportunity Details Energy",
				electricite_et_gaz: "Opportunity Details Energy",
				gaz: "Opportunity Details Energy",
				assurance_rc_professionelle: "Opportunity Details Pro",
				assurance_mutuelle_entreprise: "Opportunity Details Pro",
				assurance_prevoyance_collective: "Opportunity Details Pro",
				assurance_decennale_do: "Opportunity Details Pro",
				assurance_cybersecurite: "Opportunity Details Pro",
				assurance_vehicules_flotte_auto: "Opportunity Details Pro",
				assurance_multirisque_locaux: "Opportunity Details Pro",
				assurance_prevoyance_individuelle: "Opportunity Details Pro",
				assurance_autres_risques: "Opportunity Details Pro",
				assurance_credit: "Opportunity Details Loan",
			};

			const targetScreen = subcategoryToScreenMap[subcategory] || "Opportunity Details";

			return navigateTo(targetScreen, params, mode);
		} catch (error) {
			return showAlert(error.message, "error");
		}
	},
	myFun3: () => {
		const rowIndex = currentRow["rowIndex"]

		return rowIndex
	}
}