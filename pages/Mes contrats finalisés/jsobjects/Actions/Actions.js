export default {
	ContractTableData: (() => {
		try {
			if (Table1.searchText) return searchContracts.data.data.searchContracts.items.map(item => {
				const s = JSON.parse(item.source);
				return {
					node: s
				};
			});
		} catch(error){}

		try {
			return getAllContracts.data.data.getAllContracts.edges;
		} catch(error){}

		return [];
	})(),
	async searchContracts () {
		try {
			if (Table1.searchText) 
				return await searchContracts.run();

			return await getAllContracts.run();
		} catch (error) {
			showAlert(`Utilisateur(s) introuvable(s). Vérifiez vos informations. (${error.message})`, "error");
		}
	},
}