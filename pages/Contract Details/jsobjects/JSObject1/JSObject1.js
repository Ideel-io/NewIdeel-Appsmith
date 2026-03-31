export default {
	goToValidation: () => {
		const goToPage = {
			"assurance_auto": "Validation Auto",
			"assurance_deux_roues" : "Validation Auto",
			"assurance_habitation": "Validation Housing",
			"GAV": "Validation Housing",
			"assurance_protection_juridique": "Validation Housing",
			"assurance_credit": "Validation Loan",
			"assurance_sante_et_prevoyance": "Validation Health",
			"gaz": "Validation Energy",
			"electricite_et_gaz": "Validation Energy",
			"electricite": "Validation Energy",
			"assurance_rc_professionelle" : "Validation Pro",
			"assurance_mutuelle_entreprise": "Validation Pro",
			"assurance_prevoyance_collective": "Validation Pro",
			"assurance_decennale_do": "Validation Pro",
			"assurance_cybersecurite": "Validation Pro",
			"assurance_vehicules_flotte_auto": "Validation Pro",
			"assurance_multirisque_locaux": "Validation Pro",
			"assurance_prevoyance_individuelle": "Validation Pro",
			"assurance_autres_risques": "Validation Pro"
		}

		const urlParameters = {
			"ID de l'opportunité": appsmith.URL.queryParams.procedureId,
		}

		navigateTo(
			goToPage[getProcedureById.data.data.getProcedureById.category], 
			urlParameters,
			"NEW_WINDOW")
	},

}