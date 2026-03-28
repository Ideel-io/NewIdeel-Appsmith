export default {
	executeQueriesInSequence: async () => {
		await Sales_List.run();
		await getProcedureById.run();
		await Nos_Partenaires.run();
	}
}