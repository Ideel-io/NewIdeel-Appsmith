export default {
	state_map_opti: {
		"0" : "A) Demande Identifiée",
		"1" : "B) Besoins & Infos Collectées",
		"2" : "En Stand-By",
		"3" : "C) Devis Partagé",
		"4" : "D) Souscription Finalisée",
		"5" : "E) Contrat Validé",
	},
	state_map_rési: {
		"0" : "A) Questionnaire De Résiliation Rempli",
		"1" : "B) Lettre À Payer",
		"2" : "C) Envoi À Confirmer",
		"3" : "D) Envoi Confirmé",
		"4" : "E) Lettre Envoyée",
		"5" : "F) Lettre Distribuée",
	},
	state_map_rési_digi: {
		"0" : "A) Démarche Commencée",
		"1" : "B) Questionnaire De Résiliation Rempli",
		"2" : "C) Succès De La Résiliation Digitale",
	},
	state_map_contract: {
  DRAFT: "Brouillon",
  NO_EFFECT_REPLACED: "Sans effet (remplacé)",
  NO_EFFECT_NOT_REPLACED: "Sans effet (non remplacé)",
  FUTURE_EFFECT: "Effet futur",
  IN_EFFECT: "Actif",
  TERMINATED_REPLACED: "Résilié (remplacé)",
  TERMINATED_CHURN: "Résilié (résiliation)",
  TERMINATED_SALE: "Résilié (vente)"
},
	state_boolean: {
		"true": "Oui",
		"false": "Non"
	},
	periodicities: [
  	{ label: "Par mois", value: "MONTHLY" },
		{ label: "Par an", value: "YEARLY" },
		{ label: "Par trois mois", value: "EVERY_3_MONTHS" },
		{ label: "Par six mois", value: "EVERY_6_MONTHS" },
	],
}