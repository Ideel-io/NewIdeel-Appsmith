export default {
	binaryChoices: {
		"oui": "Oui",
		"non": "Non",
	},
	equipments: this.binaryChoices,
	dependencies: this.binaryChoices,
	terminationInLastFiveYears: this.binaryChoices,
	residenceType: {
		"main": "Résidence principale",
		"secondary": "Résidence secondaire",
		"rentedOut": "Bien mis en location",
	},
	ownershipType : {
		"owner": "Propriétaire",
		"furnished": "En location meublé",
		"notFurnished": "En location non meublé", 
	},
	numberOfRooms: {
		"un": "1" ,
		"deux": "2",
		"trois": "3",
		"quatre": "4",
		"cinq": "5",
		"six_ou_plus": "6 ou plus"
	},
	numberOfLargeRooms: {
		"zero": "0",
		"un": "1",
		"deux":"2",
		"trois":"3",
		"quatre":"4",
		"cinq":"5",
		"six_ou_plus": "6 ou plus"
	},
	numberOfAdults: {
		"un": "1",
		"deux": "2",
		"trois": "3",
		"quatre": "4",
		"cinq_ou_plus": "5 ou plus",
	},
	numberOfchildren: {
		"zero": "0",
		"un": "1",
		"deux": "2",
		"trois": "3",
		"quatre": "4",
		"cinq_ou_plus": "5 ou plus",
	},
	numberOfDisasters: {
		"zero": "0",
		"un": "1",
		"deux": "2",
		"trois": "3",
		"quatre": "4",
		"quatre_ou_plus": "4 ou plus",
	},
	disasterType: {
		"bris_de_glace": "Bris de glace",
		"vol": "Vol",
		"incendie": "Incendie",
		"degats_des_eaux": "Dégats des eaux",
		"vandalisme": "Vandalisme",
		"evenements_naturels": "Évenements naturels",
		"dommages_corporels": "Dommages corporels",
	},
	terminationReason: {
		"defaut_de_paiement_de_votre_part": "Défaut de paiement de vote part",
		"trop_de_sinistres": "Trop de sinistres",
		"fausse_declaration": "Fausse déclaration",
		"autre": "Autre",
	},
	improvementExpected: {
		"je_veux_payer_moins_cher": "Je veux payer moins cher",
		"je_veux_de_meilleures_garanties": "Je veux de meilleures garanties",
		"un_peu_des_deux": "Un peu des deux",
	},
	state_map: {
		"groundAppartement": "Un appartement au rez-de-chaussée",
		"intermediateAppartement": "Un appartement à un étage intermédiaire",
		"lastAppartement": "Un appartement au dernier étage",
		"houseOneStage": "Une maison à un étage",
		"houseTwoStage": "Une maison à deux étages",
		"houseThreeStage": "Une maison à trois étages",
		"houseFourStage": "Une maison à quatre étages ou plus"
	},
	value_furnitures: {
	  	"moins_de_10000€": "Moins de 10 000€",
     "entre_10_et_20000€": "Entre 10 000€ et 20 000€",
  	 "entre_20000_et_30000€": "Entre 20 000€ et 30 000€",
		 "plus_de_30000€": "Plus de 30 000€"
	},
	value_luxury_goods: {
		"0€": "0€",
		"entre_0_et_5000€": "Entre 0€ et 5 000€",
		"entre_5000_et_10000€": "Entre 5 000€ et 10 000€",
		"plus_de_10000€": "Plus de 10 000€"
	},
	getMapOptions: (mapObject) => Object.entries(mapObject).map(([value, name]) => ({name, value})),
	equipmentsOptions:  this.getMapOptions(this.equipments),
	housingTypeOptions:  this.getMapOptions(this.state_map),
	disasterTypeOptions:  this.getMapOptions(this.disasterType),
	dependenciesOptions:  this.getMapOptions(this.dependencies),
	ownershipTypeOptions:  this.getMapOptions(this.ownershipType),
	numberOfRoomsOptions:  this.getMapOptions(this.numberOfRooms),
	residenceTypeOptions:  this.getMapOptions(this.residenceType),
	numberOfAdultsOptions:  this.getMapOptions(this.numberOfAdults),
	maritalStatusOptions:  this.getMapOptions(utils.maritalStatusMap),
	occupationTypeOptions:  this.getMapOptions(utils.occupationTypeMap),
	numberOfchildrenOptions:  this.getMapOptions(this.numberOfchildren),
	numberOfDisastersOptions:  this.getMapOptions(this.numberOfDisasters),
	terminationReasonOptions:  this.getMapOptions(this.terminationReason),
	numberOfLargeRoomsOptions:  this.getMapOptions(this.numberOfLargeRooms),
	improvementExpectedOptions:  this.getMapOptions(this.improvementExpected),
	terminationInLastFiveYearsOptions:  this.getMapOptions(this.terminationInLastFiveYears),
	valueFurnituresOptions: this.getMapOptions(this.value_furnitures),
	valueLuxuryGoodsOptions: this.getMapOptions(this.value_luxury_goods),
	isHouse() {
		const name = Housing.findHousing(SelectHousing.selectedOptionValue).housingType || getLastHousingRunData.data.data.getLastHousingRunData.userPersonalInfo.housingType
		return Object.keys(this.state_map).some((key) => key.includes(name) && key.includes("house"));
	}
}