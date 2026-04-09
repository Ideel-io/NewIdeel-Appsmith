export default {
	defaultLoanRatioType: "Fixe",
	defaultLoanUserCountry: "FR",
	defaultLoanPeriodicity: "mensuel",
	defaultLoanIsProfessional: false,
	defaultLoanFranchiseITT: 6,
	defaultLoanUserIsExpatriate: false,
	defaultLoanTravelsToForeignCountry: false,
	defaultLoanTravelsToRiskyCountry: false,
	defaultLoanWorkRequiresFineTools: false,
	defaultLoanPartTimeTherapeutic: true,
	defaultLoanHospitalizationOption: "YES_WITHOUT_HOSPITALIZATION",
	civility: {
		M: "Monsieur",
		Mme: "Madame"
	},
	maritalStatus: {
		single: "Célibataire",
		married: "Marié(e)",
		pacs: "Pacsé(e)",
		divorced: "Divorcé(e)",
		couple: "Concubin(e)",
		widow: "Veuf/ve",
	},
	occupation: {
		employee: "Salarié(e)",
		executive: "Salarié(e) Cadre",
		farmer: "Salarié(e) / exploitant(e) agricole",
		entrepreneur: "Chef d'entreprise",
		selfEmployed: "Travailleur / Travailleuse non salarié(e)",
		unemployed: "Sans profession",
		functionary: "Fonctionnaire",
		student: "Étudiant(e)",
		retired: "Retraité(e)",
		other: "Autre",
	},
	familyTies: {
		conjoint: "Conjoint / Conjointe",
		child: "Enfant",
		parent: "Parent",
		spouse: "Époux / Épouse",
		other: "Autre",
		myself: "Moi-même",
	},
	loanProjectType: {
		credit_travaux: 'Crédit travaux',
		credit_immobilier: 'Résidence principale',
		credit_immobilier_locatif: 'Bien mis en location',
	},
	loanResumptionType: {
		NEW_LOAN: "Nouveau prêt",
		RESUMPTION: "Reprise immédiate"
	},
	loanType: {
		RELAIS: 'RELAIS',
		AMORTISSABLE: 'AMORTISSABLE',
		PRET_A_PALIER:'PRET_A_PALIER',
	},
	deferralType: {
		TOTAL: 'Total',
		PARTIEL: 'Partiel'
	},
	specificOccupation: {
		AGENT_DE_MAITRISE_CONTREMAITRE: 'Agent de maitrise / contremaître',
		PROFESSIONS_AGRICOLES: 'Professions agricoles',
		ARTISAN: 'Artisan',
		SANS_PROFESSION_ETUDIANT_INTERMITTENT_SAISONNIER: 'Sans profession / Etudiant/ Intermittent / Saisonnier',
		SALARIE_CADRE_ASSIMILE_CADRE_INGENIEUR_HORS_PERSONNEL_NAVIGANT: 'Salarié Cadre/ Assimilé cadre / Ingénieur (hors personnel navigant)',
		DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_MOINS_10_ARTISAN_COMMERCANT: "Dirigeant de société/ Gérant/ Chef d'entreprise (de moins de 10 salariés) artisan/commerçant",
		DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_MOINS_10_HORS_ARTISAN_COMMERCANT: "Dirigeant de société/ Gérant/ Chef d'entreprise (de moins de 10 salariés) hors artisan/commerçant",
		DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_10_ET_PLUS: "Dirigeant de société/ Gérant/ Chef d'entreprise (de 10 salariés et plus)",
		COMMERCANT: 'Commerçant',
		EMPLOYE_BUREAU: 'Employé de bureau',
		SALARIE_NON_CADRE_HORS_EMPLOYE_BUREAU_PERSONNEL_NAVIGANT: "Salarié non cadre (hors employé de bureau & personnel navigant)", // If chosen, must result in a detailed job between the 6 options
		FONCTIONNAIRE_DE_CATEGORIE_A_HORS_ENSEIGNEMENT: "Fonctionnaire de catégorie A (hors enseignement)", // If chosen, must result in a detailed job between the 6 options
		FONCTIONNAIRE_DE_CATEGORIE_B_HORS_ENSEIGNEMENT: "Fonctionnaire de catégorie B (hors enseignement)", // If chosen, must result in a detailed job between the 6 options
		FONCTIONNAIRE_DE_CATEGORIE_C_HORS_ENSEIGNEMENT: "Fonctionnaire de catégorie C (hors enseignement)", // If chosen, must result in a detailed job between the 6 options
		PROFESSEUR_AGREGE: "Professeur agrégé",
		INSTITUTEUR_PROFESSEUR_DES_ECOLES_OU_PROFESSION_ASSIMILEE: "Instituteur, Professeur des écoles ou profession assimilée",
		PROFESSEUR_CERTIFIE_OU_PROFESSION_ASSIMILEE: "Professeur certifié ou profession assimilée",
		PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL: "Profession intermédiaire de la santé et du travail social", // If chosen, must result in a detailed job between the 6 options
		PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_MEDECIN_OU_INTERNE_GENERALISTE_SPECIALISTE: "Profession libérale médicale ou paramédicale / Médecin (ou Interne) généraliste/ spécialiste", // If chosen, must result in a detailed job between the 5 options
		PROFESSION_LIBERALE_HORS_MEDICAL_PARAMEDICAL: "Profession libérale (hors médical/ paramédical)",
		OUVRIERS_PROFESSIONS_DU_TRANSPORT: "Ouvriers / Professions du Transport",
		HOTESSE_STEWARD_AUTRE_PERSONNEL_NAVIGANT: "Hôtesse, steward, autre personnel navigant",
		CADRE_NAVIGANT_TECHNIQUE_COMMERCIAL: "Cadre navigant technique/commercial",
		RETRAITE_PRE_RETRAITE_CADRE_FONCT_CLASSE_A_CHEF_ENTREPRISE_PROF_LIB: "Retraité, Pré-retraité (Cadre/ Fonct. Classe A/ Chef d'Entreprise/Prof. lib)",
		RETRAITE_PRE_RETRAITE_NON_CADRE: "Retraité, Pré-retraité (non cadre)",
		TECHNICIEN: "Technicien",
	},
	specificOccupationDetails: {
		[this.specificOccupation.FONCTIONNAIRE_DE_CATEGORIE_A_HORS_ENSEIGNEMENT]: {
			FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_CHIRURGIEN: "Chirurgiens, chirurgiens-dentistes",
			FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_MEDECIN_PHARMACIEN: "Médecins, médecins spécialistes, interne, vétérinaires, pharmacien",
			FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_OSTEOPATHE: "Ostéopathes",
			FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_PARAMEDICAL: "Sages-femmes, kiné",
			FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_AUTRES: "Autres professions médicales / paramédicales",
			FONCTIONNAIRE_DE_CATEGORIE_A_NON_MEDICAL: "Aucune de ces professions",
		},
		[this.specificOccupation.FONCTIONNAIRE_DE_CATEGORIE_B_HORS_ENSEIGNEMENT]: {
			FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_CHIRURGIEN: "Chirurgiens, chirurgiens-dentistes",
			FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_MEDECIN_PHARMACIEN: "Médecins, médecins spécialistes, interne, vétérinaires, pharmacien",
			FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_OSTEOPATHE: "Ostéopathes",
			FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_PARAMEDICAL: "Sages-femmes, kiné",
			FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_AUTRES: "Autres professions médicales / paramédicales",
			FONCTIONNAIRE_DE_CATEGORIE_B_NON_MEDICAL: "Aucune de ces professions",
		},
		[this.specificOccupation.FONCTIONNAIRE_DE_CATEGORIE_C_HORS_ENSEIGNEMENT]: {
			FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_CHIRURGIEN: "Chirurgiens, chirurgiens-dentistes",
			FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_MEDECIN_PHARMACIEN: "Médecins, médecins spécialistes, interne, vétérinaires, pharmacien",
			FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_OSTEOPATHE: "Ostéopathes",
			FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_PARAMEDICAL: "Sages-femmes, kiné",
			FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_AUTRES: "Autres professions médicales / paramédicales",
			FONCTIONNAIRE_DE_CATEGORIE_C_NON_MEDICAL: "Aucune de ces professions",
		},
		[this.specificOccupation.SALARIE_NON_CADRE_HORS_EMPLOYE_BUREAU_PERSONNEL_NAVIGANT]: {
			SALARIE_NON_CADRE_MEDICAL_CHIRURGIEN: "Chirurgiens, chirurgiens-dentistes",
			SALARIE_NON_CADRE_MEDICAL_MEDECIN_PHARMACIEN: "Médecins, médecins spécialistes, interne, vétérinaires, pharmacien",
			SALARIE_NON_CADRE_MEDICAL_OSTEOPATHE: "Ostéopathes",
			SALARIE_NON_CADRE_MEDICAL_PARAMEDICAL: "Sages-femmes, kiné",
			SALARIE_NON_CADRE_MEDICAL_AUTRES: "Autres professions médicales / paramédicales",
			SALARIE_NON_CADRE_NON_MEDICAL: "Aucune de ces professions",
		},
		[this.specificOccupation.PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL]: {
			PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_CHIRURGIEN: "Chirurgiens, chirurgiens-dentistes",
			PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_MEDECIN_PHARMACIEN: "Médecins, médecins spécialistes, interne, vétérinaires, pharmacien",
			PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_OSTEOPATHE: "Ostéopathes",
			PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_PARAMEDICAL: "Sages-femmes, kiné",
			PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_AUTRES: "Autres professions médicales / paramédicales",
			PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_NON: "Aucune de ces professions",
		},		[this.specificOccupation.PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_MEDECIN_OU_INTERNE_GENERALISTE_SPECIALISTE]: {
			PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_CHIRURGIEN: "Chirurgiens, chirurgiens-dentistes",
			PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_MEDECIN_PHARMACIEN: "Médecins, médecins spécialistes, interne, vétérinaires, pharmacien",
			PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_OSTEOPATHE: "Ostéopathes",
			PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_PARAMEDICAL: "Sages-femmes, kiné",
			PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_AUTRES: "Autres professions médicales / paramédicales",
		},
	},
	maritalStatusOptions: Object.entries(this.maritalStatus).map(([value, name]) => ({name, value})),
	occupationOptions: Object.entries(this.occupation).map(([value, name]) => ({name, value})),
	familyTiesOptions: Object.entries(this.familyTies).filter(([key]) => key !== "myself").map(([value, name]) => ({name, value})),
	civilityOptions: Object.entries(this.civility).map(([value, name]) => ({name, value})),
	loanTypeOptions: Object.entries(this.loanType).map(([value, name]) => ({name, value})),
	deferralTypeOptions: Object.entries(this.deferralType).map(([value, name]) => ({name, value})),
	loanProjectTypeOptions: Object.entries(this.loanProjectType).map(([value, name]) => ({name, value})),
	loanResumptionTypeOptions: Object.entries(this.loanResumptionType).map(([value, name]) => ({name, value})),
	specificOccupationOptions: Object.entries(this.specificOccupation).map(([value, name]) => ({name, value})),
	getSpecificOccupationDetailsOptions: (specificOccupation) => Object.entries(this.specificOccupationDetails[specificOccupation]).map(([value, name]) => ({name, value})),
	getLoanEffectiveDate: () => dayjs().add(3, 'month').$d,
	// getLoanSignatureDate: () => dayjs().subtract(1, 'year').$d, // Deprecated
	searchLoanPotentialOffers: [
		{
			"id_produit": "GLOBAL+ CRD",
			"plateforme": "UGIP",
			"porteur_risque": "Generali",
			"type_tarification": "CRD",
			"cout_total_euro": 2834.84,
			"cout_8_ans_euro": 2641.12,
			"mensualite_moyenne_euro": 22.68,
			"frais_dossier_euro": 113,
			"taea_pourcentage": 0.199,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 19.74
				},
				{
					"mois": 2,
					"montant": 26.46
				},
				{
					"mois": 3,
					"montant": 27.08
				},
				{
					"mois": 4,
					"montant": 28.37
				},
				{
					"mois": 5,
					"montant": 27.27
				},
				{
					"mois": 6,
					"montant": 27.96
				},
				{
					"mois": 7,
					"montant": 27.76
				},
				{
					"mois": 8,
					"montant": 24.9
				},
				{
					"mois": 9,
					"montant": 27.32
				},
				{
					"mois": 10,
					"montant": 26.22
				},
				{
					"mois": 11,
					"montant": 26.89
				},
				{
					"mois": 12,
					"montant": 25.84
				},
				{
					"mois": 13,
					"montant": 30.81
				},
				{
					"mois": 14,
					"montant": 32.07
				},
				{
					"mois": 15,
					"montant": 32.83
				},
				{
					"mois": 16,
					"montant": 34.4
				},
				{
					"mois": 17,
					"montant": 33.02
				},
				{
					"mois": 18,
					"montant": 33.86
				},
				{
					"mois": 19,
					"montant": 33.57
				},
				{
					"mois": 20,
					"montant": 31.12
				},
				{
					"mois": 21,
					"montant": 32.98
				},
				{
					"mois": 22,
					"montant": 31.62
				},
				{
					"mois": 23,
					"montant": 32.39
				},
				{
					"mois": 24,
					"montant": 31.08
				},
				{
					"mois": 25,
					"montant": 31.81
				},
				{
					"mois": 26,
					"montant": 31.5
				},
				{
					"mois": 27,
					"montant": 32.41
				},
				{
					"mois": 28,
					"montant": 34
				},
				{
					"mois": 29,
					"montant": 32.59
				},
				{
					"mois": 30,
					"montant": 33.38
				},
				{
					"mois": 31,
					"montant": 33.04
				},
				{
					"mois": 32,
					"montant": 29.57
				},
				{
					"mois": 33,
					"montant": 32.4
				},
				{
					"mois": 34,
					"montant": 31.03
				},
				{
					"mois": 35,
					"montant": 31.75
				},
				{
					"mois": 36,
					"montant": 30.4
				},
				{
					"mois": 37,
					"montant": 31.09
				},
				{
					"mois": 38,
					"montant": 30.76
				},
				{
					"mois": 39,
					"montant": 31.46
				},
				{
					"mois": 40,
					"montant": 32.9
				},
				{
					"mois": 41,
					"montant": 31.49
				},
				{
					"mois": 42,
					"montant": 32.19
				},
				{
					"mois": 43,
					"montant": 31.85
				},
				{
					"mois": 44,
					"montant": 28.44
				},
				{
					"mois": 45,
					"montant": 31.09
				},
				{
					"mois": 46,
					"montant": 29.76
				},
				{
					"mois": 47,
					"montant": 30.4
				},
				{
					"mois": 48,
					"montant": 29.06
				},
				{
					"mois": 49,
					"montant": 29.67
				},
				{
					"mois": 50,
					"montant": 29.3
				},
				{
					"mois": 51,
					"montant": 29.99
				},
				{
					"mois": 52,
					"montant": 31.34
				},
				{
					"mois": 53,
					"montant": 29.93
				},
				{
					"mois": 54,
					"montant": 30.54
				},
				{
					"mois": 55,
					"montant": 30.13
				},
				{
					"mois": 56,
					"montant": 26.86
				},
				{
					"mois": 57,
					"montant": 29.34
				},
				{
					"mois": 58,
					"montant": 28
				},
				{
					"mois": 59,
					"montant": 28.52
				},
				{
					"mois": 60,
					"montant": 27.2
				},
				{
					"mois": 61,
					"montant": 26.77
				},
				{
					"mois": 62,
					"montant": 26.06
				},
				{
					"mois": 63,
					"montant": 26.32
				},
				{
					"mois": 64,
					"montant": 27.32
				},
				{
					"mois": 65,
					"montant": 26.04
				},
				{
					"mois": 66,
					"montant": 26.48
				},
				{
					"mois": 67,
					"montant": 26.06
				},
				{
					"mois": 68,
					"montant": 23.99
				},
				{
					"mois": 69,
					"montant": 25.2
				},
				{
					"mois": 70,
					"montant": 24.01
				},
				{
					"mois": 71,
					"montant": 24.37
				},
				{
					"mois": 72,
					"montant": 23.18
				},
				{
					"mois": 73,
					"montant": 21.86
				},
				{
					"mois": 74,
					"montant": 20.88
				},
				{
					"mois": 75,
					"montant": 21.16
				},
				{
					"mois": 76,
					"montant": 21.9
				},
				{
					"mois": 77,
					"montant": 20.78
				},
				{
					"mois": 78,
					"montant": 21.04
				},
				{
					"mois": 79,
					"montant": 20.64
				},
				{
					"mois": 80,
					"montant": 18.28
				},
				{
					"mois": 81,
					"montant": 19.74
				},
				{
					"mois": 82,
					"montant": 18.72
				},
				{
					"mois": 83,
					"montant": 18.94
				},
				{
					"mois": 84,
					"montant": 17.91
				},
				{
					"mois": 85,
					"montant": 15.97
				},
				{
					"mois": 86,
					"montant": 14.85
				},
				{
					"mois": 87,
					"montant": 15.35
				},
				{
					"mois": 88,
					"montant": 15.95
				},
				{
					"mois": 89,
					"montant": 15.07
				},
				{
					"mois": 90,
					"montant": 15.17
				},
				{
					"mois": 91,
					"montant": 14.72
				},
				{
					"mois": 92,
					"montant": 12.97
				},
				{
					"mois": 93,
					"montant": 13.93
				},
				{
					"mois": 94,
					"montant": 13.08
				},
				{
					"mois": 95,
					"montant": 13.13
				},
				{
					"mois": 96,
					"montant": 12.3
				},
				{
					"mois": 97,
					"montant": 11.73
				},
				{
					"mois": 98,
					"montant": 11.13
				},
				{
					"mois": 99,
					"montant": 11.26
				},
				{
					"mois": 100,
					"montant": 11.5
				},
				{
					"mois": 101,
					"montant": 10.73
				},
				{
					"mois": 102,
					"montant": 10.66
				},
				{
					"mois": 103,
					"montant": 10.24
				},
				{
					"mois": 104,
					"montant": 8.88
				},
				{
					"mois": 105,
					"montant": 9.4
				},
				{
					"mois": 106,
					"montant": 8.64
				},
				{
					"mois": 107,
					"montant": 8.51
				},
				{
					"mois": 108,
					"montant": 7.8
				},
				{
					"mois": 109,
					"montant": 7.26
				},
				{
					"mois": 110,
					"montant": 6.7
				},
				{
					"mois": 111,
					"montant": 6.64
				},
				{
					"mois": 112,
					"montant": 6.63
				},
				{
					"mois": 113,
					"montant": 5.98
				},
				{
					"mois": 114,
					"montant": 5.72
				},
				{
					"mois": 115,
					"montant": 5.27
				},
				{
					"mois": 116,
					"montant": 4.47
				},
				{
					"mois": 117,
					"montant": 4.32
				},
				{
					"mois": 118,
					"montant": 3.75
				},
				{
					"mois": 119,
					"montant": 3.4
				},
				{
					"mois": 120,
					"montant": 2.84
				},
				{
					"mois": 121,
					"montant": 2.35
				},
				{
					"mois": 122,
					"montant": 1.86
				},
				{
					"mois": 123,
					"montant": 1.48
				},
				{
					"mois": 124,
					"montant": 1.1
				},
				{
					"mois": 125,
					"montant": 0.58
				},
				{
					"mois": 126,
					"montant": 0.12
				}
			]
		},
		{
			"id_produit": "GLOBAL+ CI",
			"plateforme": "UGIP",
			"porteur_risque": "Generali",
			"type_tarification": "Linéaire",
			"cout_total_euro": 4092.99,
			"cout_8_ans_euro": 3178.76,
			"mensualite_moyenne_euro": 32.74,
			"frais_dossier_euro": 113,
			"taea_pourcentage": 0.289,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 23.62
				},
				{
					"mois": 2,
					"montant": 31.84
				},
				{
					"mois": 3,
					"montant": 31.84
				},
				{
					"mois": 4,
					"montant": 31.84
				},
				{
					"mois": 5,
					"montant": 31.84
				},
				{
					"mois": 6,
					"montant": 31.84
				},
				{
					"mois": 7,
					"montant": 31.84
				},
				{
					"mois": 8,
					"montant": 31.84
				},
				{
					"mois": 9,
					"montant": 31.84
				},
				{
					"mois": 10,
					"montant": 31.84
				},
				{
					"mois": 11,
					"montant": 31.84
				},
				{
					"mois": 12,
					"montant": 31.84
				},
				{
					"mois": 13,
					"montant": 31.84
				},
				{
					"mois": 14,
					"montant": 31.84
				},
				{
					"mois": 15,
					"montant": 31.84
				},
				{
					"mois": 16,
					"montant": 31.84
				},
				{
					"mois": 17,
					"montant": 31.84
				},
				{
					"mois": 18,
					"montant": 31.84
				},
				{
					"mois": 19,
					"montant": 31.84
				},
				{
					"mois": 20,
					"montant": 31.84
				},
				{
					"mois": 21,
					"montant": 31.84
				},
				{
					"mois": 22,
					"montant": 31.84
				},
				{
					"mois": 23,
					"montant": 31.84
				},
				{
					"mois": 24,
					"montant": 31.84
				},
				{
					"mois": 25,
					"montant": 31.84
				},
				{
					"mois": 26,
					"montant": 31.84
				},
				{
					"mois": 27,
					"montant": 31.84
				},
				{
					"mois": 28,
					"montant": 31.84
				},
				{
					"mois": 29,
					"montant": 31.84
				},
				{
					"mois": 30,
					"montant": 31.84
				},
				{
					"mois": 31,
					"montant": 31.84
				},
				{
					"mois": 32,
					"montant": 31.84
				},
				{
					"mois": 33,
					"montant": 31.84
				},
				{
					"mois": 34,
					"montant": 31.84
				},
				{
					"mois": 35,
					"montant": 31.84
				},
				{
					"mois": 36,
					"montant": 31.84
				},
				{
					"mois": 37,
					"montant": 31.84
				},
				{
					"mois": 38,
					"montant": 31.84
				},
				{
					"mois": 39,
					"montant": 31.84
				},
				{
					"mois": 40,
					"montant": 31.84
				},
				{
					"mois": 41,
					"montant": 31.84
				},
				{
					"mois": 42,
					"montant": 31.84
				},
				{
					"mois": 43,
					"montant": 31.84
				},
				{
					"mois": 44,
					"montant": 31.84
				},
				{
					"mois": 45,
					"montant": 31.84
				},
				{
					"mois": 46,
					"montant": 31.84
				},
				{
					"mois": 47,
					"montant": 31.84
				},
				{
					"mois": 48,
					"montant": 31.84
				},
				{
					"mois": 49,
					"montant": 31.84
				},
				{
					"mois": 50,
					"montant": 31.84
				},
				{
					"mois": 51,
					"montant": 31.84
				},
				{
					"mois": 52,
					"montant": 31.84
				},
				{
					"mois": 53,
					"montant": 31.84
				},
				{
					"mois": 54,
					"montant": 31.84
				},
				{
					"mois": 55,
					"montant": 31.84
				},
				{
					"mois": 56,
					"montant": 31.84
				},
				{
					"mois": 57,
					"montant": 31.84
				},
				{
					"mois": 58,
					"montant": 31.84
				},
				{
					"mois": 59,
					"montant": 31.84
				},
				{
					"mois": 60,
					"montant": 31.84
				},
				{
					"mois": 61,
					"montant": 31.84
				},
				{
					"mois": 62,
					"montant": 31.84
				},
				{
					"mois": 63,
					"montant": 31.84
				},
				{
					"mois": 64,
					"montant": 31.84
				},
				{
					"mois": 65,
					"montant": 31.84
				},
				{
					"mois": 66,
					"montant": 31.84
				},
				{
					"mois": 67,
					"montant": 31.84
				},
				{
					"mois": 68,
					"montant": 31.84
				},
				{
					"mois": 69,
					"montant": 31.84
				},
				{
					"mois": 70,
					"montant": 31.84
				},
				{
					"mois": 71,
					"montant": 31.84
				},
				{
					"mois": 72,
					"montant": 31.84
				},
				{
					"mois": 73,
					"montant": 31.84
				},
				{
					"mois": 74,
					"montant": 31.84
				},
				{
					"mois": 75,
					"montant": 31.84
				},
				{
					"mois": 76,
					"montant": 31.84
				},
				{
					"mois": 77,
					"montant": 31.84
				},
				{
					"mois": 78,
					"montant": 31.84
				},
				{
					"mois": 79,
					"montant": 31.84
				},
				{
					"mois": 80,
					"montant": 31.84
				},
				{
					"mois": 81,
					"montant": 31.84
				},
				{
					"mois": 82,
					"montant": 31.84
				},
				{
					"mois": 83,
					"montant": 31.84
				},
				{
					"mois": 84,
					"montant": 31.84
				},
				{
					"mois": 85,
					"montant": 31.84
				},
				{
					"mois": 86,
					"montant": 31.84
				},
				{
					"mois": 87,
					"montant": 31.84
				},
				{
					"mois": 88,
					"montant": 31.84
				},
				{
					"mois": 89,
					"montant": 31.84
				},
				{
					"mois": 90,
					"montant": 31.84
				},
				{
					"mois": 91,
					"montant": 31.84
				},
				{
					"mois": 92,
					"montant": 31.84
				},
				{
					"mois": 93,
					"montant": 31.84
				},
				{
					"mois": 94,
					"montant": 31.84
				},
				{
					"mois": 95,
					"montant": 31.84
				},
				{
					"mois": 96,
					"montant": 31.84
				},
				{
					"mois": 97,
					"montant": 31.84
				},
				{
					"mois": 98,
					"montant": 31.84
				},
				{
					"mois": 99,
					"montant": 31.84
				},
				{
					"mois": 100,
					"montant": 31.84
				},
				{
					"mois": 101,
					"montant": 31.84
				},
				{
					"mois": 102,
					"montant": 31.84
				},
				{
					"mois": 103,
					"montant": 31.84
				},
				{
					"mois": 104,
					"montant": 31.84
				},
				{
					"mois": 105,
					"montant": 31.84
				},
				{
					"mois": 106,
					"montant": 31.84
				},
				{
					"mois": 107,
					"montant": 31.84
				},
				{
					"mois": 108,
					"montant": 31.84
				},
				{
					"mois": 109,
					"montant": 31.84
				},
				{
					"mois": 110,
					"montant": 31.84
				},
				{
					"mois": 111,
					"montant": 31.84
				},
				{
					"mois": 112,
					"montant": 31.84
				},
				{
					"mois": 113,
					"montant": 31.84
				},
				{
					"mois": 114,
					"montant": 31.84
				},
				{
					"mois": 115,
					"montant": 31.84
				},
				{
					"mois": 116,
					"montant": 31.84
				},
				{
					"mois": 117,
					"montant": 31.84
				},
				{
					"mois": 118,
					"montant": 31.84
				},
				{
					"mois": 119,
					"montant": 31.84
				},
				{
					"mois": 120,
					"montant": 31.84
				},
				{
					"mois": 121,
					"montant": 31.84
				},
				{
					"mois": 122,
					"montant": 31.84
				},
				{
					"mois": 123,
					"montant": 31.84
				},
				{
					"mois": 124,
					"montant": 31.84
				},
				{
					"mois": 125,
					"montant": 31.84
				},
				{
					"mois": 126,
					"montant": 8.21
				}
			]
		},
		{
			"id_produit": "UGIP ZÉNITH CI",
			"plateforme": "UGIP",
			"porteur_risque": "Non spécifié",
			"type_tarification": "Linéaire",
			"cout_total_euro": 4594.25,
			"cout_8_ans_euro": 3566.7,
			"mensualite_moyenne_euro": 36.75,
			"frais_dossier_euro": 113,
			"taea_pourcentage": 0.325,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 26.6
				},
				{
					"mois": 2,
					"montant": 35.85
				},
				{
					"mois": 3,
					"montant": 35.85
				},
				{
					"mois": 4,
					"montant": 35.85
				},
				{
					"mois": 5,
					"montant": 35.85
				},
				{
					"mois": 6,
					"montant": 35.85
				},
				{
					"mois": 7,
					"montant": 35.85
				},
				{
					"mois": 8,
					"montant": 35.85
				},
				{
					"mois": 9,
					"montant": 35.85
				},
				{
					"mois": 10,
					"montant": 35.85
				},
				{
					"mois": 11,
					"montant": 35.85
				},
				{
					"mois": 12,
					"montant": 35.85
				},
				{
					"mois": 13,
					"montant": 35.85
				},
				{
					"mois": 14,
					"montant": 35.85
				},
				{
					"mois": 15,
					"montant": 35.85
				},
				{
					"mois": 16,
					"montant": 35.85
				},
				{
					"mois": 17,
					"montant": 35.85
				},
				{
					"mois": 18,
					"montant": 35.85
				},
				{
					"mois": 19,
					"montant": 35.85
				},
				{
					"mois": 20,
					"montant": 35.85
				},
				{
					"mois": 21,
					"montant": 35.85
				},
				{
					"mois": 22,
					"montant": 35.85
				},
				{
					"mois": 23,
					"montant": 35.85
				},
				{
					"mois": 24,
					"montant": 35.85
				},
				{
					"mois": 25,
					"montant": 35.85
				},
				{
					"mois": 26,
					"montant": 35.85
				},
				{
					"mois": 27,
					"montant": 35.85
				},
				{
					"mois": 28,
					"montant": 35.85
				},
				{
					"mois": 29,
					"montant": 35.85
				},
				{
					"mois": 30,
					"montant": 35.85
				},
				{
					"mois": 31,
					"montant": 35.85
				},
				{
					"mois": 32,
					"montant": 35.85
				},
				{
					"mois": 33,
					"montant": 35.85
				},
				{
					"mois": 34,
					"montant": 35.85
				},
				{
					"mois": 35,
					"montant": 35.85
				},
				{
					"mois": 36,
					"montant": 35.85
				},
				{
					"mois": 37,
					"montant": 35.85
				},
				{
					"mois": 38,
					"montant": 35.85
				},
				{
					"mois": 39,
					"montant": 35.85
				},
				{
					"mois": 40,
					"montant": 35.85
				},
				{
					"mois": 41,
					"montant": 35.85
				},
				{
					"mois": 42,
					"montant": 35.85
				},
				{
					"mois": 43,
					"montant": 35.85
				},
				{
					"mois": 44,
					"montant": 35.85
				},
				{
					"mois": 45,
					"montant": 35.85
				},
				{
					"mois": 46,
					"montant": 35.85
				},
				{
					"mois": 47,
					"montant": 35.85
				},
				{
					"mois": 48,
					"montant": 35.85
				},
				{
					"mois": 49,
					"montant": 35.85
				},
				{
					"mois": 50,
					"montant": 35.85
				},
				{
					"mois": 51,
					"montant": 35.85
				},
				{
					"mois": 52,
					"montant": 35.85
				},
				{
					"mois": 53,
					"montant": 35.85
				},
				{
					"mois": 54,
					"montant": 35.85
				},
				{
					"mois": 55,
					"montant": 35.85
				},
				{
					"mois": 56,
					"montant": 35.85
				},
				{
					"mois": 57,
					"montant": 35.85
				},
				{
					"mois": 58,
					"montant": 35.85
				},
				{
					"mois": 59,
					"montant": 35.85
				},
				{
					"mois": 60,
					"montant": 35.85
				},
				{
					"mois": 61,
					"montant": 35.85
				},
				{
					"mois": 62,
					"montant": 35.85
				},
				{
					"mois": 63,
					"montant": 35.85
				},
				{
					"mois": 64,
					"montant": 35.85
				},
				{
					"mois": 65,
					"montant": 35.85
				},
				{
					"mois": 66,
					"montant": 35.85
				},
				{
					"mois": 67,
					"montant": 35.85
				},
				{
					"mois": 68,
					"montant": 35.85
				},
				{
					"mois": 69,
					"montant": 35.85
				},
				{
					"mois": 70,
					"montant": 35.85
				},
				{
					"mois": 71,
					"montant": 35.85
				},
				{
					"mois": 72,
					"montant": 35.85
				},
				{
					"mois": 73,
					"montant": 35.85
				},
				{
					"mois": 74,
					"montant": 35.85
				},
				{
					"mois": 75,
					"montant": 35.85
				},
				{
					"mois": 76,
					"montant": 35.85
				},
				{
					"mois": 77,
					"montant": 35.85
				},
				{
					"mois": 78,
					"montant": 35.85
				},
				{
					"mois": 79,
					"montant": 35.85
				},
				{
					"mois": 80,
					"montant": 35.85
				},
				{
					"mois": 81,
					"montant": 35.85
				},
				{
					"mois": 82,
					"montant": 35.85
				},
				{
					"mois": 83,
					"montant": 35.85
				},
				{
					"mois": 84,
					"montant": 35.85
				},
				{
					"mois": 85,
					"montant": 35.85
				},
				{
					"mois": 86,
					"montant": 35.85
				},
				{
					"mois": 87,
					"montant": 35.85
				},
				{
					"mois": 88,
					"montant": 35.85
				},
				{
					"mois": 89,
					"montant": 35.85
				},
				{
					"mois": 90,
					"montant": 35.85
				},
				{
					"mois": 91,
					"montant": 35.85
				},
				{
					"mois": 92,
					"montant": 35.85
				},
				{
					"mois": 93,
					"montant": 35.85
				},
				{
					"mois": 94,
					"montant": 35.85
				},
				{
					"mois": 95,
					"montant": 35.85
				},
				{
					"mois": 96,
					"montant": 35.85
				},
				{
					"mois": 97,
					"montant": 35.85
				},
				{
					"mois": 98,
					"montant": 35.85
				},
				{
					"mois": 99,
					"montant": 35.85
				},
				{
					"mois": 100,
					"montant": 35.85
				},
				{
					"mois": 101,
					"montant": 35.85
				},
				{
					"mois": 102,
					"montant": 35.85
				},
				{
					"mois": 103,
					"montant": 35.85
				},
				{
					"mois": 104,
					"montant": 35.85
				},
				{
					"mois": 105,
					"montant": 35.85
				},
				{
					"mois": 106,
					"montant": 35.85
				},
				{
					"mois": 107,
					"montant": 35.85
				},
				{
					"mois": 108,
					"montant": 35.85
				},
				{
					"mois": 109,
					"montant": 35.85
				},
				{
					"mois": 110,
					"montant": 35.85
				},
				{
					"mois": 111,
					"montant": 35.85
				},
				{
					"mois": 112,
					"montant": 35.85
				},
				{
					"mois": 113,
					"montant": 35.85
				},
				{
					"mois": 114,
					"montant": 35.85
				},
				{
					"mois": 115,
					"montant": 35.85
				},
				{
					"mois": 116,
					"montant": 35.85
				},
				{
					"mois": 117,
					"montant": 35.85
				},
				{
					"mois": 118,
					"montant": 35.85
				},
				{
					"mois": 119,
					"montant": 35.85
				},
				{
					"mois": 120,
					"montant": 35.85
				},
				{
					"mois": 121,
					"montant": 35.85
				},
				{
					"mois": 122,
					"montant": 35.85
				},
				{
					"mois": 123,
					"montant": 35.85
				},
				{
					"mois": 124,
					"montant": 35.85
				},
				{
					"mois": 125,
					"montant": 35.85
				},
				{
					"mois": 126,
					"montant": 9.25
				}
			]
		},
		{
			"id_produit": "PREMIUM CI",
			"plateforme": "UGIP",
			"porteur_risque": "Malakoff Humanis",
			"type_tarification": "Linéaire",
			"cout_total_euro": 3779.22,
			"cout_8_ans_euro": 2935.92,
			"mensualite_moyenne_euro": 30.23,
			"frais_dossier_euro": 113,
			"taea_pourcentage": 0.267,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 21.74
				},
				{
					"mois": 2,
					"montant": 29.33
				},
				{
					"mois": 3,
					"montant": 29.33
				},
				{
					"mois": 4,
					"montant": 29.33
				},
				{
					"mois": 5,
					"montant": 29.33
				},
				{
					"mois": 6,
					"montant": 29.33
				},
				{
					"mois": 7,
					"montant": 29.33
				},
				{
					"mois": 8,
					"montant": 29.33
				},
				{
					"mois": 9,
					"montant": 29.33
				},
				{
					"mois": 10,
					"montant": 29.33
				},
				{
					"mois": 11,
					"montant": 29.33
				},
				{
					"mois": 12,
					"montant": 29.33
				},
				{
					"mois": 13,
					"montant": 29.33
				},
				{
					"mois": 14,
					"montant": 29.33
				},
				{
					"mois": 15,
					"montant": 29.33
				},
				{
					"mois": 16,
					"montant": 29.33
				},
				{
					"mois": 17,
					"montant": 29.33
				},
				{
					"mois": 18,
					"montant": 29.33
				},
				{
					"mois": 19,
					"montant": 29.33
				},
				{
					"mois": 20,
					"montant": 29.33
				},
				{
					"mois": 21,
					"montant": 29.33
				},
				{
					"mois": 22,
					"montant": 29.33
				},
				{
					"mois": 23,
					"montant": 29.33
				},
				{
					"mois": 24,
					"montant": 29.33
				},
				{
					"mois": 25,
					"montant": 29.33
				},
				{
					"mois": 26,
					"montant": 29.33
				},
				{
					"mois": 27,
					"montant": 29.33
				},
				{
					"mois": 28,
					"montant": 29.33
				},
				{
					"mois": 29,
					"montant": 29.33
				},
				{
					"mois": 30,
					"montant": 29.33
				},
				{
					"mois": 31,
					"montant": 29.33
				},
				{
					"mois": 32,
					"montant": 29.33
				},
				{
					"mois": 33,
					"montant": 29.33
				},
				{
					"mois": 34,
					"montant": 29.33
				},
				{
					"mois": 35,
					"montant": 29.33
				},
				{
					"mois": 36,
					"montant": 29.33
				},
				{
					"mois": 37,
					"montant": 29.33
				},
				{
					"mois": 38,
					"montant": 29.33
				},
				{
					"mois": 39,
					"montant": 29.33
				},
				{
					"mois": 40,
					"montant": 29.33
				},
				{
					"mois": 41,
					"montant": 29.33
				},
				{
					"mois": 42,
					"montant": 29.33
				},
				{
					"mois": 43,
					"montant": 29.33
				},
				{
					"mois": 44,
					"montant": 29.33
				},
				{
					"mois": 45,
					"montant": 29.33
				},
				{
					"mois": 46,
					"montant": 29.33
				},
				{
					"mois": 47,
					"montant": 29.33
				},
				{
					"mois": 48,
					"montant": 29.33
				},
				{
					"mois": 49,
					"montant": 29.33
				},
				{
					"mois": 50,
					"montant": 29.33
				},
				{
					"mois": 51,
					"montant": 29.33
				},
				{
					"mois": 52,
					"montant": 29.33
				},
				{
					"mois": 53,
					"montant": 29.33
				},
				{
					"mois": 54,
					"montant": 29.33
				},
				{
					"mois": 55,
					"montant": 29.33
				},
				{
					"mois": 56,
					"montant": 29.33
				},
				{
					"mois": 57,
					"montant": 29.33
				},
				{
					"mois": 58,
					"montant": 29.33
				},
				{
					"mois": 59,
					"montant": 29.33
				},
				{
					"mois": 60,
					"montant": 29.33
				},
				{
					"mois": 61,
					"montant": 29.33
				},
				{
					"mois": 62,
					"montant": 29.33
				},
				{
					"mois": 63,
					"montant": 29.33
				},
				{
					"mois": 64,
					"montant": 29.33
				},
				{
					"mois": 65,
					"montant": 29.33
				},
				{
					"mois": 66,
					"montant": 29.33
				},
				{
					"mois": 67,
					"montant": 29.33
				},
				{
					"mois": 68,
					"montant": 29.33
				},
				{
					"mois": 69,
					"montant": 29.33
				},
				{
					"mois": 70,
					"montant": 29.33
				},
				{
					"mois": 71,
					"montant": 29.33
				},
				{
					"mois": 72,
					"montant": 29.33
				},
				{
					"mois": 73,
					"montant": 29.33
				},
				{
					"mois": 74,
					"montant": 29.33
				},
				{
					"mois": 75,
					"montant": 29.33
				},
				{
					"mois": 76,
					"montant": 29.33
				},
				{
					"mois": 77,
					"montant": 29.33
				},
				{
					"mois": 78,
					"montant": 29.33
				},
				{
					"mois": 79,
					"montant": 29.33
				},
				{
					"mois": 80,
					"montant": 29.33
				},
				{
					"mois": 81,
					"montant": 29.33
				},
				{
					"mois": 82,
					"montant": 29.33
				},
				{
					"mois": 83,
					"montant": 29.33
				},
				{
					"mois": 84,
					"montant": 29.33
				},
				{
					"mois": 85,
					"montant": 29.33
				},
				{
					"mois": 86,
					"montant": 29.33
				},
				{
					"mois": 87,
					"montant": 29.33
				},
				{
					"mois": 88,
					"montant": 29.33
				},
				{
					"mois": 89,
					"montant": 29.33
				},
				{
					"mois": 90,
					"montant": 29.33
				},
				{
					"mois": 91,
					"montant": 29.33
				},
				{
					"mois": 92,
					"montant": 29.33
				},
				{
					"mois": 93,
					"montant": 29.33
				},
				{
					"mois": 94,
					"montant": 29.33
				},
				{
					"mois": 95,
					"montant": 29.33
				},
				{
					"mois": 96,
					"montant": 29.33
				},
				{
					"mois": 97,
					"montant": 29.33
				},
				{
					"mois": 98,
					"montant": 29.33
				},
				{
					"mois": 99,
					"montant": 29.33
				},
				{
					"mois": 100,
					"montant": 29.33
				},
				{
					"mois": 101,
					"montant": 29.33
				},
				{
					"mois": 102,
					"montant": 29.33
				},
				{
					"mois": 103,
					"montant": 29.33
				},
				{
					"mois": 104,
					"montant": 29.33
				},
				{
					"mois": 105,
					"montant": 29.33
				},
				{
					"mois": 106,
					"montant": 29.33
				},
				{
					"mois": 107,
					"montant": 29.33
				},
				{
					"mois": 108,
					"montant": 29.33
				},
				{
					"mois": 109,
					"montant": 29.33
				},
				{
					"mois": 110,
					"montant": 29.33
				},
				{
					"mois": 111,
					"montant": 29.33
				},
				{
					"mois": 112,
					"montant": 29.33
				},
				{
					"mois": 113,
					"montant": 29.33
				},
				{
					"mois": 114,
					"montant": 29.33
				},
				{
					"mois": 115,
					"montant": 29.33
				},
				{
					"mois": 116,
					"montant": 29.33
				},
				{
					"mois": 117,
					"montant": 29.33
				},
				{
					"mois": 118,
					"montant": 29.33
				},
				{
					"mois": 119,
					"montant": 29.33
				},
				{
					"mois": 120,
					"montant": 29.33
				},
				{
					"mois": 121,
					"montant": 29.33
				},
				{
					"mois": 122,
					"montant": 29.33
				},
				{
					"mois": 123,
					"montant": 29.33
				},
				{
					"mois": 124,
					"montant": 29.33
				},
				{
					"mois": 125,
					"montant": 29.33
				},
				{
					"mois": 126,
					"montant": 7.56
				}
			]
		},
		{
			"id_produit": "PREMIUM CRD",
			"plateforme": "UGIP",
			"porteur_risque": "Malakoff Humanis",
			"type_tarification": "CRD",
			"cout_total_euro": 2551.59,
			"cout_8_ans_euro": 2487.12,
			"mensualite_moyenne_euro": 20.41,
			"frais_dossier_euro": 113,
			"taea_pourcentage": 0.179,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 26.29
				},
				{
					"mois": 2,
					"montant": 35.26
				},
				{
					"mois": 3,
					"montant": 35.18
				},
				{
					"mois": 4,
					"montant": 36.55
				},
				{
					"mois": 5,
					"montant": 35.11
				},
				{
					"mois": 6,
					"montant": 36.03
				},
				{
					"mois": 7,
					"montant": 35.73
				},
				{
					"mois": 8,
					"montant": 32.06
				},
				{
					"mois": 9,
					"montant": 35.2
				},
				{
					"mois": 10,
					"montant": 33.75
				},
				{
					"mois": 11,
					"montant": 34.64
				},
				{
					"mois": 12,
					"montant": 33.27
				},
				{
					"mois": 13,
					"montant": 36.48
				},
				{
					"mois": 14,
					"montant": 37.03
				},
				{
					"mois": 15,
					"montant": 36.96
				},
				{
					"mois": 16,
					"montant": 38.41
				},
				{
					"mois": 17,
					"montant": 36.88
				},
				{
					"mois": 18,
					"montant": 37.78
				},
				{
					"mois": 19,
					"montant": 37.46
				},
				{
					"mois": 20,
					"montant": 34.72
				},
				{
					"mois": 21,
					"montant": 36.78
				},
				{
					"mois": 22,
					"montant": 35.3
				},
				{
					"mois": 23,
					"montant": 36.15
				},
				{
					"mois": 24,
					"montant": 34.65
				},
				{
					"mois": 25,
					"montant": 35.98
				},
				{
					"mois": 26,
					"montant": 35.81
				},
				{
					"mois": 27,
					"montant": 35.6
				},
				{
					"mois": 28,
					"montant": 36.9
				},
				{
					"mois": 29,
					"montant": 35.38
				},
				{
					"mois": 30,
					"montant": 36.19
				},
				{
					"mois": 31,
					"montant": 35.84
				},
				{
					"mois": 32,
					"montant": 32.05
				},
				{
					"mois": 33,
					"montant": 35.12
				},
				{
					"mois": 34,
					"montant": 33.68
				},
				{
					"mois": 35,
					"montant": 34.43
				},
				{
					"mois": 36,
					"montant": 32.96
				},
				{
					"mois": 37,
					"montant": 32.4
				},
				{
					"mois": 38,
					"montant": 31.58
				},
				{
					"mois": 39,
					"montant": 31.25
				},
				{
					"mois": 40,
					"montant": 32.36
				},
				{
					"mois": 41,
					"montant": 30.96
				},
				{
					"mois": 42,
					"montant": 31.6
				},
				{
					"mois": 43,
					"montant": 31.28
				},
				{
					"mois": 44,
					"montant": 27.92
				},
				{
					"mois": 45,
					"montant": 30.55
				},
				{
					"mois": 46,
					"montant": 29.25
				},
				{
					"mois": 47,
					"montant": 29.84
				},
				{
					"mois": 48,
					"montant": 28.55
				},
				{
					"mois": 49,
					"montant": 26.57
				},
				{
					"mois": 50,
					"montant": 25.29
				},
				{
					"mois": 51,
					"montant": 25.28
				},
				{
					"mois": 52,
					"montant": 26.2
				},
				{
					"mois": 53,
					"montant": 25.05
				},
				{
					"mois": 54,
					"montant": 25.54
				},
				{
					"mois": 55,
					"montant": 25.17
				},
				{
					"mois": 56,
					"montant": 22.47
				},
				{
					"mois": 57,
					"montant": 24.5
				},
				{
					"mois": 58,
					"montant": 23.4
				},
				{
					"mois": 59,
					"montant": 23.83
				},
				{
					"mois": 60,
					"montant": 22.76
				},
				{
					"mois": 61,
					"montant": 20.02
				},
				{
					"mois": 62,
					"montant": 18.66
				},
				{
					"mois": 63,
					"montant": 19.02
				},
				{
					"mois": 64,
					"montant": 19.87
				},
				{
					"mois": 65,
					"montant": 18.93
				},
				{
					"mois": 66,
					"montant": 19.25
				},
				{
					"mois": 67,
					"montant": 18.94
				},
				{
					"mois": 68,
					"montant": 17.44
				},
				{
					"mois": 69,
					"montant": 18.33
				},
				{
					"mois": 70,
					"montant": 17.44
				},
				{
					"mois": 71,
					"montant": 17.71
				},
				{
					"mois": 72,
					"montant": 16.82
				},
				{
					"mois": 73,
					"montant": 14.09
				},
				{
					"mois": 74,
					"montant": 12.73
				},
				{
					"mois": 75,
					"montant": 12.71
				},
				{
					"mois": 76,
					"montant": 13.12
				},
				{
					"mois": 77,
					"montant": 12.46
				},
				{
					"mois": 78,
					"montant": 12.58
				},
				{
					"mois": 79,
					"montant": 12.36
				},
				{
					"mois": 80,
					"montant": 10.94
				},
				{
					"mois": 81,
					"montant": 11.86
				},
				{
					"mois": 82,
					"montant": 11.22
				},
				{
					"mois": 83,
					"montant": 11.29
				},
				{
					"mois": 84,
					"montant": 10.72
				},
				{
					"mois": 85,
					"montant": 8.48
				},
				{
					"mois": 86,
					"montant": 7.44
				},
				{
					"mois": 87,
					"montant": 7.5
				},
				{
					"mois": 88,
					"montant": 7.71
				},
				{
					"mois": 89,
					"montant": 7.28
				},
				{
					"mois": 90,
					"montant": 7.33
				},
				{
					"mois": 91,
					"montant": 7.13
				},
				{
					"mois": 92,
					"montant": 6.27
				},
				{
					"mois": 93,
					"montant": 6.73
				},
				{
					"mois": 94,
					"montant": 6.31
				},
				{
					"mois": 95,
					"montant": 6.34
				},
				{
					"mois": 96,
					"montant": 5.95
				},
				{
					"mois": 97,
					"montant": 4.43
				},
				{
					"mois": 98,
					"montant": 3.76
				},
				{
					"mois": 99,
					"montant": 3.74
				},
				{
					"mois": 100,
					"montant": 3.79
				},
				{
					"mois": 101,
					"montant": 3.54
				},
				{
					"mois": 102,
					"montant": 3.5
				},
				{
					"mois": 103,
					"montant": 3.38
				},
				{
					"mois": 104,
					"montant": 2.91
				},
				{
					"mois": 105,
					"montant": 3.08
				},
				{
					"mois": 106,
					"montant": 2.83
				},
				{
					"mois": 107,
					"montant": 2.78
				},
				{
					"mois": 108,
					"montant": 2.57
				},
				{
					"mois": 109,
					"montant": 1.79
				},
				{
					"mois": 110,
					"montant": 1.41
				},
				{
					"mois": 111,
					"montant": 1.36
				},
				{
					"mois": 112,
					"montant": 1.35
				},
				{
					"mois": 113,
					"montant": 1.2
				},
				{
					"mois": 114,
					"montant": 1.17
				},
				{
					"mois": 115,
					"montant": 1.08
				},
				{
					"mois": 116,
					"montant": 0.94
				},
				{
					"mois": 117,
					"montant": 0.88
				},
				{
					"mois": 118,
					"montant": 0.75
				},
				{
					"mois": 119,
					"montant": 0.71
				},
				{
					"mois": 120,
					"montant": 0.57
				},
				{
					"mois": 121,
					"montant": 0.34
				},
				{
					"mois": 122,
					"montant": 0.21
				},
				{
					"mois": 123,
					"montant": 0.17
				},
				{
					"mois": 124,
					"montant": 0.11
				},
				{
					"mois": 125,
					"montant": 0.05
				},
				{
					"mois": 126,
					"montant": 0
				}
			]
		},
		{
			"id_produit": "UGIP PRESTIGE CRD",
			"plateforme": "UGIP",
			"porteur_risque": "Generali",
			"type_tarification": "CRD",
			"cout_total_euro": 3231.86,
			"cout_8_ans_euro": 3003.59,
			"mensualite_moyenne_euro": 25.85,
			"frais_dossier_euro": 115,
			"taea_pourcentage": 0.228,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 22.14
				},
				{
					"mois": 2,
					"montant": 29.71
				},
				{
					"mois": 3,
					"montant": 30.59
				},
				{
					"mois": 4,
					"montant": 32.14
				},
				{
					"mois": 5,
					"montant": 30.87
				},
				{
					"mois": 6,
					"montant": 31.68
				},
				{
					"mois": 7,
					"montant": 31.41
				},
				{
					"mois": 8,
					"montant": 28.16
				},
				{
					"mois": 9,
					"montant": 30.96
				},
				{
					"mois": 10,
					"montant": 29.69
				},
				{
					"mois": 11,
					"montant": 30.42
				},
				{
					"mois": 12,
					"montant": 29.2
				},
				{
					"mois": 13,
					"montant": 34.88
				},
				{
					"mois": 14,
					"montant": 36.32
				},
				{
					"mois": 15,
					"montant": 37.21
				},
				{
					"mois": 16,
					"montant": 39.02
				},
				{
					"mois": 17,
					"montant": 37.42
				},
				{
					"mois": 18,
					"montant": 38.34
				},
				{
					"mois": 19,
					"montant": 38.02
				},
				{
					"mois": 20,
					"montant": 35.26
				},
				{
					"mois": 21,
					"montant": 37.37
				},
				{
					"mois": 22,
					"montant": 35.84
				},
				{
					"mois": 23,
					"montant": 36.67
				},
				{
					"mois": 24,
					"montant": 35.2
				},
				{
					"mois": 25,
					"montant": 36.03
				},
				{
					"mois": 26,
					"montant": 35.71
				},
				{
					"mois": 27,
					"montant": 36.51
				},
				{
					"mois": 28,
					"montant": 38.25
				},
				{
					"mois": 29,
					"montant": 36.68
				},
				{
					"mois": 30,
					"montant": 37.52
				},
				{
					"mois": 31,
					"montant": 37.14
				},
				{
					"mois": 32,
					"montant": 33.26
				},
				{
					"mois": 33,
					"montant": 36.43
				},
				{
					"mois": 34,
					"montant": 34.88
				},
				{
					"mois": 35,
					"montant": 35.71
				},
				{
					"mois": 36,
					"montant": 34.23
				},
				{
					"mois": 37,
					"montant": 34.98
				},
				{
					"mois": 38,
					"montant": 34.6
				},
				{
					"mois": 39,
					"montant": 35.36
				},
				{
					"mois": 40,
					"montant": 36.97
				},
				{
					"mois": 41,
					"montant": 35.39
				},
				{
					"mois": 42,
					"montant": 36.15
				},
				{
					"mois": 43,
					"montant": 35.76
				},
				{
					"mois": 44,
					"montant": 31.96
				},
				{
					"mois": 45,
					"montant": 34.96
				},
				{
					"mois": 46,
					"montant": 33.43
				},
				{
					"mois": 47,
					"montant": 34.15
				},
				{
					"mois": 48,
					"montant": 32.66
				},
				{
					"mois": 49,
					"montant": 33.32
				},
				{
					"mois": 50,
					"montant": 32.89
				},
				{
					"mois": 51,
					"montant": 33.93
				},
				{
					"mois": 52,
					"montant": 35.55
				},
				{
					"mois": 53,
					"montant": 33.97
				},
				{
					"mois": 54,
					"montant": 34.67
				},
				{
					"mois": 55,
					"montant": 34.18
				},
				{
					"mois": 56,
					"montant": 30.47
				},
				{
					"mois": 57,
					"montant": 33.3
				},
				{
					"mois": 58,
					"montant": 31.75
				},
				{
					"mois": 59,
					"montant": 32.36
				},
				{
					"mois": 60,
					"montant": 30.87
				},
				{
					"mois": 61,
					"montant": 30.38
				},
				{
					"mois": 62,
					"montant": 29.54
				},
				{
					"mois": 63,
					"montant": 30.42
				},
				{
					"mois": 64,
					"montant": 31.79
				},
				{
					"mois": 65,
					"montant": 30.29
				},
				{
					"mois": 66,
					"montant": 30.82
				},
				{
					"mois": 67,
					"montant": 30.32
				},
				{
					"mois": 68,
					"montant": 27.89
				},
				{
					"mois": 69,
					"montant": 29.31
				},
				{
					"mois": 70,
					"montant": 27.89
				},
				{
					"mois": 71,
					"montant": 28.33
				},
				{
					"mois": 72,
					"montant": 26.93
				},
				{
					"mois": 73,
					"montant": 25.44
				},
				{
					"mois": 74,
					"montant": 24.29
				},
				{
					"mois": 75,
					"montant": 24.93
				},
				{
					"mois": 76,
					"montant": 25.95
				},
				{
					"mois": 77,
					"montant": 24.65
				},
				{
					"mois": 78,
					"montant": 24.92
				},
				{
					"mois": 79,
					"montant": 24.42
				},
				{
					"mois": 80,
					"montant": 21.65
				},
				{
					"mois": 81,
					"montant": 23.43
				},
				{
					"mois": 82,
					"montant": 22.22
				},
				{
					"mois": 83,
					"montant": 22.43
				},
				{
					"mois": 84,
					"montant": 21.2
				},
				{
					"mois": 85,
					"montant": 18.94
				},
				{
					"mois": 86,
					"montant": 17.63
				},
				{
					"mois": 87,
					"montant": 18.26
				},
				{
					"mois": 88,
					"montant": 19.02
				},
				{
					"mois": 89,
					"montant": 17.93
				},
				{
					"mois": 90,
					"montant": 18.03
				},
				{
					"mois": 91,
					"montant": 17.57
				},
				{
					"mois": 92,
					"montant": 15.42
				},
				{
					"mois": 93,
					"montant": 16.57
				},
				{
					"mois": 94,
					"montant": 15.6
				},
				{
					"mois": 95,
					"montant": 15.62
				},
				{
					"mois": 96,
					"montant": 14.63
				},
				{
					"mois": 97,
					"montant": 13.93
				},
				{
					"mois": 98,
					"montant": 13.23
				},
				{
					"mois": 99,
					"montant": 13.44
				},
				{
					"mois": 100,
					"montant": 13.77
				},
				{
					"mois": 101,
					"montant": 12.84
				},
				{
					"mois": 102,
					"montant": 12.75
				},
				{
					"mois": 103,
					"montant": 12.24
				},
				{
					"mois": 104,
					"montant": 10.61
				},
				{
					"mois": 105,
					"montant": 11.17
				},
				{
					"mois": 106,
					"montant": 10.32
				},
				{
					"mois": 107,
					"montant": 10.15
				},
				{
					"mois": 108,
					"montant": 9.31
				},
				{
					"mois": 109,
					"montant": 8.67
				},
				{
					"mois": 110,
					"montant": 8
				},
				{
					"mois": 111,
					"montant": 7.94
				},
				{
					"mois": 112,
					"montant": 7.9
				},
				{
					"mois": 113,
					"montant": 7.12
				},
				{
					"mois": 114,
					"montant": 6.81
				},
				{
					"mois": 115,
					"montant": 6.26
				},
				{
					"mois": 116,
					"montant": 5.36
				},
				{
					"mois": 117,
					"montant": 5.15
				},
				{
					"mois": 118,
					"montant": 4.46
				},
				{
					"mois": 119,
					"montant": 4.01
				},
				{
					"mois": 120,
					"montant": 3.39
				},
				{
					"mois": 121,
					"montant": 2.79
				},
				{
					"mois": 122,
					"montant": 2.18
				},
				{
					"mois": 123,
					"montant": 1.77
				},
				{
					"mois": 124,
					"montant": 1.3
				},
				{
					"mois": 125,
					"montant": 0.69
				},
				{
					"mois": 126,
					"montant": 0.14
				}
			]
		},
		{
			"id_produit": "UGIP PRESTIGE CI",
			"plateforme": "UGIP",
			"porteur_risque": "Generali",
			"type_tarification": "Linéaire",
			"cout_total_euro": 4371.25,
			"cout_8_ans_euro": 3394.56,
			"mensualite_moyenne_euro": 34.97,
			"frais_dossier_euro": 115,
			"taea_pourcentage": 0.309,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 25.26
				},
				{
					"mois": 2,
					"montant": 34.05
				},
				{
					"mois": 3,
					"montant": 34.05
				},
				{
					"mois": 4,
					"montant": 34.05
				},
				{
					"mois": 5,
					"montant": 34.05
				},
				{
					"mois": 6,
					"montant": 34.05
				},
				{
					"mois": 7,
					"montant": 34.05
				},
				{
					"mois": 8,
					"montant": 34.05
				},
				{
					"mois": 9,
					"montant": 34.05
				},
				{
					"mois": 10,
					"montant": 34.05
				},
				{
					"mois": 11,
					"montant": 34.05
				},
				{
					"mois": 12,
					"montant": 34.05
				},
				{
					"mois": 13,
					"montant": 34.05
				},
				{
					"mois": 14,
					"montant": 34.05
				},
				{
					"mois": 15,
					"montant": 34.05
				},
				{
					"mois": 16,
					"montant": 34.05
				},
				{
					"mois": 17,
					"montant": 34.05
				},
				{
					"mois": 18,
					"montant": 34.05
				},
				{
					"mois": 19,
					"montant": 34.05
				},
				{
					"mois": 20,
					"montant": 34.05
				},
				{
					"mois": 21,
					"montant": 34.05
				},
				{
					"mois": 22,
					"montant": 34.05
				},
				{
					"mois": 23,
					"montant": 34.05
				},
				{
					"mois": 24,
					"montant": 34.05
				},
				{
					"mois": 25,
					"montant": 34.05
				},
				{
					"mois": 26,
					"montant": 34.05
				},
				{
					"mois": 27,
					"montant": 34.05
				},
				{
					"mois": 28,
					"montant": 34.05
				},
				{
					"mois": 29,
					"montant": 34.05
				},
				{
					"mois": 30,
					"montant": 34.05
				},
				{
					"mois": 31,
					"montant": 34.05
				},
				{
					"mois": 32,
					"montant": 34.05
				},
				{
					"mois": 33,
					"montant": 34.05
				},
				{
					"mois": 34,
					"montant": 34.05
				},
				{
					"mois": 35,
					"montant": 34.05
				},
				{
					"mois": 36,
					"montant": 34.05
				},
				{
					"mois": 37,
					"montant": 34.05
				},
				{
					"mois": 38,
					"montant": 34.05
				},
				{
					"mois": 39,
					"montant": 34.05
				},
				{
					"mois": 40,
					"montant": 34.05
				},
				{
					"mois": 41,
					"montant": 34.05
				},
				{
					"mois": 42,
					"montant": 34.05
				},
				{
					"mois": 43,
					"montant": 34.05
				},
				{
					"mois": 44,
					"montant": 34.05
				},
				{
					"mois": 45,
					"montant": 34.05
				},
				{
					"mois": 46,
					"montant": 34.05
				},
				{
					"mois": 47,
					"montant": 34.05
				},
				{
					"mois": 48,
					"montant": 34.05
				},
				{
					"mois": 49,
					"montant": 34.05
				},
				{
					"mois": 50,
					"montant": 34.05
				},
				{
					"mois": 51,
					"montant": 34.05
				},
				{
					"mois": 52,
					"montant": 34.05
				},
				{
					"mois": 53,
					"montant": 34.05
				},
				{
					"mois": 54,
					"montant": 34.05
				},
				{
					"mois": 55,
					"montant": 34.05
				},
				{
					"mois": 56,
					"montant": 34.05
				},
				{
					"mois": 57,
					"montant": 34.05
				},
				{
					"mois": 58,
					"montant": 34.05
				},
				{
					"mois": 59,
					"montant": 34.05
				},
				{
					"mois": 60,
					"montant": 34.05
				},
				{
					"mois": 61,
					"montant": 34.05
				},
				{
					"mois": 62,
					"montant": 34.05
				},
				{
					"mois": 63,
					"montant": 34.05
				},
				{
					"mois": 64,
					"montant": 34.05
				},
				{
					"mois": 65,
					"montant": 34.05
				},
				{
					"mois": 66,
					"montant": 34.05
				},
				{
					"mois": 67,
					"montant": 34.05
				},
				{
					"mois": 68,
					"montant": 34.05
				},
				{
					"mois": 69,
					"montant": 34.05
				},
				{
					"mois": 70,
					"montant": 34.05
				},
				{
					"mois": 71,
					"montant": 34.05
				},
				{
					"mois": 72,
					"montant": 34.05
				},
				{
					"mois": 73,
					"montant": 34.05
				},
				{
					"mois": 74,
					"montant": 34.05
				},
				{
					"mois": 75,
					"montant": 34.05
				},
				{
					"mois": 76,
					"montant": 34.05
				},
				{
					"mois": 77,
					"montant": 34.05
				},
				{
					"mois": 78,
					"montant": 34.05
				},
				{
					"mois": 79,
					"montant": 34.05
				},
				{
					"mois": 80,
					"montant": 34.05
				},
				{
					"mois": 81,
					"montant": 34.05
				},
				{
					"mois": 82,
					"montant": 34.05
				},
				{
					"mois": 83,
					"montant": 34.05
				},
				{
					"mois": 84,
					"montant": 34.05
				},
				{
					"mois": 85,
					"montant": 34.05
				},
				{
					"mois": 86,
					"montant": 34.05
				},
				{
					"mois": 87,
					"montant": 34.05
				},
				{
					"mois": 88,
					"montant": 34.05
				},
				{
					"mois": 89,
					"montant": 34.05
				},
				{
					"mois": 90,
					"montant": 34.05
				},
				{
					"mois": 91,
					"montant": 34.05
				},
				{
					"mois": 92,
					"montant": 34.05
				},
				{
					"mois": 93,
					"montant": 34.05
				},
				{
					"mois": 94,
					"montant": 34.05
				},
				{
					"mois": 95,
					"montant": 34.05
				},
				{
					"mois": 96,
					"montant": 34.05
				},
				{
					"mois": 97,
					"montant": 34.05
				},
				{
					"mois": 98,
					"montant": 34.05
				},
				{
					"mois": 99,
					"montant": 34.05
				},
				{
					"mois": 100,
					"montant": 34.05
				},
				{
					"mois": 101,
					"montant": 34.05
				},
				{
					"mois": 102,
					"montant": 34.05
				},
				{
					"mois": 103,
					"montant": 34.05
				},
				{
					"mois": 104,
					"montant": 34.05
				},
				{
					"mois": 105,
					"montant": 34.05
				},
				{
					"mois": 106,
					"montant": 34.05
				},
				{
					"mois": 107,
					"montant": 34.05
				},
				{
					"mois": 108,
					"montant": 34.05
				},
				{
					"mois": 109,
					"montant": 34.05
				},
				{
					"mois": 110,
					"montant": 34.05
				},
				{
					"mois": 111,
					"montant": 34.05
				},
				{
					"mois": 112,
					"montant": 34.05
				},
				{
					"mois": 113,
					"montant": 34.05
				},
				{
					"mois": 114,
					"montant": 34.05
				},
				{
					"mois": 115,
					"montant": 34.05
				},
				{
					"mois": 116,
					"montant": 34.05
				},
				{
					"mois": 117,
					"montant": 34.05
				},
				{
					"mois": 118,
					"montant": 34.05
				},
				{
					"mois": 119,
					"montant": 34.05
				},
				{
					"mois": 120,
					"montant": 34.05
				},
				{
					"mois": 121,
					"montant": 34.05
				},
				{
					"mois": 122,
					"montant": 34.05
				},
				{
					"mois": 123,
					"montant": 34.05
				},
				{
					"mois": 124,
					"montant": 34.05
				},
				{
					"mois": 125,
					"montant": 34.05
				},
				{
					"mois": 126,
					"montant": 8.79
				}
			]
		},
		{
			"id_produit": "SÉRÉNITÉ CRD",
			"plateforme": "UGIP",
			"porteur_risque": "Generali",
			"type_tarification": "CRD",
			"cout_total_euro": 5295.53,
			"cout_8_ans_euro": 5187.61,
			"mensualite_moyenne_euro": 42.36,
			"frais_dossier_euro": 113,
			"taea_pourcentage": 0.375,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 60.47
				},
				{
					"mois": 2,
					"montant": 81.02
				},
				{
					"mois": 3,
					"montant": 80.28
				},
				{
					"mois": 4,
					"montant": 79.61
				},
				{
					"mois": 5,
					"montant": 79
				},
				{
					"mois": 6,
					"montant": 78.39
				},
				{
					"mois": 7,
					"montant": 77.8
				},
				{
					"mois": 8,
					"montant": 77.23
				},
				{
					"mois": 9,
					"montant": 76.62
				},
				{
					"mois": 10,
					"montant": 75.99
				},
				{
					"mois": 11,
					"montant": 75.41
				},
				{
					"mois": 12,
					"montant": 74.81
				},
				{
					"mois": 13,
					"montant": 79.46
				},
				{
					"mois": 14,
					"montant": 80.67
				},
				{
					"mois": 15,
					"montant": 81.48
				},
				{
					"mois": 16,
					"montant": 81.37
				},
				{
					"mois": 17,
					"montant": 80.69
				},
				{
					"mois": 18,
					"montant": 79.97
				},
				{
					"mois": 19,
					"montant": 79.29
				},
				{
					"mois": 20,
					"montant": 78.64
				},
				{
					"mois": 21,
					"montant": 77.95
				},
				{
					"mois": 22,
					"montant": 77.24
				},
				{
					"mois": 23,
					"montant": 76.56
				},
				{
					"mois": 24,
					"montant": 75.86
				},
				{
					"mois": 25,
					"montant": 76.21
				},
				{
					"mois": 26,
					"montant": 75.86
				},
				{
					"mois": 27,
					"montant": 76.67
				},
				{
					"mois": 28,
					"montant": 76.47
				},
				{
					"mois": 29,
					"montant": 75.75
				},
				{
					"mois": 30,
					"montant": 75.03
				},
				{
					"mois": 31,
					"montant": 74.29
				},
				{
					"mois": 32,
					"montant": 73.61
				},
				{
					"mois": 33,
					"montant": 72.84
				},
				{
					"mois": 34,
					"montant": 72.11
				},
				{
					"mois": 35,
					"montant": 71.39
				},
				{
					"mois": 36,
					"montant": 70.67
				},
				{
					"mois": 37,
					"montant": 67.14
				},
				{
					"mois": 38,
					"montant": 65.48
				},
				{
					"mois": 39,
					"montant": 67.25
				},
				{
					"mois": 40,
					"montant": 67.39
				},
				{
					"mois": 41,
					"montant": 66.66
				},
				{
					"mois": 42,
					"montant": 65.9
				},
				{
					"mois": 43,
					"montant": 65.21
				},
				{
					"mois": 44,
					"montant": 64.49
				},
				{
					"mois": 45,
					"montant": 63.72
				},
				{
					"mois": 46,
					"montant": 62.99
				},
				{
					"mois": 47,
					"montant": 62.24
				},
				{
					"mois": 48,
					"montant": 61.48
				},
				{
					"mois": 49,
					"montant": 55.33
				},
				{
					"mois": 50,
					"montant": 52.77
				},
				{
					"mois": 51,
					"montant": 54.2
				},
				{
					"mois": 52,
					"montant": 54.21
				},
				{
					"mois": 53,
					"montant": 53.5
				},
				{
					"mois": 54,
					"montant": 52.82
				},
				{
					"mois": 55,
					"montant": 52.11
				},
				{
					"mois": 56,
					"montant": 51.43
				},
				{
					"mois": 57,
					"montant": 50.72
				},
				{
					"mois": 58,
					"montant": 50.03
				},
				{
					"mois": 59,
					"montant": 49.33
				},
				{
					"mois": 60,
					"montant": 48.64
				},
				{
					"mois": 61,
					"montant": 41.46
				},
				{
					"mois": 62,
					"montant": 38.63
				},
				{
					"mois": 63,
					"montant": 40.03
				},
				{
					"mois": 64,
					"montant": 40.14
				},
				{
					"mois": 65,
					"montant": 39.54
				},
				{
					"mois": 66,
					"montant": 38.94
				},
				{
					"mois": 67,
					"montant": 38.33
				},
				{
					"mois": 68,
					"montant": 37.66
				},
				{
					"mois": 69,
					"montant": 37.02
				},
				{
					"mois": 70,
					"montant": 36.44
				},
				{
					"mois": 71,
					"montant": 35.81
				},
				{
					"mois": 72,
					"montant": 35.2
				},
				{
					"mois": 73,
					"montant": 28.43
				},
				{
					"mois": 74,
					"montant": 25.77
				},
				{
					"mois": 75,
					"montant": 26.05
				},
				{
					"mois": 76,
					"montant": 25.8
				},
				{
					"mois": 77,
					"montant": 25.33
				},
				{
					"mois": 78,
					"montant": 24.85
				},
				{
					"mois": 79,
					"montant": 24.35
				},
				{
					"mois": 80,
					"montant": 23.83
				},
				{
					"mois": 81,
					"montant": 23.32
				},
				{
					"mois": 82,
					"montant": 22.81
				},
				{
					"mois": 83,
					"montant": 22.32
				},
				{
					"mois": 84,
					"montant": 21.81
				},
				{
					"mois": 85,
					"montant": 16.69
				},
				{
					"mois": 86,
					"montant": 14.72
				},
				{
					"mois": 87,
					"montant": 14.88
				},
				{
					"mois": 88,
					"montant": 14.69
				},
				{
					"mois": 89,
					"montant": 14.32
				},
				{
					"mois": 90,
					"montant": 13.95
				},
				{
					"mois": 91,
					"montant": 13.57
				},
				{
					"mois": 92,
					"montant": 13.21
				},
				{
					"mois": 93,
					"montant": 12.81
				},
				{
					"mois": 94,
					"montant": 12.45
				},
				{
					"mois": 95,
					"montant": 12.07
				},
				{
					"mois": 96,
					"montant": 11.69
				},
				{
					"mois": 97,
					"montant": 8.44
				},
				{
					"mois": 98,
					"montant": 7.16
				},
				{
					"mois": 99,
					"montant": 7.08
				},
				{
					"mois": 100,
					"montant": 6.91
				},
				{
					"mois": 101,
					"montant": 6.66
				},
				{
					"mois": 102,
					"montant": 6.39
				},
				{
					"mois": 103,
					"montant": 6.14
				},
				{
					"mois": 104,
					"montant": 5.9
				},
				{
					"mois": 105,
					"montant": 5.61
				},
				{
					"mois": 106,
					"montant": 5.36
				},
				{
					"mois": 107,
					"montant": 5.11
				},
				{
					"mois": 108,
					"montant": 4.86
				},
				{
					"mois": 109,
					"montant": 3.3
				},
				{
					"mois": 110,
					"montant": 2.63
				},
				{
					"mois": 111,
					"montant": 2.61
				},
				{
					"mois": 112,
					"montant": 2.46
				},
				{
					"mois": 113,
					"montant": 2.31
				},
				{
					"mois": 114,
					"montant": 2.13
				},
				{
					"mois": 115,
					"montant": 1.95
				},
				{
					"mois": 116,
					"montant": 1.8
				},
				{
					"mois": 117,
					"montant": 1.6
				},
				{
					"mois": 118,
					"montant": 1.42
				},
				{
					"mois": 119,
					"montant": 1.25
				},
				{
					"mois": 120,
					"montant": 1.1
				},
				{
					"mois": 121,
					"montant": 0.61
				},
				{
					"mois": 122,
					"montant": 0.41
				},
				{
					"mois": 123,
					"montant": 0.31
				},
				{
					"mois": 124,
					"montant": 0.21
				},
				{
					"mois": 125,
					"montant": 0.12
				},
				{
					"mois": 126,
					"montant": 0.02
				}
			]
		},
		{
			"id_produit": "SÉRÉNITÉ CI",
			"plateforme": "UGIP",
			"porteur_risque": "Generali",
			"type_tarification": "Linéaire",
			"cout_total_euro": 4225.52,
			"cout_8_ans_euro": 3281.32,
			"mensualite_moyenne_euro": 33.8,
			"frais_dossier_euro": 113,
			"taea_pourcentage": 0.299,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 24.42
				},
				{
					"mois": 2,
					"montant": 32.9
				},
				{
					"mois": 3,
					"montant": 32.9
				},
				{
					"mois": 4,
					"montant": 32.9
				},
				{
					"mois": 5,
					"montant": 32.9
				},
				{
					"mois": 6,
					"montant": 32.9
				},
				{
					"mois": 7,
					"montant": 32.9
				},
				{
					"mois": 8,
					"montant": 32.9
				},
				{
					"mois": 9,
					"montant": 32.9
				},
				{
					"mois": 10,
					"montant": 32.9
				},
				{
					"mois": 11,
					"montant": 32.9
				},
				{
					"mois": 12,
					"montant": 32.9
				},
				{
					"mois": 13,
					"montant": 32.9
				},
				{
					"mois": 14,
					"montant": 32.9
				},
				{
					"mois": 15,
					"montant": 32.9
				},
				{
					"mois": 16,
					"montant": 32.9
				},
				{
					"mois": 17,
					"montant": 32.9
				},
				{
					"mois": 18,
					"montant": 32.9
				},
				{
					"mois": 19,
					"montant": 32.9
				},
				{
					"mois": 20,
					"montant": 32.9
				},
				{
					"mois": 21,
					"montant": 32.9
				},
				{
					"mois": 22,
					"montant": 32.9
				},
				{
					"mois": 23,
					"montant": 32.9
				},
				{
					"mois": 24,
					"montant": 32.9
				},
				{
					"mois": 25,
					"montant": 32.9
				},
				{
					"mois": 26,
					"montant": 32.9
				},
				{
					"mois": 27,
					"montant": 32.9
				},
				{
					"mois": 28,
					"montant": 32.9
				},
				{
					"mois": 29,
					"montant": 32.9
				},
				{
					"mois": 30,
					"montant": 32.9
				},
				{
					"mois": 31,
					"montant": 32.9
				},
				{
					"mois": 32,
					"montant": 32.9
				},
				{
					"mois": 33,
					"montant": 32.9
				},
				{
					"mois": 34,
					"montant": 32.9
				},
				{
					"mois": 35,
					"montant": 32.9
				},
				{
					"mois": 36,
					"montant": 32.9
				},
				{
					"mois": 37,
					"montant": 32.9
				},
				{
					"mois": 38,
					"montant": 32.9
				},
				{
					"mois": 39,
					"montant": 32.9
				},
				{
					"mois": 40,
					"montant": 32.9
				},
				{
					"mois": 41,
					"montant": 32.9
				},
				{
					"mois": 42,
					"montant": 32.9
				},
				{
					"mois": 43,
					"montant": 32.9
				},
				{
					"mois": 44,
					"montant": 32.9
				},
				{
					"mois": 45,
					"montant": 32.9
				},
				{
					"mois": 46,
					"montant": 32.9
				},
				{
					"mois": 47,
					"montant": 32.9
				},
				{
					"mois": 48,
					"montant": 32.9
				},
				{
					"mois": 49,
					"montant": 32.9
				},
				{
					"mois": 50,
					"montant": 32.9
				},
				{
					"mois": 51,
					"montant": 32.9
				},
				{
					"mois": 52,
					"montant": 32.9
				},
				{
					"mois": 53,
					"montant": 32.9
				},
				{
					"mois": 54,
					"montant": 32.9
				},
				{
					"mois": 55,
					"montant": 32.9
				},
				{
					"mois": 56,
					"montant": 32.9
				},
				{
					"mois": 57,
					"montant": 32.9
				},
				{
					"mois": 58,
					"montant": 32.9
				},
				{
					"mois": 59,
					"montant": 32.9
				},
				{
					"mois": 60,
					"montant": 32.9
				},
				{
					"mois": 61,
					"montant": 32.9
				},
				{
					"mois": 62,
					"montant": 32.9
				},
				{
					"mois": 63,
					"montant": 32.9
				},
				{
					"mois": 64,
					"montant": 32.9
				},
				{
					"mois": 65,
					"montant": 32.9
				},
				{
					"mois": 66,
					"montant": 32.9
				},
				{
					"mois": 67,
					"montant": 32.9
				},
				{
					"mois": 68,
					"montant": 32.9
				},
				{
					"mois": 69,
					"montant": 32.9
				},
				{
					"mois": 70,
					"montant": 32.9
				},
				{
					"mois": 71,
					"montant": 32.9
				},
				{
					"mois": 72,
					"montant": 32.9
				},
				{
					"mois": 73,
					"montant": 32.9
				},
				{
					"mois": 74,
					"montant": 32.9
				},
				{
					"mois": 75,
					"montant": 32.9
				},
				{
					"mois": 76,
					"montant": 32.9
				},
				{
					"mois": 77,
					"montant": 32.9
				},
				{
					"mois": 78,
					"montant": 32.9
				},
				{
					"mois": 79,
					"montant": 32.9
				},
				{
					"mois": 80,
					"montant": 32.9
				},
				{
					"mois": 81,
					"montant": 32.9
				},
				{
					"mois": 82,
					"montant": 32.9
				},
				{
					"mois": 83,
					"montant": 32.9
				},
				{
					"mois": 84,
					"montant": 32.9
				},
				{
					"mois": 85,
					"montant": 32.9
				},
				{
					"mois": 86,
					"montant": 32.9
				},
				{
					"mois": 87,
					"montant": 32.9
				},
				{
					"mois": 88,
					"montant": 32.9
				},
				{
					"mois": 89,
					"montant": 32.9
				},
				{
					"mois": 90,
					"montant": 32.9
				},
				{
					"mois": 91,
					"montant": 32.9
				},
				{
					"mois": 92,
					"montant": 32.9
				},
				{
					"mois": 93,
					"montant": 32.9
				},
				{
					"mois": 94,
					"montant": 32.9
				},
				{
					"mois": 95,
					"montant": 32.9
				},
				{
					"mois": 96,
					"montant": 32.9
				},
				{
					"mois": 97,
					"montant": 32.9
				},
				{
					"mois": 98,
					"montant": 32.9
				},
				{
					"mois": 99,
					"montant": 32.9
				},
				{
					"mois": 100,
					"montant": 32.9
				},
				{
					"mois": 101,
					"montant": 32.9
				},
				{
					"mois": 102,
					"montant": 32.9
				},
				{
					"mois": 103,
					"montant": 32.9
				},
				{
					"mois": 104,
					"montant": 32.9
				},
				{
					"mois": 105,
					"montant": 32.9
				},
				{
					"mois": 106,
					"montant": 32.9
				},
				{
					"mois": 107,
					"montant": 32.9
				},
				{
					"mois": 108,
					"montant": 32.9
				},
				{
					"mois": 109,
					"montant": 32.9
				},
				{
					"mois": 110,
					"montant": 32.9
				},
				{
					"mois": 111,
					"montant": 32.9
				},
				{
					"mois": 112,
					"montant": 32.9
				},
				{
					"mois": 113,
					"montant": 32.9
				},
				{
					"mois": 114,
					"montant": 32.9
				},
				{
					"mois": 115,
					"montant": 32.9
				},
				{
					"mois": 116,
					"montant": 32.9
				},
				{
					"mois": 117,
					"montant": 32.9
				},
				{
					"mois": 118,
					"montant": 32.9
				},
				{
					"mois": 119,
					"montant": 32.9
				},
				{
					"mois": 120,
					"montant": 32.9
				},
				{
					"mois": 121,
					"montant": 32.9
				},
				{
					"mois": 122,
					"montant": 32.9
				},
				{
					"mois": 123,
					"montant": 32.9
				},
				{
					"mois": 124,
					"montant": 32.9
				},
				{
					"mois": 125,
					"montant": 32.9
				},
				{
					"mois": 126,
					"montant": 8.5
				}
			]
		},
		{
			"id_produit": "PRET MALAKOFF CRD2bis",
			"plateforme": "UTWIN",
			"porteur_risque": "Malakoff Humanis",
			"type_tarification": "CRD",
			"cout_total_euro": 3438.25,
			"cout_8_ans_euro": 3191.76,
			"mensualite_moyenne_euro": 27.51,
			"frais_dossier_euro": 132,
			"taea_pourcentage": 0.2531649948137491,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 45.44
				},
				{
					"mois": 2,
					"montant": 45.44
				},
				{
					"mois": 3,
					"montant": 45.44
				},
				{
					"mois": 4,
					"montant": 45.44
				},
				{
					"mois": 5,
					"montant": 45.44
				},
				{
					"mois": 6,
					"montant": 45.44
				},
				{
					"mois": 7,
					"montant": 45.44
				},
				{
					"mois": 8,
					"montant": 45.44
				},
				{
					"mois": 9,
					"montant": 45.44
				},
				{
					"mois": 10,
					"montant": 45.44
				},
				{
					"mois": 11,
					"montant": 45.44
				},
				{
					"mois": 12,
					"montant": 45.44
				},
				{
					"mois": 13,
					"montant": 36.71
				},
				{
					"mois": 14,
					"montant": 36.71
				},
				{
					"mois": 15,
					"montant": 36.71
				},
				{
					"mois": 16,
					"montant": 36.71
				},
				{
					"mois": 17,
					"montant": 36.71
				},
				{
					"mois": 18,
					"montant": 36.71
				},
				{
					"mois": 19,
					"montant": 36.71
				},
				{
					"mois": 20,
					"montant": 36.71
				},
				{
					"mois": 21,
					"montant": 36.71
				},
				{
					"mois": 22,
					"montant": 36.71
				},
				{
					"mois": 23,
					"montant": 36.71
				},
				{
					"mois": 24,
					"montant": 36.71
				},
				{
					"mois": 25,
					"montant": 42.94
				},
				{
					"mois": 26,
					"montant": 42.94
				},
				{
					"mois": 27,
					"montant": 42.94
				},
				{
					"mois": 28,
					"montant": 42.94
				},
				{
					"mois": 29,
					"montant": 42.94
				},
				{
					"mois": 30,
					"montant": 42.94
				},
				{
					"mois": 31,
					"montant": 42.94
				},
				{
					"mois": 32,
					"montant": 42.94
				},
				{
					"mois": 33,
					"montant": 42.94
				},
				{
					"mois": 34,
					"montant": 42.94
				},
				{
					"mois": 35,
					"montant": 42.94
				},
				{
					"mois": 36,
					"montant": 42.94
				},
				{
					"mois": 37,
					"montant": 38.23
				},
				{
					"mois": 38,
					"montant": 38.23
				},
				{
					"mois": 39,
					"montant": 38.23
				},
				{
					"mois": 40,
					"montant": 38.23
				},
				{
					"mois": 41,
					"montant": 38.23
				},
				{
					"mois": 42,
					"montant": 38.23
				},
				{
					"mois": 43,
					"montant": 38.23
				},
				{
					"mois": 44,
					"montant": 38.23
				},
				{
					"mois": 45,
					"montant": 38.23
				},
				{
					"mois": 46,
					"montant": 38.23
				},
				{
					"mois": 47,
					"montant": 38.23
				},
				{
					"mois": 48,
					"montant": 38.23
				},
				{
					"mois": 49,
					"montant": 33.44
				},
				{
					"mois": 50,
					"montant": 33.44
				},
				{
					"mois": 51,
					"montant": 33.44
				},
				{
					"mois": 52,
					"montant": 33.44
				},
				{
					"mois": 53,
					"montant": 33.44
				},
				{
					"mois": 54,
					"montant": 33.44
				},
				{
					"mois": 55,
					"montant": 33.44
				},
				{
					"mois": 56,
					"montant": 33.44
				},
				{
					"mois": 57,
					"montant": 33.44
				},
				{
					"mois": 58,
					"montant": 33.44
				},
				{
					"mois": 59,
					"montant": 33.44
				},
				{
					"mois": 60,
					"montant": 33.44
				},
				{
					"mois": 61,
					"montant": 28.24
				},
				{
					"mois": 62,
					"montant": 28.24
				},
				{
					"mois": 63,
					"montant": 28.24
				},
				{
					"mois": 64,
					"montant": 28.24
				},
				{
					"mois": 65,
					"montant": 28.24
				},
				{
					"mois": 66,
					"montant": 28.24
				},
				{
					"mois": 67,
					"montant": 28.24
				},
				{
					"mois": 68,
					"montant": 28.24
				},
				{
					"mois": 69,
					"montant": 28.24
				},
				{
					"mois": 70,
					"montant": 28.24
				},
				{
					"mois": 71,
					"montant": 28.24
				},
				{
					"mois": 72,
					"montant": 28.24
				},
				{
					"mois": 73,
					"montant": 22.93
				},
				{
					"mois": 74,
					"montant": 22.93
				},
				{
					"mois": 75,
					"montant": 22.93
				},
				{
					"mois": 76,
					"montant": 22.93
				},
				{
					"mois": 77,
					"montant": 22.93
				},
				{
					"mois": 78,
					"montant": 22.93
				},
				{
					"mois": 79,
					"montant": 22.93
				},
				{
					"mois": 80,
					"montant": 22.93
				},
				{
					"mois": 81,
					"montant": 22.93
				},
				{
					"mois": 82,
					"montant": 22.93
				},
				{
					"mois": 83,
					"montant": 22.93
				},
				{
					"mois": 84,
					"montant": 22.93
				},
				{
					"mois": 85,
					"montant": 18.05
				},
				{
					"mois": 86,
					"montant": 18.05
				},
				{
					"mois": 87,
					"montant": 18.05
				},
				{
					"mois": 88,
					"montant": 18.05
				},
				{
					"mois": 89,
					"montant": 18.05
				},
				{
					"mois": 90,
					"montant": 18.05
				},
				{
					"mois": 91,
					"montant": 18.05
				},
				{
					"mois": 92,
					"montant": 18.05
				},
				{
					"mois": 93,
					"montant": 18.05
				},
				{
					"mois": 94,
					"montant": 18.05
				},
				{
					"mois": 95,
					"montant": 18.05
				},
				{
					"mois": 96,
					"montant": 18.05
				},
				{
					"mois": 97,
					"montant": 12.62
				},
				{
					"mois": 98,
					"montant": 12.62
				},
				{
					"mois": 99,
					"montant": 12.62
				},
				{
					"mois": 100,
					"montant": 12.62
				},
				{
					"mois": 101,
					"montant": 12.62
				},
				{
					"mois": 102,
					"montant": 12.62
				},
				{
					"mois": 103,
					"montant": 12.62
				},
				{
					"mois": 104,
					"montant": 12.62
				},
				{
					"mois": 105,
					"montant": 12.62
				},
				{
					"mois": 106,
					"montant": 12.62
				},
				{
					"mois": 107,
					"montant": 12.62
				},
				{
					"mois": 108,
					"montant": 12.62
				},
				{
					"mois": 109,
					"montant": 6.98
				},
				{
					"mois": 110,
					"montant": 6.98
				},
				{
					"mois": 111,
					"montant": 6.98
				},
				{
					"mois": 112,
					"montant": 6.98
				},
				{
					"mois": 113,
					"montant": 6.98
				},
				{
					"mois": 114,
					"montant": 6.98
				},
				{
					"mois": 115,
					"montant": 6.98
				},
				{
					"mois": 116,
					"montant": 6.98
				},
				{
					"mois": 117,
					"montant": 6.98
				},
				{
					"mois": 118,
					"montant": 6.98
				},
				{
					"mois": 119,
					"montant": 6.98
				},
				{
					"mois": 120,
					"montant": 6.98
				},
				{
					"mois": 121,
					"montant": 2.26
				},
				{
					"mois": 122,
					"montant": 2.26
				},
				{
					"mois": 123,
					"montant": 2.26
				},
				{
					"mois": 124,
					"montant": 2.26
				},
				{
					"mois": 125,
					"montant": 2.26
				},
				{
					"mois": 126,
					"montant": 0
				}
			]
		},
		{
			"id_produit": "PRET GENERALI CRD",
			"plateforme": "UTWIN",
			"porteur_risque": "Generali",
			"type_tarification": "CRD",
			"cout_total_euro": 2820.52,
			"cout_8_ans_euro": 2638.92,
			"mensualite_moyenne_euro": 22.56,
			"frais_dossier_euro": 144,
			"taea_pourcentage": 0.20851159964255594,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 43.13
				},
				{
					"mois": 2,
					"montant": 43.13
				},
				{
					"mois": 3,
					"montant": 43.13
				},
				{
					"mois": 4,
					"montant": 43.13
				},
				{
					"mois": 5,
					"montant": 43.13
				},
				{
					"mois": 6,
					"montant": 43.13
				},
				{
					"mois": 7,
					"montant": 43.13
				},
				{
					"mois": 8,
					"montant": 43.13
				},
				{
					"mois": 9,
					"montant": 43.13
				},
				{
					"mois": 10,
					"montant": 43.13
				},
				{
					"mois": 11,
					"montant": 43.13
				},
				{
					"mois": 12,
					"montant": 43.13
				},
				{
					"mois": 13,
					"montant": 35.35
				},
				{
					"mois": 14,
					"montant": 35.35
				},
				{
					"mois": 15,
					"montant": 35.35
				},
				{
					"mois": 16,
					"montant": 35.35
				},
				{
					"mois": 17,
					"montant": 35.35
				},
				{
					"mois": 18,
					"montant": 35.35
				},
				{
					"mois": 19,
					"montant": 35.35
				},
				{
					"mois": 20,
					"montant": 35.35
				},
				{
					"mois": 21,
					"montant": 35.35
				},
				{
					"mois": 22,
					"montant": 35.35
				},
				{
					"mois": 23,
					"montant": 35.35
				},
				{
					"mois": 24,
					"montant": 35.35
				},
				{
					"mois": 25,
					"montant": 33.24
				},
				{
					"mois": 26,
					"montant": 33.24
				},
				{
					"mois": 27,
					"montant": 33.24
				},
				{
					"mois": 28,
					"montant": 33.24
				},
				{
					"mois": 29,
					"montant": 33.24
				},
				{
					"mois": 30,
					"montant": 33.24
				},
				{
					"mois": 31,
					"montant": 33.24
				},
				{
					"mois": 32,
					"montant": 33.24
				},
				{
					"mois": 33,
					"montant": 33.24
				},
				{
					"mois": 34,
					"montant": 33.24
				},
				{
					"mois": 35,
					"montant": 33.24
				},
				{
					"mois": 36,
					"montant": 33.24
				},
				{
					"mois": 37,
					"montant": 29.53
				},
				{
					"mois": 38,
					"montant": 29.53
				},
				{
					"mois": 39,
					"montant": 29.53
				},
				{
					"mois": 40,
					"montant": 29.53
				},
				{
					"mois": 41,
					"montant": 29.53
				},
				{
					"mois": 42,
					"montant": 29.53
				},
				{
					"mois": 43,
					"montant": 29.53
				},
				{
					"mois": 44,
					"montant": 29.53
				},
				{
					"mois": 45,
					"montant": 29.53
				},
				{
					"mois": 46,
					"montant": 29.53
				},
				{
					"mois": 47,
					"montant": 29.53
				},
				{
					"mois": 48,
					"montant": 29.53
				},
				{
					"mois": 49,
					"montant": 24.99
				},
				{
					"mois": 50,
					"montant": 24.99
				},
				{
					"mois": 51,
					"montant": 24.99
				},
				{
					"mois": 52,
					"montant": 24.99
				},
				{
					"mois": 53,
					"montant": 24.99
				},
				{
					"mois": 54,
					"montant": 24.99
				},
				{
					"mois": 55,
					"montant": 24.99
				},
				{
					"mois": 56,
					"montant": 24.99
				},
				{
					"mois": 57,
					"montant": 24.99
				},
				{
					"mois": 58,
					"montant": 24.99
				},
				{
					"mois": 59,
					"montant": 24.99
				},
				{
					"mois": 60,
					"montant": 24.99
				},
				{
					"mois": 61,
					"montant": 22.35
				},
				{
					"mois": 62,
					"montant": 22.35
				},
				{
					"mois": 63,
					"montant": 22.35
				},
				{
					"mois": 64,
					"montant": 22.35
				},
				{
					"mois": 65,
					"montant": 22.35
				},
				{
					"mois": 66,
					"montant": 22.35
				},
				{
					"mois": 67,
					"montant": 22.35
				},
				{
					"mois": 68,
					"montant": 22.35
				},
				{
					"mois": 69,
					"montant": 22.35
				},
				{
					"mois": 70,
					"montant": 22.35
				},
				{
					"mois": 71,
					"montant": 22.35
				},
				{
					"mois": 72,
					"montant": 22.35
				},
				{
					"mois": 73,
					"montant": 17.83
				},
				{
					"mois": 74,
					"montant": 17.83
				},
				{
					"mois": 75,
					"montant": 17.83
				},
				{
					"mois": 76,
					"montant": 17.83
				},
				{
					"mois": 77,
					"montant": 17.83
				},
				{
					"mois": 78,
					"montant": 17.83
				},
				{
					"mois": 79,
					"montant": 17.83
				},
				{
					"mois": 80,
					"montant": 17.83
				},
				{
					"mois": 81,
					"montant": 17.83
				},
				{
					"mois": 82,
					"montant": 17.83
				},
				{
					"mois": 83,
					"montant": 17.83
				},
				{
					"mois": 84,
					"montant": 17.83
				},
				{
					"mois": 85,
					"montant": 13.49
				},
				{
					"mois": 86,
					"montant": 13.49
				},
				{
					"mois": 87,
					"montant": 13.49
				},
				{
					"mois": 88,
					"montant": 13.49
				},
				{
					"mois": 89,
					"montant": 13.49
				},
				{
					"mois": 90,
					"montant": 13.49
				},
				{
					"mois": 91,
					"montant": 13.49
				},
				{
					"mois": 92,
					"montant": 13.49
				},
				{
					"mois": 93,
					"montant": 13.49
				},
				{
					"mois": 94,
					"montant": 13.49
				},
				{
					"mois": 95,
					"montant": 13.49
				},
				{
					"mois": 96,
					"montant": 13.49
				},
				{
					"mois": 97,
					"montant": 9.28
				},
				{
					"mois": 98,
					"montant": 9.28
				},
				{
					"mois": 99,
					"montant": 9.28
				},
				{
					"mois": 100,
					"montant": 9.28
				},
				{
					"mois": 101,
					"montant": 9.28
				},
				{
					"mois": 102,
					"montant": 9.28
				},
				{
					"mois": 103,
					"montant": 9.28
				},
				{
					"mois": 104,
					"montant": 9.28
				},
				{
					"mois": 105,
					"montant": 9.28
				},
				{
					"mois": 106,
					"montant": 9.28
				},
				{
					"mois": 107,
					"montant": 9.28
				},
				{
					"mois": 108,
					"montant": 9.28
				},
				{
					"mois": 109,
					"montant": 5.14
				},
				{
					"mois": 110,
					"montant": 5.14
				},
				{
					"mois": 111,
					"montant": 5.14
				},
				{
					"mois": 112,
					"montant": 5.14
				},
				{
					"mois": 113,
					"montant": 5.14
				},
				{
					"mois": 114,
					"montant": 5.14
				},
				{
					"mois": 115,
					"montant": 5.14
				},
				{
					"mois": 116,
					"montant": 5.14
				},
				{
					"mois": 117,
					"montant": 5.14
				},
				{
					"mois": 118,
					"montant": 5.14
				},
				{
					"mois": 119,
					"montant": 5.14
				},
				{
					"mois": 120,
					"montant": 5.14
				},
				{
					"mois": 121,
					"montant": 1.69
				},
				{
					"mois": 122,
					"montant": 1.69
				},
				{
					"mois": 123,
					"montant": 1.69
				},
				{
					"mois": 124,
					"montant": 1.69
				},
				{
					"mois": 125,
					"montant": 1.69
				},
				{
					"mois": 126,
					"montant": 0
				}
			]
		},
		{
			"id_produit": "PRET GENERALI LINEAIRE",
			"plateforme": "UTWIN",
			"porteur_risque": "Generali",
			"type_tarification": "Linéaire",
			"cout_total_euro": 2988.96,
			"cout_8_ans_euro": 2328.96,
			"mensualite_moyenne_euro": 23.91,
			"frais_dossier_euro": 144,
			"taea_pourcentage": 0.2153634160145088,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 34.76
				},
				{
					"mois": 2,
					"montant": 34.76
				},
				{
					"mois": 3,
					"montant": 34.76
				},
				{
					"mois": 4,
					"montant": 34.76
				},
				{
					"mois": 5,
					"montant": 34.76
				},
				{
					"mois": 6,
					"montant": 34.76
				},
				{
					"mois": 7,
					"montant": 34.76
				},
				{
					"mois": 8,
					"montant": 34.76
				},
				{
					"mois": 9,
					"montant": 34.76
				},
				{
					"mois": 10,
					"montant": 34.76
				},
				{
					"mois": 11,
					"montant": 34.76
				},
				{
					"mois": 12,
					"montant": 34.76
				},
				{
					"mois": 13,
					"montant": 22.76
				},
				{
					"mois": 14,
					"montant": 22.76
				},
				{
					"mois": 15,
					"montant": 22.76
				},
				{
					"mois": 16,
					"montant": 22.76
				},
				{
					"mois": 17,
					"montant": 22.76
				},
				{
					"mois": 18,
					"montant": 22.76
				},
				{
					"mois": 19,
					"montant": 22.76
				},
				{
					"mois": 20,
					"montant": 22.76
				},
				{
					"mois": 21,
					"montant": 22.76
				},
				{
					"mois": 22,
					"montant": 22.76
				},
				{
					"mois": 23,
					"montant": 22.76
				},
				{
					"mois": 24,
					"montant": 22.76
				},
				{
					"mois": 25,
					"montant": 22.76
				},
				{
					"mois": 26,
					"montant": 22.76
				},
				{
					"mois": 27,
					"montant": 22.76
				},
				{
					"mois": 28,
					"montant": 22.76
				},
				{
					"mois": 29,
					"montant": 22.76
				},
				{
					"mois": 30,
					"montant": 22.76
				},
				{
					"mois": 31,
					"montant": 22.76
				},
				{
					"mois": 32,
					"montant": 22.76
				},
				{
					"mois": 33,
					"montant": 22.76
				},
				{
					"mois": 34,
					"montant": 22.76
				},
				{
					"mois": 35,
					"montant": 22.76
				},
				{
					"mois": 36,
					"montant": 22.76
				},
				{
					"mois": 37,
					"montant": 22.76
				},
				{
					"mois": 38,
					"montant": 22.76
				},
				{
					"mois": 39,
					"montant": 22.76
				},
				{
					"mois": 40,
					"montant": 22.76
				},
				{
					"mois": 41,
					"montant": 22.76
				},
				{
					"mois": 42,
					"montant": 22.76
				},
				{
					"mois": 43,
					"montant": 22.76
				},
				{
					"mois": 44,
					"montant": 22.76
				},
				{
					"mois": 45,
					"montant": 22.76
				},
				{
					"mois": 46,
					"montant": 22.76
				},
				{
					"mois": 47,
					"montant": 22.76
				},
				{
					"mois": 48,
					"montant": 22.76
				},
				{
					"mois": 49,
					"montant": 22.76
				},
				{
					"mois": 50,
					"montant": 22.76
				},
				{
					"mois": 51,
					"montant": 22.76
				},
				{
					"mois": 52,
					"montant": 22.76
				},
				{
					"mois": 53,
					"montant": 22.76
				},
				{
					"mois": 54,
					"montant": 22.76
				},
				{
					"mois": 55,
					"montant": 22.76
				},
				{
					"mois": 56,
					"montant": 22.76
				},
				{
					"mois": 57,
					"montant": 22.76
				},
				{
					"mois": 58,
					"montant": 22.76
				},
				{
					"mois": 59,
					"montant": 22.76
				},
				{
					"mois": 60,
					"montant": 22.76
				},
				{
					"mois": 61,
					"montant": 22.76
				},
				{
					"mois": 62,
					"montant": 22.76
				},
				{
					"mois": 63,
					"montant": 22.76
				},
				{
					"mois": 64,
					"montant": 22.76
				},
				{
					"mois": 65,
					"montant": 22.76
				},
				{
					"mois": 66,
					"montant": 22.76
				},
				{
					"mois": 67,
					"montant": 22.76
				},
				{
					"mois": 68,
					"montant": 22.76
				},
				{
					"mois": 69,
					"montant": 22.76
				},
				{
					"mois": 70,
					"montant": 22.76
				},
				{
					"mois": 71,
					"montant": 22.76
				},
				{
					"mois": 72,
					"montant": 22.76
				},
				{
					"mois": 73,
					"montant": 22.76
				},
				{
					"mois": 74,
					"montant": 22.76
				},
				{
					"mois": 75,
					"montant": 22.76
				},
				{
					"mois": 76,
					"montant": 22.76
				},
				{
					"mois": 77,
					"montant": 22.76
				},
				{
					"mois": 78,
					"montant": 22.76
				},
				{
					"mois": 79,
					"montant": 22.76
				},
				{
					"mois": 80,
					"montant": 22.76
				},
				{
					"mois": 81,
					"montant": 22.76
				},
				{
					"mois": 82,
					"montant": 22.76
				},
				{
					"mois": 83,
					"montant": 22.76
				},
				{
					"mois": 84,
					"montant": 22.76
				},
				{
					"mois": 85,
					"montant": 22.76
				},
				{
					"mois": 86,
					"montant": 22.76
				},
				{
					"mois": 87,
					"montant": 22.76
				},
				{
					"mois": 88,
					"montant": 22.76
				},
				{
					"mois": 89,
					"montant": 22.76
				},
				{
					"mois": 90,
					"montant": 22.76
				},
				{
					"mois": 91,
					"montant": 22.76
				},
				{
					"mois": 92,
					"montant": 22.76
				},
				{
					"mois": 93,
					"montant": 22.76
				},
				{
					"mois": 94,
					"montant": 22.76
				},
				{
					"mois": 95,
					"montant": 22.76
				},
				{
					"mois": 96,
					"montant": 22.76
				},
				{
					"mois": 97,
					"montant": 22.76
				},
				{
					"mois": 98,
					"montant": 22.76
				},
				{
					"mois": 99,
					"montant": 22.76
				},
				{
					"mois": 100,
					"montant": 22.76
				},
				{
					"mois": 101,
					"montant": 22.76
				},
				{
					"mois": 102,
					"montant": 22.76
				},
				{
					"mois": 103,
					"montant": 22.76
				},
				{
					"mois": 104,
					"montant": 22.76
				},
				{
					"mois": 105,
					"montant": 22.76
				},
				{
					"mois": 106,
					"montant": 22.76
				},
				{
					"mois": 107,
					"montant": 22.76
				},
				{
					"mois": 108,
					"montant": 22.76
				},
				{
					"mois": 109,
					"montant": 22.76
				},
				{
					"mois": 110,
					"montant": 22.76
				},
				{
					"mois": 111,
					"montant": 22.76
				},
				{
					"mois": 112,
					"montant": 22.76
				},
				{
					"mois": 113,
					"montant": 22.76
				},
				{
					"mois": 114,
					"montant": 22.76
				},
				{
					"mois": 115,
					"montant": 22.76
				},
				{
					"mois": 116,
					"montant": 22.76
				},
				{
					"mois": 117,
					"montant": 22.76
				},
				{
					"mois": 118,
					"montant": 22.76
				},
				{
					"mois": 119,
					"montant": 22.76
				},
				{
					"mois": 120,
					"montant": 22.76
				},
				{
					"mois": 121,
					"montant": 22.76
				},
				{
					"mois": 122,
					"montant": 22.76
				},
				{
					"mois": 123,
					"montant": 22.76
				},
				{
					"mois": 124,
					"montant": 22.76
				},
				{
					"mois": 125,
					"montant": 22.76
				},
				{
					"mois": 126,
					"montant": 0
				}
			]
		},
		{
			"id_produit": "PRET AXERIA LINEAIRE",
			"plateforme": "UTWIN",
			"porteur_risque": "Axeria",
			"type_tarification": "Linéaire",
			"cout_total_euro": 3044.52,
			"cout_8_ans_euro": 2368.8,
			"mensualite_moyenne_euro": 24.36,
			"frais_dossier_euro": 132,
			"taea_pourcentage": 0.2192568559341932,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 34.3
				},
				{
					"mois": 2,
					"montant": 34.3
				},
				{
					"mois": 3,
					"montant": 34.3
				},
				{
					"mois": 4,
					"montant": 34.3
				},
				{
					"mois": 5,
					"montant": 34.3
				},
				{
					"mois": 6,
					"montant": 34.3
				},
				{
					"mois": 7,
					"montant": 34.3
				},
				{
					"mois": 8,
					"montant": 34.3
				},
				{
					"mois": 9,
					"montant": 34.3
				},
				{
					"mois": 10,
					"montant": 34.3
				},
				{
					"mois": 11,
					"montant": 34.3
				},
				{
					"mois": 12,
					"montant": 34.3
				},
				{
					"mois": 13,
					"montant": 23.3
				},
				{
					"mois": 14,
					"montant": 23.3
				},
				{
					"mois": 15,
					"montant": 23.3
				},
				{
					"mois": 16,
					"montant": 23.3
				},
				{
					"mois": 17,
					"montant": 23.3
				},
				{
					"mois": 18,
					"montant": 23.3
				},
				{
					"mois": 19,
					"montant": 23.3
				},
				{
					"mois": 20,
					"montant": 23.3
				},
				{
					"mois": 21,
					"montant": 23.3
				},
				{
					"mois": 22,
					"montant": 23.3
				},
				{
					"mois": 23,
					"montant": 23.3
				},
				{
					"mois": 24,
					"montant": 23.3
				},
				{
					"mois": 25,
					"montant": 23.3
				},
				{
					"mois": 26,
					"montant": 23.3
				},
				{
					"mois": 27,
					"montant": 23.3
				},
				{
					"mois": 28,
					"montant": 23.3
				},
				{
					"mois": 29,
					"montant": 23.3
				},
				{
					"mois": 30,
					"montant": 23.3
				},
				{
					"mois": 31,
					"montant": 23.3
				},
				{
					"mois": 32,
					"montant": 23.3
				},
				{
					"mois": 33,
					"montant": 23.3
				},
				{
					"mois": 34,
					"montant": 23.3
				},
				{
					"mois": 35,
					"montant": 23.3
				},
				{
					"mois": 36,
					"montant": 23.3
				},
				{
					"mois": 37,
					"montant": 23.3
				},
				{
					"mois": 38,
					"montant": 23.3
				},
				{
					"mois": 39,
					"montant": 23.3
				},
				{
					"mois": 40,
					"montant": 23.3
				},
				{
					"mois": 41,
					"montant": 23.3
				},
				{
					"mois": 42,
					"montant": 23.3
				},
				{
					"mois": 43,
					"montant": 23.3
				},
				{
					"mois": 44,
					"montant": 23.3
				},
				{
					"mois": 45,
					"montant": 23.3
				},
				{
					"mois": 46,
					"montant": 23.3
				},
				{
					"mois": 47,
					"montant": 23.3
				},
				{
					"mois": 48,
					"montant": 23.3
				},
				{
					"mois": 49,
					"montant": 23.3
				},
				{
					"mois": 50,
					"montant": 23.3
				},
				{
					"mois": 51,
					"montant": 23.3
				},
				{
					"mois": 52,
					"montant": 23.3
				},
				{
					"mois": 53,
					"montant": 23.3
				},
				{
					"mois": 54,
					"montant": 23.3
				},
				{
					"mois": 55,
					"montant": 23.3
				},
				{
					"mois": 56,
					"montant": 23.3
				},
				{
					"mois": 57,
					"montant": 23.3
				},
				{
					"mois": 58,
					"montant": 23.3
				},
				{
					"mois": 59,
					"montant": 23.3
				},
				{
					"mois": 60,
					"montant": 23.3
				},
				{
					"mois": 61,
					"montant": 23.3
				},
				{
					"mois": 62,
					"montant": 23.3
				},
				{
					"mois": 63,
					"montant": 23.3
				},
				{
					"mois": 64,
					"montant": 23.3
				},
				{
					"mois": 65,
					"montant": 23.3
				},
				{
					"mois": 66,
					"montant": 23.3
				},
				{
					"mois": 67,
					"montant": 23.3
				},
				{
					"mois": 68,
					"montant": 23.3
				},
				{
					"mois": 69,
					"montant": 23.3
				},
				{
					"mois": 70,
					"montant": 23.3
				},
				{
					"mois": 71,
					"montant": 23.3
				},
				{
					"mois": 72,
					"montant": 23.3
				},
				{
					"mois": 73,
					"montant": 23.3
				},
				{
					"mois": 74,
					"montant": 23.3
				},
				{
					"mois": 75,
					"montant": 23.3
				},
				{
					"mois": 76,
					"montant": 23.3
				},
				{
					"mois": 77,
					"montant": 23.3
				},
				{
					"mois": 78,
					"montant": 23.3
				},
				{
					"mois": 79,
					"montant": 23.3
				},
				{
					"mois": 80,
					"montant": 23.3
				},
				{
					"mois": 81,
					"montant": 23.3
				},
				{
					"mois": 82,
					"montant": 23.3
				},
				{
					"mois": 83,
					"montant": 23.3
				},
				{
					"mois": 84,
					"montant": 23.3
				},
				{
					"mois": 85,
					"montant": 23.3
				},
				{
					"mois": 86,
					"montant": 23.3
				},
				{
					"mois": 87,
					"montant": 23.3
				},
				{
					"mois": 88,
					"montant": 23.3
				},
				{
					"mois": 89,
					"montant": 23.3
				},
				{
					"mois": 90,
					"montant": 23.3
				},
				{
					"mois": 91,
					"montant": 23.3
				},
				{
					"mois": 92,
					"montant": 23.3
				},
				{
					"mois": 93,
					"montant": 23.3
				},
				{
					"mois": 94,
					"montant": 23.3
				},
				{
					"mois": 95,
					"montant": 23.3
				},
				{
					"mois": 96,
					"montant": 23.3
				},
				{
					"mois": 97,
					"montant": 23.3
				},
				{
					"mois": 98,
					"montant": 23.3
				},
				{
					"mois": 99,
					"montant": 23.3
				},
				{
					"mois": 100,
					"montant": 23.3
				},
				{
					"mois": 101,
					"montant": 23.3
				},
				{
					"mois": 102,
					"montant": 23.3
				},
				{
					"mois": 103,
					"montant": 23.3
				},
				{
					"mois": 104,
					"montant": 23.3
				},
				{
					"mois": 105,
					"montant": 23.3
				},
				{
					"mois": 106,
					"montant": 23.3
				},
				{
					"mois": 107,
					"montant": 23.3
				},
				{
					"mois": 108,
					"montant": 23.3
				},
				{
					"mois": 109,
					"montant": 23.3
				},
				{
					"mois": 110,
					"montant": 23.3
				},
				{
					"mois": 111,
					"montant": 23.3
				},
				{
					"mois": 112,
					"montant": 23.3
				},
				{
					"mois": 113,
					"montant": 23.3
				},
				{
					"mois": 114,
					"montant": 23.3
				},
				{
					"mois": 115,
					"montant": 23.3
				},
				{
					"mois": 116,
					"montant": 23.3
				},
				{
					"mois": 117,
					"montant": 23.3
				},
				{
					"mois": 118,
					"montant": 23.3
				},
				{
					"mois": 119,
					"montant": 23.3
				},
				{
					"mois": 120,
					"montant": 23.3
				},
				{
					"mois": 121,
					"montant": 23.3
				},
				{
					"mois": 122,
					"montant": 23.3
				},
				{
					"mois": 123,
					"montant": 23.3
				},
				{
					"mois": 124,
					"montant": 23.3
				},
				{
					"mois": 125,
					"montant": 23.3
				},
				{
					"mois": 126,
					"montant": 0
				}
			]
		},
		{
			"id_produit": "PRET PREVOIR-PARTNER CRD",
			"plateforme": "UTWIN",
			"porteur_risque": "Prévoir",
			"type_tarification": "CRD",
			"cout_total_euro": 2461.47,
			"cout_8_ans_euro": 2429.28,
			"mensualite_moyenne_euro": 19.69,
			"frais_dossier_euro": 132,
			"taea_pourcentage": 0.18447071359897738,
			"garanties": {
				"quotite_deces": 100,
				"quotite_itt": 100,
				"franchise_jours": 6
			},
			"echeancier": [
				{
					"mois": 1,
					"montant": 38.92
				},
				{
					"mois": 2,
					"montant": 38.92
				},
				{
					"mois": 3,
					"montant": 38.92
				},
				{
					"mois": 4,
					"montant": 38.92
				},
				{
					"mois": 5,
					"montant": 38.92
				},
				{
					"mois": 6,
					"montant": 38.92
				},
				{
					"mois": 7,
					"montant": 38.92
				},
				{
					"mois": 8,
					"montant": 38.92
				},
				{
					"mois": 9,
					"montant": 38.92
				},
				{
					"mois": 10,
					"montant": 38.92
				},
				{
					"mois": 11,
					"montant": 38.92
				},
				{
					"mois": 12,
					"montant": 38.92
				},
				{
					"mois": 13,
					"montant": 42.01
				},
				{
					"mois": 14,
					"montant": 42.01
				},
				{
					"mois": 15,
					"montant": 42.01
				},
				{
					"mois": 16,
					"montant": 42.01
				},
				{
					"mois": 17,
					"montant": 42.01
				},
				{
					"mois": 18,
					"montant": 42.01
				},
				{
					"mois": 19,
					"montant": 42.01
				},
				{
					"mois": 20,
					"montant": 42.01
				},
				{
					"mois": 21,
					"montant": 42.01
				},
				{
					"mois": 22,
					"montant": 42.01
				},
				{
					"mois": 23,
					"montant": 42.01
				},
				{
					"mois": 24,
					"montant": 42.01
				},
				{
					"mois": 25,
					"montant": 38.75
				},
				{
					"mois": 26,
					"montant": 38.75
				},
				{
					"mois": 27,
					"montant": 38.75
				},
				{
					"mois": 28,
					"montant": 38.75
				},
				{
					"mois": 29,
					"montant": 38.75
				},
				{
					"mois": 30,
					"montant": 38.75
				},
				{
					"mois": 31,
					"montant": 38.75
				},
				{
					"mois": 32,
					"montant": 38.75
				},
				{
					"mois": 33,
					"montant": 38.75
				},
				{
					"mois": 34,
					"montant": 38.75
				},
				{
					"mois": 35,
					"montant": 38.75
				},
				{
					"mois": 36,
					"montant": 38.75
				},
				{
					"mois": 37,
					"montant": 32.85
				},
				{
					"mois": 38,
					"montant": 32.85
				},
				{
					"mois": 39,
					"montant": 32.85
				},
				{
					"mois": 40,
					"montant": 32.85
				},
				{
					"mois": 41,
					"montant": 32.85
				},
				{
					"mois": 42,
					"montant": 32.85
				},
				{
					"mois": 43,
					"montant": 32.85
				},
				{
					"mois": 44,
					"montant": 32.85
				},
				{
					"mois": 45,
					"montant": 32.85
				},
				{
					"mois": 46,
					"montant": 32.85
				},
				{
					"mois": 47,
					"montant": 32.85
				},
				{
					"mois": 48,
					"montant": 32.85
				},
				{
					"mois": 49,
					"montant": 23.09
				},
				{
					"mois": 50,
					"montant": 23.09
				},
				{
					"mois": 51,
					"montant": 23.09
				},
				{
					"mois": 52,
					"montant": 23.09
				},
				{
					"mois": 53,
					"montant": 23.09
				},
				{
					"mois": 54,
					"montant": 23.09
				},
				{
					"mois": 55,
					"montant": 23.09
				},
				{
					"mois": 56,
					"montant": 23.09
				},
				{
					"mois": 57,
					"montant": 23.09
				},
				{
					"mois": 58,
					"montant": 23.09
				},
				{
					"mois": 59,
					"montant": 23.09
				},
				{
					"mois": 60,
					"montant": 23.09
				},
				{
					"mois": 61,
					"montant": 13.96
				},
				{
					"mois": 62,
					"montant": 13.96
				},
				{
					"mois": 63,
					"montant": 13.96
				},
				{
					"mois": 64,
					"montant": 13.96
				},
				{
					"mois": 65,
					"montant": 13.96
				},
				{
					"mois": 66,
					"montant": 13.96
				},
				{
					"mois": 67,
					"montant": 13.96
				},
				{
					"mois": 68,
					"montant": 13.96
				},
				{
					"mois": 69,
					"montant": 13.96
				},
				{
					"mois": 70,
					"montant": 13.96
				},
				{
					"mois": 71,
					"montant": 13.96
				},
				{
					"mois": 72,
					"montant": 13.96
				},
				{
					"mois": 73,
					"montant": 8.14
				},
				{
					"mois": 74,
					"montant": 8.14
				},
				{
					"mois": 75,
					"montant": 8.14
				},
				{
					"mois": 76,
					"montant": 8.14
				},
				{
					"mois": 77,
					"montant": 8.14
				},
				{
					"mois": 78,
					"montant": 8.14
				},
				{
					"mois": 79,
					"montant": 8.14
				},
				{
					"mois": 80,
					"montant": 8.14
				},
				{
					"mois": 81,
					"montant": 8.14
				},
				{
					"mois": 82,
					"montant": 8.14
				},
				{
					"mois": 83,
					"montant": 8.14
				},
				{
					"mois": 84,
					"montant": 8.14
				},
				{
					"mois": 85,
					"montant": 4.72
				},
				{
					"mois": 86,
					"montant": 4.72
				},
				{
					"mois": 87,
					"montant": 4.72
				},
				{
					"mois": 88,
					"montant": 4.72
				},
				{
					"mois": 89,
					"montant": 4.72
				},
				{
					"mois": 90,
					"montant": 4.72
				},
				{
					"mois": 91,
					"montant": 4.72
				},
				{
					"mois": 92,
					"montant": 4.72
				},
				{
					"mois": 93,
					"montant": 4.72
				},
				{
					"mois": 94,
					"montant": 4.72
				},
				{
					"mois": 95,
					"montant": 4.72
				},
				{
					"mois": 96,
					"montant": 4.72
				},
				{
					"mois": 97,
					"montant": 1.96
				},
				{
					"mois": 98,
					"montant": 1.96
				},
				{
					"mois": 99,
					"montant": 1.96
				},
				{
					"mois": 100,
					"montant": 1.96
				},
				{
					"mois": 101,
					"montant": 1.96
				},
				{
					"mois": 102,
					"montant": 1.96
				},
				{
					"mois": 103,
					"montant": 1.96
				},
				{
					"mois": 104,
					"montant": 1.96
				},
				{
					"mois": 105,
					"montant": 1.96
				},
				{
					"mois": 106,
					"montant": 1.96
				},
				{
					"mois": 107,
					"montant": 1.96
				},
				{
					"mois": 108,
					"montant": 1.96
				},
				{
					"mois": 109,
					"montant": 0.68
				},
				{
					"mois": 110,
					"montant": 0.68
				},
				{
					"mois": 111,
					"montant": 0.68
				},
				{
					"mois": 112,
					"montant": 0.68
				},
				{
					"mois": 113,
					"montant": 0.68
				},
				{
					"mois": 114,
					"montant": 0.68
				},
				{
					"mois": 115,
					"montant": 0.68
				},
				{
					"mois": 116,
					"montant": 0.68
				},
				{
					"mois": 117,
					"montant": 0.68
				},
				{
					"mois": 118,
					"montant": 0.68
				},
				{
					"mois": 119,
					"montant": 0.68
				},
				{
					"mois": 120,
					"montant": 0.68
				},
				{
					"mois": 121,
					"montant": 0.09
				},
				{
					"mois": 122,
					"montant": 0.09
				},
				{
					"mois": 123,
					"montant": 0.09
				},
				{
					"mois": 124,
					"montant": 0.09
				},
				{
					"mois": 125,
					"montant": 0.09
				},
				{
					"mois": 126,
					"montant": 0
				}
			]
		}
	]
}