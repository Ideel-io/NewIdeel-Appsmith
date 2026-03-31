export default {
	myVar1: [],
	myVar2: {},

	state_map_opti: {
		"0" : "A) Opportunité Identifiée",
		"1" : "B) Infos Collectées",
		"2" : "C) Devis générées",
		"3" : "D) Devis validé",
		"4" : "E) Souscription Finalisée",
		"5" : "F) Contrat Validé",
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

	getStepLabel: (stepType) => {
		const state_map = {
			"TERMINATION_COMPLETED" : "Résiliation terminée",
			"DIGITAL_TERMINATION_STARTED" : "Démarche commencée",
			"LETTER_TERMINATION_STARTED" : "Démarche commencée",
			"TERMINATION_SENT" : "Questionnaire de résiliation rempli",
			"TERMINATION_ADD_CARD" : "Lettre à payer",
			"TERMINATION_SEND_LETTER" : "Envoi à confirmer",
			"TERMINATION_LETTER_CONFIRMED" : "Envoi confirmé",
			"TERMINATION_LETTER_SENT" : "Lettre envoyée",
			"TERMINATION_LETTER_COMPLETED" : "Lettre distribuée",
			"OPTIMIZATION_STARTED" : "Optimisation commencée",
			"OPTIMIZATION_OFFER_SEARCH" : "Qualifié à attaquer",
			"OPTIMIZATION_OFFER_SEARCH_TELECOM" : "Qualifié à attaquer",
			"OPTIMIZATION_OFFER_CHOICE" : "Echec prise de contact",
			"OPTIMIZATION_OFFER_CHOICE_TELECOM" : "Lien de souscription partagé",
			"OPTIMIZATION_COMPLETED" : "Démarche terminée",
			"OPTIMIZATION_OLD_CONTRACT_CANCEL": "Devis partagé",
			"OPTIMIZATION_OLD_CONTRACT_CANCEL_HEALTH" : "Devis partagé",
			'OPTIMIZATION_NEW_CONTRACT_SETUP': 'Souscription en cours',
			'OPTIMIZATION_NEW_CONTRACT_SETUP_VEHICLE' : 'Souscription en cours',
			'OPTIMIZATION_NEW_CONTRACT_SETUP_1' : 'Souscription en cours',
			'OPTIMIZATION_NEW_CONTRACT_SETUP_2' : 'Souscription en cours'
		}
		return state_map[stepType] ?? stepType
	},
}