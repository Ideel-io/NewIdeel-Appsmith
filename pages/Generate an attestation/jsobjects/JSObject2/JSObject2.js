export default {
	myVar1: [],
	myVar2: {},
	getParameters: () => {
		const urlParameters = {
			"rowIndex": appsmith.URL.queryParams.rowIndex,
			"bienAResilier":
			currentRow["Bien à résilier"],
			"piecesManquantes": currentRow["Pièce manquantes"],
			"status" : currentRow["Status"],
			"numeroContratAResilier": currentRow["# de contrat à résilier"],
			...currentRow
		}

		navigateTo(
			"Generate an attestation", 
			urlParameters,
			"SAME_WINDOW")
	},
}