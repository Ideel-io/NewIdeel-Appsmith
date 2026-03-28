export default {
	document_keys: [], // Contain file S3 keys 
	hasResult: false, // If the IA has already run
	prompt: JSON.stringify(	{ // JSON Prompt
	"first_due_date": {
		"value": "YYYY-MM-DD|null",
		"accuracy": "x%"
	},
	"initial_amount_borrowed": {
		"value": "number|null",
		"accuracy": "x%"
	},
	"interest_rate": {
		"value": "number|null",
		"accuracy": "x%"
	},
	"initial_duration": {
		"value": "integer|null",
		"accuracy": "x%"
	},
	"deferred_repayment": {
		"value": "number|false | \"Pas de paiement différé\"",
		"accuracy": "x%"
	},
	"explanation": "Vous êtes chargé de faire un résumé du contrat d'assurance emprunteur pour un courtier. \
Évaluez brièvement la clarté et la complétude : signalez si le document est compréhensible et si des informations clés manquent ou sont ambiguës. \
Fournissez un résumé structuré, focalisé sur : Établissement prêteur ;  assuré(s) ; montant du prêt ; capital restant dû ; dates (signature, fin de prêt) ; taux du pret, montant de l'assurance \
Excluez tout détail non utile au courtier : Caution, délais de réflexion, modalités de domiciliation/prélèvement, mentions RGPD ou procédures bancaires non liées au risque.",
	"options": {
		"insured1_death_PTIA": {
			"value": "number|null",
			"accuracy": "x%"
		},
		"insured1_ITT_IPT": {
			"value": "number|null",
			"accuracy": "x%"
		},
		"insured1_IPP": {
			"value": "number|null",
			"accuracy": "x%"
		},
		"insured1_IPPro": {
			"value": "number|null",
			"accuracy": "x%"
		},
		"insured2_death_PTIA": {
			"value": "number|null",
			"accuracy": "x%"
		},
		"insured2_ITT_IPT": { 
			"value": "number|null",
			"accuracy": "x%"
		},
		"insured2_IPP": {
			"value": "number|null",
			"accuracy": "x%"
		},
		"insured2_IPPro": {
			"value": "number|null",
			"accuracy": "x%"
		}
	}
}
),
	prompt_suggestion: // Suggestion (fine tunning)
"Tu es Assistant‑Extraction‑Prêt, expert des contrats de prêt immobilier français et de l'assurance emprunteur. On te fournit le texte brut d'un document (PDF OCRisé). \
Si une information est absente ou impossible à déduire, mets la clé value à null (ou à 'false' pour l'absence de différé) et accuracy_pct à 0. N'invente jamais. Les pourcentages d'exactitude (accuracy_pct) sont des entiers 0‑100 appréciés subjectivement par le modèle. \
Dictionnaire des champs : \
(Pour clarifier le sens de chaque clé et le format attendu ; ces notes NE doivent PAS être reproduites dans la sortie JSON) \
Clé / Signification /Format attendu \
first_due_date / Date de la première échéance du prêt ISO 8601 compliant / YYYY-MM-DD ou null \
initial_amount_borrowed / Montant initial emprunté / nombre entier sans séparateur ; ex 250000 \
interest_rate /Taux nominal du prêt / nombre décimal, séparateur « . » ; ex 1.65 \
initial_duration / Durée totale du prêt en mois / entier ; ex 240 \
deferred_repayment / Durée de différé d'amortissement en mois, sinon Pas de paiement différé mettre false / entier ou 'false'\
explanation / Résumé human‑friendly (infos clés, vigilance, pertinence) / ≤ 800 caractères \
insured1_name / insured2_name \
Nom complet de l'assuré / chaîne ou null \
insured*_death_PTIA /Quotité assurée Décès / PTIA /nombre entier % (sans %) \
insured*_ITT_IPT / Quotité ITT/IPT (Incapacité Temp./Perm. Totale) / entier % \
insured*_IPP / Quotité IPP (Invalidité Permanente Partielle) /entier % \
insured*_IPPro / Quotité IPPro (Invalidité Professionnelle) /entier % ou null \
accuracy_pct / Degré de confiance estimé par le modèle / entier 0‑100",
	
	modifications: [], // Save extracted data given by AI before applying them
	
	new_datas: {}, // Contain all IA results, used only for displaying
	
	set_new_data_value(entry, value) {
		this.new_datas[entry] = value;
	},
	
	setModificationValue(
		field, 
		value, 
		new_datas_entry
	) {
		this.set_new_data_value(new_datas_entry, value);
		if (!value)
			return;
		this.modifications.push({
			"field": field,
			"value": value,
			"new_datas_entry": new_datas_entry
		});
	},
	
	/*
	 * Format the JSON response to a valid JSON
	 * The JSON should be valid, but sometime the API return json with this format : json```{<the_json>}``` or ```json{<the_json>}```
	 * That is not parsable by JSON.parse() function
	*/
	getFormatedJsonString(json) {
		json = json.trim();
		if (json.startsWith("json```") || json.startsWith("```json")) {
			json = json.substring(7);
		}
		if (json.endsWith("```")) {
        json = json.slice(0, -3);
    }
		json = json.trim(); 
		console.log("formated JSON -> ", json);
		return json;
	},
	
	async runAutoCompletion() {
		this.hasResult = false;
		if (getDocuments.data.data.previousContract.length <= 0) {
			showAlert("No document to extract");
		}
		
		this.document_keys = getDocuments.data.data.previousContract.map((data) => {
			return data["documentKey"]
		});
		
		await extractDataFromDocument.run();
		
		try {
			console.log("IA data -> ", extractDataFromDocument.data.data.extractDataFromS3Files.data);
			const result = JSON.parse(
				this.getFormatedJsonString(
					extractDataFromDocument.data.data.extractDataFromS3Files.data
				)
			);
			this.modifications = [];
			this.results = {};
			
			const fields = [
				{ key: null, path: "explanation", entry: "resume" },
				
				{ key: first_due_date_1, path: "first_due_date.value", entry: "first_due_date" },
				{ key: null, path: "first_due_date.accuracy", entry: "first_due_date_accuracy" },
				{ key: capital_emprunte, path: "initial_amount_borrowed.value", entry: "initial_amount_borrowed" },
				{ key: null, path: "initial_amount_borrowed.accuracy", entry: "initial_amount_borrowed_accuracy" },
				{ key: taux_d_interet, path: "interest_rate.value", entry: "interest_rate" },
				{ key: null, path: "interest_rate.accuracy", entry: "interest_rate_accuracy" },
				{ key: duree_pret, path: "initial_duration.value", entry: "initial_duration" },
				{ key: null, path: "initial_duration.accuracy", entry: "initial_duration_accuracy" },
				
				{ key: duree_differe, path: "deferred_repayment.value", entry: "deferred_repayment" },
				{ key: null, path: "deferred_repayment.accuracy", entry: "deferred_repayment_accuracy" },
							
				{ key: holder_dc_ptia_loan_1, path: "options.insured1_death_PTIA.value", entry: "insured1_death_PTIA" },
				{ key: null, path: "options.insured1_death_PTIA.accuracy", entry: "insured1_death_PTIA_accuracy" },
				{ key: holder_itt_ipt_loan_1, path: "options.insured1_ITT_IPT.value", entry: "insured1_ITT_IPT" },
				{ key: null, path: "options.insured1_ITT_IPT.accuracy", entry: "insured1_ITT_IPT_accuracy" },
				{ key: holder_ipp_loan_1, path: "options.insured1_IPP.value", entry: "insured1_IPP" },
				{ key: null, path: "options.insured1_IPP.accuracy", entry: "insured1_IPP_accuracy" },
				{ key: holder_ipPro_loan_1, path: "options.insured1_IPPro.value", entry: "insured1_IPPro" },
				{ key: null, path: "options.insured1_IPPro.accuracy", entry: "insured1_IPPro_accuracy" },
				{ key: holder_dc_ptia_loan_2, path: "options.insured2_death_PTIA.value", entry: "insured2_death_PTIA" },
				{ key: null, path: "options.insured2_death_PTIA.accuracy", entry: "insured2_death_PTIA_accuracy" },
				{ key: holder_itt_ipt_loan_2, path: "options.insured2_ITT_IPT.value", entry: "insured2_ITT_IPT" },
				{ key: null, path: "options.insured2_ITT_IPT.accuracy", entry: "insured2_ITT_IPT_accuracy" },
				{ key: holder_ipp_loan_2, path: "options.insured2_IPP.value", entry: "insured2_IPP" },
				{ key: null, path: "options.insured2_IPP.accuracy", entry: "insured2_IPP_accuracy" },
				{ key: holder_ipPro_loan_2, path: "options.insured2_IPPro.value", entry: "insured2_IPPro" },
				{ key: null, path: "options.insured2_IPPro.accuracy", entry: "insured2_IPPro_accuracy" }
			];
			
			const getNestedValue = (obj, path) => {
  			const value = path.split('.').reduce((acc, part) => acc && acc[part], obj);
  			return value === undefined ? null : value;
			}

			fields.forEach(({ key, path, entry }) => {
				const value = getNestedValue(result, path);
				this.setModificationValue(key, value, entry);
			});
			
			this.hasResult = true;
			showModal(IAModificationModal.name);
		} catch(e) {
			showAlert("Could'nt parse IA response");
			console.error(e);
			return;
		}
	},
	
	async setRealFieldValuesAndOpenLoanModal() {
		this.modifications.forEach((entry) => {
			if (entry.field == null)
				return;
			if (entry.new_datas_entry == "deferred_repayment") {
				if (entry.value && !isNaN(Number(entry.value))) {
					checkbox_differe_un.setValue(true);
					entry.field.setValue(entry.value);
				} else {
					checkbox_differe_un.setValue(false);
					entry.field.setValue(0);
				}
				return;
			}
			entry.field.setValue(entry.value)
		});
		showModal(modale_loan.name);
	}
}