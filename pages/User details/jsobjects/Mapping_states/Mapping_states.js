export default {
	frenchTransactionType: {
  	DEFAULT: 'Prime parrainage classique',
  	GIFT: 'Cadeau de bienvenue',
  	DONATION: 'Don du staff',
  	PURCHASE: 'Achat',
  	ADJUSTMENT: 'Ajustement (système)',
  	PRIZE: 'Cadeau de parrainage ou de démarche finie',
	},
	getStepLabel: (stepType) => {
		const state_map = {
			"TERMINATION_COMPLETED" : "Résiliation Terminée",
			"DIGITAL_TERMINATION_STARTED" : "Démarche Commencée",
			"LETTER_TERMINATION_STARTED" : "Démarche Commencée",
			"TERMINATION_SENT" : "A) Questionnaire De Résiliation Rempli",
			"TERMINATION_ADD_CARD" : "B) Lettre À Payer",
			"TERMINATION_SEND_LETTER" : "C) Envoi À Confirmer",
			"TERMINATION_LETTER_CONFIRMED" : "D) Envoi Confirmé",
			"TERMINATION_LETTER_SENT" : "E) Lettre Envoyée",
			"TERMINATION_LETTER_COMPLETED" : "F) Lettre Distribuée",
			"OPTIMIZATION_STARTED" : "A) Opportunité Identifiée",
			"OPTIMIZATION_OFFER_SEARCH" : "B) Infos Collectées",
			"OPTIMIZATION_OFFER_SEARCH_TELECOM" : "B) Infos Collectées",
			"OPTIMIZATION_OFFER_CHOICE" : "C) Devis générées",
			"OPTIMIZATION_OFFER_CHOICE_TELECOM" : "C) Devis Partagé",
			"OPTIMIZATION_COMPLETED" : "E) Contrat Validé",
			"OPTIMIZATION_OLD_CONTRACT_CANCEL": "D) Devis validé",
			"OPTIMIZATION_OLD_CONTRACT_CANCEL_HEALTH" : "D) Devis validé",
			'OPTIMIZATION_NEW_CONTRACT_SETUP': 'D) Souscription Finalisée',
			'OPTIMIZATION_NEW_CONTRACT_SETUP_VEHICLE' : 'D) Souscription Finalisée',
			'OPTIMIZATION_NEW_CONTRACT_SETUP_1' : 'D) Souscription Finalisée',
			'OPTIMIZATION_NEW_CONTRACT_SETUP_2' : 'D) Souscription Finalisée'
		}
		return state_map[stepType] ?? stepType
	},
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
	state_clientStatus: {
		null: 0,
		"LEAD": 1,
		"ACCOUNT": 2,
		"CLIENT": 3,
	},
	map_failure_reason : {
    "UNDER_COMMITMENT": "Vous êtes encore engagé avec votre opérateur",
    "NO_SUBSCRIPTION": "Aucun abonnement trouvé", 
    "DOUBLE_AUTHENTICATION": "Échec de la double authentification",
    "INCORRECT_CREDENTIALS": "Identifiants incorrects",
    "SUBSCRIPTION_VIA_APPLE_PLAYSTORE": "Abonnement via Apple Store ou Play Store",
    "Pas_de_reponse": "Pas de réponse",
    "Pas_de_numero": "Numéro de téléphone non fourni",
    "OTHERS": "Autre raison"
	},
	map_cancel_reason : {
    "DONT_HAVE_ANY_NEEDS": "Je n'ai pas de besoin particulier",
    "DONT_NEED_TO_DO_THIS_OVER_PHONE": "Je ne souhaite pas faire cette procédure par téléphone", 
    "ABANDON_IN_APP": "Abandon dans l'application"
	},
	 userGoals: {
    "TERMINATE_A_SUBSCRIPTION": 'Résilier un abonnement',
    "SAVE_MONEY": 'Faire des économies',
    "MONITOR_EXPENSES": 'Suivre mes dépenses',
    "WORRY_LESS": 'Déléguer mon administratif',
    "WIN_REFERRAL_MONEY": 'Générer des gains via le parrainage',
    "INVEST_MY_SAVINGS": 'Investir mon argent épargné',
  },
	
	userSituations: {
		"I_HAVE_A_VEHICLE": 'Je possède un véhicule',
    "I_HAVE_A_HOUSE": 'Je suis propriétaire',
    "I_HAVE_MULTIPLE_HOUSES": "J'ai plusieurs biens immobiliers",
    "I_AM_INDEPENDENT": 'Je suis TNS ou auto-entrepreneur',
    "I_AM_RETIRED": 'Je suis à la retraite',
    "I_HAVE_A_COMPANY": "J'ai une entreprise avec des salariés",
    "I_HAVE_KIDS": "J'ai un ou des enfants",
    "I_HAVE_NOTHING": 'Rien de tout cela',
    "I_AM_A_GOVERNMENT_EMPLOYEE": 'Je suis fonctionnaire',
	},
 getUserGoalsOrSituations(list) {
  return Object.keys(list).map(key => {
    return {
      label: list[key],
      value: key
    };
  });
},
	
	getKeyByValue: (obj, values) => {
  if (!Array.isArray(values)) values = [values];
  return Object.keys(obj).filter(key => values.includes(obj[key]));
},
	getProcedureStepLabel (currentStepId, endState, category) {
		if (endState === "CANCELLATION") {
			return  "Démarche abandonnée";
		}
		
		if(endState === "FAILURE") {
			return "Démarche echoué";
		}
		
		if (category === "DIGITAL") {
			return this.state_map_rési_digi[currentStepId] || "Étape inconnue";
		}
		
		if (category === "LETTER") {
			return this.state_map_rési[currentStepId] || "Étape inconnue";
		}
		
		return this.state_map_opti[currentStepId] || "Étape inconnue";
	}
}