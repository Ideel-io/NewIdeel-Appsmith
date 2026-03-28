export default {
	state : getProcedureById?.data?.data.getProcedureById.currentStepId,
	state_map_opti: {
		0 : "A) Demande Identifiée",
		1 : "B) Besoins & Infos Collectées",
		2 : "Devis généré",
		3 : "C) Offres Sélectionnées",
		4 : "D) Souscription Finalisée",
		5 : "E) Contrat Validé",
	},
	state_map_rési: {
		0 : "A) Questionnaire De Résiliation Rempli",
		1 : "B) Lettre À Payer",
		2 : "C) Envoi À Confirmer",
		3 : "D) Envoi Confirmé",
		4 : "E) Lettre Envoyée",
		5 : "F) Lettre Distribuée",
	},
}