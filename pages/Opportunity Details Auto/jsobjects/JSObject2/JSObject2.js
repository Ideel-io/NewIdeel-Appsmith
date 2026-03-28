export default {
	async executeQueriesInSequence() {
		await getProcedureById.run();
		await getPotentialOffersOfLastRun.run();
		await getProcedureDetails.run();
		await Garanties.run();
		await getPartnerBySubCategory.run();
		await getAllFamilyMembersByStaff.run();
		await Nos_Partenaires.run();
	},
}