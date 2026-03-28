export default {
	selectedTarification: "NA",
	searchForCitiesLoading: false,
	showCitySelection: false,
	ProcedureEndState: {
		SUCCESS: 'SUCCESS',
		FAILURE: 'FAILURE',
		CANCELLATION: 'CANCELLATION',
	},
	ratio: {
		"WEEKLY": 4,
		"MONTHLY": 1,
		"BI_MONTHLY": 0.5,
		"QUARTERLY": 0.3,
		"YEARLY": 0.083,
	},
	occupationTypeMap: {
		'employee': 'Salarié(e)',
		'executive': 'Salarié(e) cadre',
		'farmer': 'Salarié(e) exploitant agrricole',
		'entrepreneur': 'Chef d entreprise',
		'selfEmployed': 'Travailleur/Travailleuse non salariée',
		'unemployed': 'sans profession',
		'functionary': 'fonctionnaire',
		'student': 'Étudiant(e)',
		'retired': 'retraité(e)',
		'other': 'autres',
	},
	maritalStatusMap: {
		'single': 'célibataire',
		'married': 'marié(e)',
		'divorced': 'divorcé(e)',
		'couple': 'concubin(e)',
		'widow': 'veuf(ve)',
		'pacs': 'pacsé(e)',
	},
	canCancelProcedure: () => {
		if (!getProcedureById.data.data) return false;
		const procedure = getProcedureById.data.data.getProcedureById
		const isAlreadyCompleted = [this.ProcedureEndState.FAILURE, this.ProcedureEndState.CANCELLATION].includes(procedure.endState)

		return !(procedure.currentStepId === 5 || isAlreadyCompleted)
	},
	cancelProcedure: async () => {
		await cancelProcedureByStaff.run();
		closeModal(Modal3.name);
		await getProcedureById.run();
	},
	stylePrice (price) {
		return (price / 100).toFixed(2) + "€";
	},
	stylePercentage (percentage) {
		return (percentage * 100).toFixed(1) + "%";
	},
	getDisplayFor (label, mode, partner) {
		if (!partner) {
			return "NA";
		}

		const queryMap = {
			elec: GetPartnerPrice,
			gaz: GetGazPrice,
		};

		const query = queryMap[mode];

		const partnerPrice = query?.data?.find((item) => item.partenaire === partner)?.[label];

		if (!partnerPrice) {
			return "NA";
		}

		return this.stylePrice(partnerPrice);
	},
	calculateDifference (label, mode, oldPartner, newPartner) {
		if (!oldPartner || !newPartner) {
			return { price: "NA", color: "#000000", percentage: "NA" };
		}

		const queryMap = {
			elec: GetPartnerPrice,
			gaz: GetGazPrice,
		};

		const query = queryMap[mode];

		const oldPartnerPrice = query?.data?.find((item) => item.partenaire === oldPartner)?.[label];
		const newPartnerPrice = query?.data?.find((item) => item.partenaire === newPartner)?.[label];

		if (!oldPartnerPrice || !newPartnerPrice) {
			return { price: "NA", color: "#000000", percentage: "NA" };
		}

		const difference = newPartnerPrice - oldPartnerPrice;
		const percentage = difference / oldPartnerPrice;
		const sign = difference > 0 ? "+" : "";
		const color = difference > 0 ? "#CA3A2A" : difference < 0 ? "#3B816C" : "#000000";
		return { price: sign + this.stylePrice(difference), color, percentage: sign + this.stylePercentage(percentage) };
	},
	hasElectricity (category) {
		if (!category) return false;
		if (["electricite", "electricite_et_gaz"].includes(category)) return true;
		return false;
	},
	hasGaz (category) {
		if (!category) return false;
		if (["gaz", "electricite_et_gaz"].includes(category)) return true;
		return false;
	},
	async runComparator () {
		try {
			if (this.hasElectricity(getProcedureById.data.data.getProcedureById.category)) {
				await GetPartnerPrice.run();
			}
			if (this.hasGaz(getProcedureById.data.data.getProcedureById.category)) {
				await GetGazPrice.run();
			}
			this.selectedTarification = Tarification_select.selectedOptionValue;
			return showAlert("Done !", "success");
		} catch(error) {
			return showAlert(error.message, "error");
		}
	},
	async searchForCities () {
		try {
			this.searchForCitiesLoading = true;
			await GetAddressZone.run();
			if (!GetAddressZone?.data?.length) {
				this.showCitySelection = false;
				return showAlert("Code postal inexistant ! Veuillez vérifier", "warning");
			}
			this.showCitySelection = true;
			return showAlert("Code postal valide !", "success");
		} catch(error) {
			this.showCitySelection = false;
			return showAlert(error.message, "error");
		} finally {
			this.searchForCitiesLoading = false;
		}
	},
	styleZone (zone, cities) {
		return "Zone " + zone + " (" + cities.join(" - ") + ")";
	},
	prepareZoneSelect () {
		if (!GetAddressZone?.data?.length) return [];
		const zoneMap = {};

		GetAddressZone.data.forEach((item) => {
			if (zoneMap[item.zone]) {
				zoneMap[item.zone].push(item.ville);
			} else {
				zoneMap[item.zone] = [item.ville];
			}
		})

		return Object.entries(zoneMap).map(([zone, cities]) => ({
			label: this.styleZone(zone, cities),
			value: zone,
		}));
	},
	formatDate(date) {
		return dayjs(date).format("DD/MM/YYYY");
	},
	getLastNoteContent: () => {
		const userLastNote = getProcedureById.data.data?.getProcedureById.user.notes?.[0];
		if (!userLastNote) return "";
		return userLastNote.content;
	},
	formatLastNoteDate: () => {
		const userLastNote = getProcedureById.data.data?.getProcedureById.user.notes?.[0];
		if (!userLastNote) return "";

		const lastUpdateDate = this.formatDate(userLastNote.date);
		return `Dernières modifications : ${lastUpdateDate} - ${userLastNote.author}`;
	},
	formatNotesButtonLabel: () => {
		const basicLabel = "🖋️ Notes"
		const userLastNote = getProcedureById.data.data?.getProcedureById.user.notes?.[0];

		if (!userLastNote) return basicLabel;

		const lastUpdate = this.formatDate(userLastNote.date)
		return `${basicLabel} (${lastUpdate})`
	}, 
	capitalize: (str) => {
		return str[0].toUpperCase() + str.slice(1).toLowerCase();
	},
}