export default {
	occupationType: {
		'employee': 'Salarié(e)',
		'executive': 'Salarié(e) cadre',
		'farmer': 'Salarié(e) exploitant agricole',
		'entrepreneur': "Chef d'entreprise",
		'selfEmployed': 'Travailleur/Travailleuse non salarié(e)',
		'unemployed': 'Sans profession',
		'functionary': 'Fonctionnaire',
		'student': 'Étudiant(e)',
		'retired': 'Retraité(e)',
		'other': 'Autre',
	},
	occupationToRegimen: {
		functionary: "Régime Général",
		employee: "Régime Général",
		student: "Régime Général",
		farmer: "Regime Agricole",
		retired: "Retraité",
		selfEmployed: "TNS",
		entrepreneur: "TNS",
		unemployed: "Régime Général",
		executive: "Régime Général",
		other: "Régime Général",
	},
	familyTies: {
		child: 'child',
		conjoint: 'conjoint',
		parent: 'parent',
		spouse: 'spouse',
		other: 'other',
		myself: 'myself',
	},
	insuranceCoverage: {
		moi: 'Moi',
		moi_et_mon_conjoint: 'Moi et mon conjoint',
		moi_et_mes_enfants: 'Moi et mes enfants',
		moi_mon_conjoint_mes_enfants: 'Moi, mon conjoint et mes enfants'
	},
	userData: {
		age: userAgeInput.text,
		postalCode: userPostalCodeInput.text,
		occupation: userOccupationSelect.selectedOptionValue,
		insuranceCoverage: userInsuranceCoverage.selectedOptionValue,
		partnerAge: userPartnerAgeInput.text,
		childrenAges: [
			userFirstChildAge.text,
			userSecondChildAge.text,
			userThirdChildAge.text,
			userFourthChildAge.text,
			userFifthChildAge.text,
			userSixthChildAge.text,
			userSeventhChildAge.text
		].filter((age) => age),
	},
	isPartnerAgeInputRequired: [
		this.insuranceCoverage.moi_et_mon_conjoint, 
		this.insuranceCoverage.moi_mon_conjoint_mes_enfants
	].includes(userInsuranceCoverage.selectedOptionLabel),
	isChildrenAgeInputRequired: [
		this.insuranceCoverage.moi_et_mes_enfants, 
		this.insuranceCoverage.moi_mon_conjoint_mes_enfants
	].includes(userInsuranceCoverage.selectedOptionLabel),
	isFormValid: () => {
		const fields = [
			userAgeInput,
			userPostalCodeInput,
			userOccupationSelect,
			userInsuranceCoverage,
			...(this.isPartnerAgeInputRequired ? [userPartnerAgeInput] : []),
			...(this.isChildrenAgeInputRequired ? [userFirstChildAge] : []),
			...(this.isChildrenAgeInputRequired ? [userSecondChildAge] : []),
			...(this.isChildrenAgeInputRequired ? [userThirdChildAge] : []),
			...(this.isChildrenAgeInputRequired ? [userFourthChildAge] : []),
			...(this.isChildrenAgeInputRequired ? [userFifthChildAge] : []),
			...(this.isChildrenAgeInputRequired ? [userSixthChildAge] : []),
			...(this.isChildrenAgeInputRequired ? [userSeventhChildAge] : []),
		];
		return fields.every(field => field.isValid);
	},
	occupationOptions: Object.entries(this.occupationType).map(
		([value, name]) => ({name, value})
	),
	insuranceCoverageOptions: Object.entries(this.insuranceCoverage).map(
		([value, name]) => ({name, value})
	),
	getInsuranceCoverageFromProcedure: () => {
		const coverageQuestion = getProcedureDetails.data.data?.getProcedureDetails.questionList?.filter(
			(question) => question.questionId === "330"
		)[0];
		if (!coverageQuestion) return null;
		return coverageQuestion.pickedAnswer;
	},
	getAgeFromBirthdate: (birthdate) => {
		if (!birthdate) return undefined;
		return Math.floor(
			(new Date().getTime() - new Date(birthdate).getTime()) / 3.15576e10,
		);
	},
	getUserFamilyMembers: () => {
		const members = { partner: null, children: []};
		const familyMembers = getProcedureDetails.data.data?.getProcedureDetails.familyMemberList ?? [];

		familyMembers.forEach((familyMember) => {
			const member = {
				age: this.getAgeFromBirthdate(familyMember.birthdate)
			};

			if (familyMember.familyTiesWithUser === this.familyTies.child) 
				members.children.push(member);

			if ([this.familyTies.spouse, this.familyTies.conjoint].includes(familyMember.familyTiesWithUser)) 
				members.partner = member;
		});
		return members;
	},
	getHealthRegimen: () => {
		const alsaceMoselleDepartments = [57, 67, 68];
		const userDepartment = parseInt(GetUserHealthZone.data[0]['Code département']);

		if (alsaceMoselleDepartments.includes(userDepartment)) 
			return "Régime Alsace Moselle";

		return this.occupationToRegimen[this.userData.occupation]
	},
	getZoneCellRangeFromPostalCode: () => {
		const cellIndex = parseInt(this.userData.postalCode.slice(0, 2)) + 1;
		return `A${cellIndex}:F${cellIndex}`
	}, 
	getAgeOrLimitAge: (age) => {
		if (age <= 18) return "<=18";
		if (age > 99) return ">99";
		return `${age}`;
	},
	getUserAndRelativesAges: () => {
		const ages = [
			this.userData.age,
			...(this.isPartnerAgeInputRequired && userPartnerAgeInput.isValid ? [this.userData.partnerAge] : []),
			...(this.isChildrenAgeInputRequired && userFirstChildAge.isValid ? [this.userData.childrenAges[0]] : []),
			...(this.isChildrenAgeInputRequired && userSecondChildAge.text && userSecondChildAge.isValid ? [this.userData.childrenAges[1]] : []),
			...(this.isChildrenAgeInputRequired && userThirdChildAge.text && userThirdChildAge.isValid ? [this.userData.childrenAges[2]] : []),
			...(this.isChildrenAgeInputRequired && userFourthChildAge.text && userFourthChildAge.isValid ? [this.userData.childrenAges[3]] : []),
			...(this.isChildrenAgeInputRequired && userFifthChildAge.text && userFifthChildAge.isValid ? [this.userData.childrenAges[4]] : []),
			...(this.isChildrenAgeInputRequired && userSixthChildAge.text && userSixthChildAge.isValid ? [this.userData.childrenAges[5]] : []),
			...(this.isChildrenAgeInputRequired &&userSeventhChildAge.text && userSeventhChildAge.isValid ? [this.userData.childrenAges[6]] : []),
		];
		return ages.map((age) => this.getAgeOrLimitAge(age))
	},
	getDiscounts: () => {
		const discounts = {global: null, individual: {}};
		Discounts.data.forEach((insurerDiscounts) => {
			switch(insurerDiscounts.Situation) {
				case this.insuranceCoverage[this.userData.insuranceCoverage]: 
					discounts.global = insurerDiscounts;
					return;
				case "Adhérent":
					discounts.individual.user = insurerDiscounts;
					return;
				case "Conjoint":
					discounts.individual.partner = insurerDiscounts;
					return;
				case "Enfant 1":
					discounts.individual.child1 = insurerDiscounts;
					return;
				case "Enfant 2":
					discounts.individual.child2 = insurerDiscounts;
					return;
				case "Enfant 3":
					discounts.individual.child3 = insurerDiscounts;
					return;
				case "Enfant 4":
					discounts.individual.child4 = insurerDiscounts;
					return;
				case "Enfant 5":
					discounts.individual.child5 = insurerDiscounts;
					return;
				case "Enfant 6":
					discounts.individual.child6 = insurerDiscounts;
					return;
				case "Enfant 7":
					discounts.individual.child7 = insurerDiscounts;
					return;
				default:
					return;
			}
		});
		return discounts;
	},
	getOfferLabel: (offer) => `${offer.Assureur} ${offer.Régime} ${offer.Formule}`,
	getOfferDetailsLabel: (offer) => `${offer.Assureur} ${offer.Formule} ${offer.Niveau}`,
	getOffersDetails: () => {
		const labeledOfferDetails = {};
		HealthOffersDetails.data.forEach((offer) => {
			const label = this.getOfferDetailsLabel(offer);
			labeledOfferDetails[label] = offer;
		});
		return labeledOfferDetails;
	},
	formatOfferPrice: (price) => {
		if (typeof(price) === 'number') return Math.round(price);

		const priceCommaToDot = price.replace(',', '.');
		const priceWithoutCurrency = priceCommaToDot.replace('€', '');
		const trimmedPrice = priceWithoutCurrency.trim();
		return Math.round(parseFloat(trimmedPrice));
	},
	formatInsuranceOffers: (offers) => {
		const formattedOffers = [];
		const offersDetails = this.getOffersDetails();

		offers.forEach((offer) => {
			for(let i=1; i<=9 ; i++) {
				const niveau = `NIVEAU ${i}`;
				if (!offer[niveau]) break;

				const offerDetailsLabel = this.getOfferDetailsLabel({
					...offer,
					Niveau: `Niveau ${i}`,
				});

				formattedOffers.push({
					...offersDetails[offerDetailsLabel],
					Tarif: this.formatOfferPrice(offer[niveau]),
				});
			};
		});
		return formattedOffers;
	},
	getHealthInsuranceOffers: () => {
		const offers = {
			partner: {},
			user: [],
		};
		const zonesByInsurers = GetUserHealthZone.data[0];

		AllInsurers.data.forEach(
			(offer) => {
				if (offer.ZONE !== zonesByInsurers[`ZONE ${offer.Assureur.toUpperCase()}`]) return;

				const offerLabel = this.getOfferLabel(offer);

				if (offer.AGE === this.getAgeOrLimitAge(this.userData.age)) 
					offers.user.push(offer);

				if (this.isPartnerAgeInputRequired && offer.AGE === this.getAgeOrLimitAge(this.userData.partnerAge)) 
					offers.partner[offerLabel] = offer;

				if (this.isChildrenAgeInputRequired) {
					this.userData.childrenAges.forEach((childAge, index) => {
						if (offer.AGE === this.getAgeOrLimitAge(childAge)) {
							const childId = `child${index+1}`;
							offers[childId] = {
								...offers[childId],
								[offerLabel]: offer,
							};
						};
					})
				};
			}
		);

		if (this.isPartnerAgeInputRequired || this.isChildrenAgeInputRequired) {
			const combinedOffers = this.computeCombinedOffers(offers);
			return this.formatInsuranceOffers(combinedOffers);
		};
		return this.formatInsuranceOffers(offers.user);
	},
	computeCombinedOffers: (offers) => {
		const combinedOffers = [];
		const discountRates = this.getDiscounts();

		offers.user.forEach((offer) => {
			const combinedNiveaux = {};
			const offerLabel = this.getOfferLabel(offer);

			for (let i=1; i<=9 ; i++) {
				const niveau = `NIVEAU ${i}`;
				if (!offer[niveau]) break;

				const userNiveauPrice = this.formatOfferPrice(offer[niveau]);
				const partnerNiveauPrice = offers.partner && offers.partner[offerLabel] ? this.formatOfferPrice(offers.partner[offerLabel][niveau]) : 0;
				const userDiscountedPrice = userNiveauPrice * discountRates.individual.user[offer.Assureur];
				const partnerDiscountedPrice = partnerNiveauPrice * discountRates.individual.partner[offer.Assureur];
				let childrenDiscountedSum = 0;

				for (let i=1; i<=7 ; i++) {
					const childId = `child${i}`;
					if (!offers[childId]) break;

					const childNiveauPrice = this.formatOfferPrice(offers[childId][offerLabel][niveau]);
					const childDiscountedPrice = childNiveauPrice * discountRates.individual[childId][offer.Assureur];
					childrenDiscountedSum += childDiscountedPrice;
				}
				const individualsDiscountedSum = userDiscountedPrice + partnerDiscountedPrice + childrenDiscountedSum;
				const finalPrice = individualsDiscountedSum * discountRates.global[offer.Assureur];

				combinedNiveaux[niveau] = finalPrice.toFixed(2);
			};
			combinedOffers.push({
				"Assureur": offer.Assureur,
				"Formule": offer.Formule,
				"Régime": offer.Régime,
				"ZONE": offer.ZONE,
				...combinedNiveaux,
			});
		});
		return combinedOffers;
	},
	run: async () => {
		await Discounts.run();
		await HealthOffersDetails.run();
		await GetUserHealthZone.run({
			zonesCellRange: this.getZoneCellRangeFromPostalCode()
		});
		await AllInsurers.run({
			healthRegimen: this.getHealthRegimen(),
			agesList: this.getUserAndRelativesAges(),
		});

		this.getHealthInsuranceOffers();
		closeModal(SimulatorUserDataModal.name);
	}
}