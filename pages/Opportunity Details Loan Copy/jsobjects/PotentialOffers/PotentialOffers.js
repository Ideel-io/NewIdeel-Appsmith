export default {
	estimationPartners: [
		...(ugipPartnerCheckBox.isChecked ? ["ugip"] : []),
		...(utwinPartnerCheckBox.isChecked ? ["utwin"] : []),
	],
	isJobDetailChoiceEnabled (job_selector) {
		const detailedJobs = [
			Constants.specificOccupation.FONCTIONNAIRE_DE_CATEGORIE_A_HORS_ENSEIGNEMENT,
			Constants.specificOccupation.FONCTIONNAIRE_DE_CATEGORIE_B_HORS_ENSEIGNEMENT,
			Constants.specificOccupation.FONCTIONNAIRE_DE_CATEGORIE_C_HORS_ENSEIGNEMENT,
			Constants.specificOccupation.SALARIE_NON_CADRE_HORS_EMPLOYE_BUREAU_PERSONNEL_NAVIGANT,
			Constants.specificOccupation.PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL,		Constants.specificOccupation.PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_MEDECIN_OU_INTERNE_GENERALISTE_SPECIALISTE,
		];
		return detailedJobs.includes(job_selector.selectedOptionLabel);
	},
	prepareBorrowerData (args = { isCoBorrower: false }) {
		const { isCoBorrower } = args;
		const userEmail = getProcedureById.data.data?.getProcedureById.user.email;
		const userPhoneNumber = getProcedureById.data.data?.getProcedureById.user.phoneNumber;
		const firstBorrowerJob = holder_job_detail.selectedOptionValue || holder_specific_job.selectedOptionValue;
		const secondBorrowerJob = second_holder_job_detail.selectedOptionValue || second_holder_specific_job.selectedOptionValue;

		const borrowerData = {
			isCoBorrower,
			"civilType": isCoBorrower ? civilTitle2.selectedOptionValue : civilTitle1.selectedOptionValue,
			"postalCode": holder_postal_code.text,
			"birthDate": isCoBorrower ? second_holder_birthdate.text : holder_birthdate.text,
			"lastname": isCoBorrower ? second_holder_last_name.text : holder_last_name.text,
			"firstname": isCoBorrower ? second_holder_first_name.text : holder_first_name.text,
			"email": userEmail, // TODO: Add input in form ?
			"phoneNumber": userPhoneNumber, // TODO: Add input in form ?
			"address": {
				"city": holder_city.text,
				"country": Constants.defaultLoanUserCountry,
				"streetName": holder_route.text,
				"streetNumber": holder_street_number.text,
			},
			"job": isCoBorrower ? secondBorrowerJob : firstBorrowerJob,
			"isExpatriate": Constants.defaultLoanUserIsExpatriate,
			"workPlaceHigherThan3m": isCoBorrower ? second_holder_works_higher_3m.isChecked : holder_works_higher_3m.isChecked,
			"isSmokerMoreThan2years": isCoBorrower ? second_holder_is_smoker.isChecked : holder_is_smoker.isChecked,
			"workRequiresFineTools": Constants.defaultLoanWorkRequiresFineTools,
			"workPhysicallyDemanding": isCoBorrower ? second_holder_work_is_physical.isChecked : holder_work_is_physical.isChecked,
			"workTravelsMoreThan20": isCoBorrower ? second_holder_travels_more_20.isChecked : holder_travels_more_20.isChecked,
			"travelsToForeignCountry": Constants.defaultLoanTravelsToForeignCountry,
			"travelsToRiskyCountry": Constants.defaultLoanTravelsToRiskyCountry,
			"taxResidenceCountry": Constants.defaultLoanUserCountry
		}
		return borrowerData;
	},
	prepareLoanData: (args = { forSecondLoan: false }) => {
		const { forSecondLoan } = args;
		const firstLoanDeferralInMonths = checkbox_differe_un.isChecked ? duree_differe.text : 0;
		const secondLoanDeferralInMonths = checkbox_differe_deux.isChecked ? duree_differe_2.text : 0;
		const firstLoanDeferralType = checkbox_differe_un.isChecked ? {deferralType: type_differe.selectedOptionValue} : {};
		const secondLoanDeferralType = checkbox_differe_deux.isChecked ? {deferralType : type_differe_2.selectedOptionValue} : {};

		const loanData = {
			"loanNumber": forSecondLoan ? 2 : 1,
			"loanRatio": forSecondLoan ? taux_d_interet_2.text : taux_d_interet.text,
			"loanRatioType": Constants.defaultLoanRatioType,
			"effectiveDate": effective_date_1.formattedDate,
			"firstDueDate": forSecondLoan ? first_due_date_2.formattedDate : first_due_date_1.formattedDate,
			"signatureDate": forSecondLoan ? signature_date_2.formattedDate : signature_date_1.formattedDate,
			"durationInMonths": forSecondLoan ? duree_pret_2.text : duree_pret.text,
			"deferralInMonths": forSecondLoan ? secondLoanDeferralInMonths : firstLoanDeferralInMonths,
			"loanTotalAmount": forSecondLoan ? capital_emprunte_2.value : capital_emprunte.value,
			"loanRemainingAmount": forSecondLoan ? capital_restant_du_2.text : capital_restant_du_1.text,
			"remainingDurationInMonths": forSecondLoan ? duree_restante_pret_2.text : duree_restante_pret.text,
			"loanType": forSecondLoan ? loan_type_2.selectedOptionValue :loan_type.selectedOptionValue,
			"isProfessionalLoan": Constants.defaultLoanIsProfessional,
			...( forSecondLoan ? secondLoanDeferralType : firstLoanDeferralType ),
		};
		return loanData;
	},
	prepareLoanOptionData: (args = { forSecondLoan: false, forCoBorrower: false }) => {
		const { forSecondLoan, forCoBorrower } = args;
		const quotaDcPtiaHolder = forSecondLoan ? holder_dc_ptia_loan_2.text : holder_dc_ptia_loan_1.text;
		const quotaDcPtiaSecondHolder = forSecondLoan ? second_holder_dc_ptia_loan_2.text : second_holder_dc_ptia_loan_1.text;
		const quotaIppHolder = forSecondLoan ? holder_ipp_loan_2.text : holder_ipp_loan_1.text;
		const quotaIppSecondHolder = forSecondLoan ? second_holder_ipp_loan_2.text : second_holder_ipp_loan_1.text;
		const quotaIttIptHolder = forSecondLoan ? holder_itt_ipt_loan_2.text : holder_itt_ipt_loan_1.text;
		const quotaIttIptSecondHolder = forSecondLoan ? second_holder_itt_ipt_loan_2.text : second_holder_itt_ipt_loan_1.text;
		const quotaIppProHolder = forSecondLoan ? holder_ipPro_loan_2.text : holder_ipPro_loan_1.text;
		const quotaIppProSecondHolder = forSecondLoan ? second_holder_ipPro_loan_2.text : second_holder_ipPro_loan_1.text;

		const loanOptionData = {
			forCoBorrower,
			"loanNumber": forSecondLoan ? 2 : 1,
			"quotaDcPtia": forCoBorrower ? quotaDcPtiaSecondHolder : quotaDcPtiaHolder,
			"quotaIpp": forCoBorrower ? quotaIppSecondHolder : quotaIppHolder,
			"quotaIppPro": forCoBorrower ? quotaIppProSecondHolder: quotaIppProHolder,
			"quotaIttIpt": forCoBorrower ? quotaIttIptSecondHolder : quotaIttIptHolder,
			"franchiseItt": Constants.defaultLoanFranchiseITT,
			"backPain": Constants.defaultLoanHospitalizationOption,
			"psychoTherapy": Constants.defaultLoanHospitalizationOption,
			"partTimeTherapeutic": Constants.defaultLoanPartTimeTherapeutic,
		};
		return loanOptionData;
	},
	prepareLoanInput () {
		const requestIds = {
			userId: getProcedureById.data.data?.getProcedureById.user.id,
			procedureId: getProcedureById.data.data?.getProcedureById.id,
			recurrentSubscriptionId: getProcedureById.data.data?.getProcedureById.recurrentSubscriptionId,
		};
		const loanData = {
			...requestIds,
			"loanProjectType": loanProjectTypeSelector.selectedOptionValue,
			"loanResumptionType": type_de_reprise.selectedOptionValue,
			"loanPeriodicity": Constants.defaultLoanPeriodicity,
			"firstBorrower": this.prepareBorrowerData(),
			"loans": [
				this.prepareLoanData(),
				...(second_loan.isSwitchedOn ? [this.prepareLoanData({ forSecondLoan: true })] : []),
			],
			"loanOptions": [
				this.prepareLoanOptionData(),
				...(second_loan.isSwitchedOn ? [this.prepareLoanOptionData({ forSecondLoan: true, forCoBorrower: false })] : []),
				...(deuxieme_assure.isSwitchedOn ? [this.prepareLoanOptionData({ forSecondLoan: false, forCoBorrower: true })] : []),
				...(second_loan.isSwitchedOn && deuxieme_assure.isSwitchedOn ? [this.prepareLoanOptionData({ forCoBorrower: true, forSecondLoan: true })] : []),
			],
			...(deuxieme_assure.isSwitchedOn ? {"secondBorrower": this.prepareBorrowerData({ isCoBorrower: true })} : {}),
		};
		console.log(JSON.stringify(loanData))
		return JSON.stringify(loanData);
	},
	openEstimationResult: (link, partner) => {
		if (!link) 
			return showAlert('Aucun lien ni numéro de devis fourni !', 'error');

		if (partner === "utwin")
			copyToClipboard(link, {debug: false, format: "text/plain"}).then(() => { 
				showAlert('Lien de devis copié !', 'success');
			});

		return navigateTo(link, {}, 'NEW_WINDOW');
	},
	autoRefreshApiResults: () => {
		const intervalId = "apiResultRefreshId";
		const refreshRate = 5 * 1000; //in milliseconds

		if (!AutoRefreshApiResultSwitch.isSwitchedOn) 
			return clearInterval(intervalId);

		if (AutoRefreshApiResultSwitch.isSwitchedOn) 
			return setInterval(async () => {
				showAlert("Résultats actualisés");
				await getPotentialOffersOfLastRun.run();
				await resetWidget("resultatsApi");	

				if (getPotentialOffersOfLastRun.data.data?.getPotentialOffersOfLastRun.length === this.estimationPartners.length) {
					AutoRefreshApiResultSwitch.setValue(false);
					clearInterval(intervalId);
				};
			}, refreshRate ,intervalId);
	},
	calculerDureeRestante: (args = { forSecondLoan : false }) => {
		const { forSecondLoan } = args;
		const loanDurationInMonths = forSecondLoan ? duree_pret_2.text : duree_pret.text;
		const firstDueDate = new Date(forSecondLoan ? first_due_date_2.selectedDate : first_due_date_1.selectedDate);
		const effectiveDate = new Date(effective_date_1.selectedDate);
		const spentDurationInMonths = dayjs(effectiveDate).diff(dayjs(firstDueDate), 'month');
		const remainingDurationInMonths = loanDurationInMonths - spentDurationInMonths;
		return remainingDurationInMonths;
	},
	calculerCapitalRestantDu: (args = { forSecondLoan: false }) => {
		// Note: Slightly adapted from ChatGPT suggestion
		const { forSecondLoan } = args;
		const montantEmprunte = forSecondLoan ? capital_emprunte_2.value : capital_emprunte.value;
		const tauxAnnuel = forSecondLoan ? taux_d_interet_2.text : taux_d_interet.text;
		const dureeMois = forSecondLoan ? duree_pret_2.text : duree_pret.text;
		const dureeDiffere1 = checkbox_differe_un.isChecked ? duree_differe.text : 0;
		const dureeDiffere2 = checkbox_differe_deux.isChecked ? duree_differe_2.text : 0;
		const dureeDiffereMois = forSecondLoan ? dureeDiffere2 : dureeDiffere1;
		const datePremiereEcheance = forSecondLoan ? first_due_date_2.formattedDate : first_due_date_1.formattedDate;
		const dateReprise = effective_date_1.formattedDate;

		// Conversion du taux annuel en taux mensuel
		let tauxMensuel = (tauxAnnuel / 100) / 12;

		// Extraction des valeurs de jour, mois et année
		let [jourDebut, moisDebut, anneeDebut] = datePremiereEcheance.split("/").map(Number);
		let [jourCalcul, moisCalcul, anneeCalcul] = dateReprise.split("/").map(Number);

		// Création des objets Date
		let dateDebut = new Date(anneeDebut, moisDebut - 1, jourDebut);
		let dateActuelle = new Date(anneeCalcul, moisCalcul - 1, jourCalcul);

		// Calcul de la durée du différé en mois et du nombre de mensualités payées
		let mensualitesPayees = 0;

		// Si la date actuelle est après la fin du différé, on compte les mensualités écoulées
		if (dateActuelle > new Date(dateDebut.getFullYear(), dateDebut.getMonth() + dureeDiffereMois, dateDebut.getDate())) {
			mensualitesPayees = (dateActuelle.getFullYear() - dateDebut.getFullYear()) * 12 + (dateActuelle.getMonth() - dateDebut.getMonth()) - dureeDiffereMois;
			if (mensualitesPayees < 0) mensualitesPayees = 0;
		}

		// Capitalisation des intérêts pendant le différé
		let capitalApresDiffere = montantEmprunte * Math.pow(1 + tauxMensuel, dureeDiffereMois);

		// Si des mensualités ont été payées après le différé, calculer le capital restant dû
		if (mensualitesPayees > 0) {
			// Calcul de la mensualité classique
			let mensualite = (capitalApresDiffere * tauxMensuel) / (1 - Math.pow(1 + tauxMensuel, -dureeMois + dureeDiffereMois));

			// Calcul du capital restant dû après mensualités payées
			let CRD = capitalApresDiffere * Math.pow(1 + tauxMensuel, mensualitesPayees) - 
					(mensualite * (Math.pow(1 + tauxMensuel, mensualitesPayees) - 1)) / tauxMensuel;
			return Math.ceil(CRD);
		} else {
			// Retourne simplement le capital après différé si aucune mensualité n'a été payée
			return Math.ceil(capitalApresDiffere);
		}
	},
	async newRun () {
		try {
			const requestData = this.prepareLoanInput();

			await searchLoanPotentialOffers.run({
				requestData,
			});

			if (searchLoanPotentialOffers.data.errors)
				throw new Error(searchLoanPotentialOffers.data.errors[0].message);

			//AutoRefreshApiResultSwitch.setValue(true);
			//this.autoRefreshApiResults();
			showAlert('Fait !', 'success');
			closeModal(modale_loan.name);
		} catch(error) {
			showAlert(`Erreur lors de la tarification ! (${error.message})`, 'error');
		}
	},
	async run () {
		try {
			const requestData = this.prepareLoanInput();

			await searchPotentialOffersAgain.run({
				requestData,
				"targetPartnerLabels": this.estimationPartners,
				"currentPartnerLabel": getProcedureById.data?.data.getProcedureById.recurrentSubscription.partner.label,
				"subcategoryLabel": getProcedureById.data?.data.getProcedureById.recurrentSubscription.subCategory.label,
			});

			if (searchPotentialOffersAgain.data.errors)
				throw new Error(searchPotentialOffersAgain.data.errors[0].message);

			AutoRefreshApiResultSwitch.setValue(true);
			this.autoRefreshApiResults();
			showAlert('Fait !', 'success');
			closeModal(modale_loan.name);
		} catch(error) {
			showAlert(`Erreur lors de la tarification ! (${error.message})`, 'error');
		}
	}
}