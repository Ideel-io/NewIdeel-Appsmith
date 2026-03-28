export default {
	executeQueriesInSequence: async () => {
		await Promise.all(
			[
				getUserAllHousingsByStaff.run(),
				getLastHousingRunData.run(),
				getPartnerBySubCategory.run(),
				Sales_List.run(),
				getProcedureById.run(),
				getAllFamilyMembersByStaff.run(),
    		getProcedureDetails.run(),
				Nos_Partenaires.run(),
				getPotentialOffersOfLastRun.run()
			]
		)
	
		scraperRelaunch.getScraperResultsGuarantees();
	},
}