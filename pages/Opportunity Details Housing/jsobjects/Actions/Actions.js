export default {
	async openScraperModal() {
		if (!Housing.housingLoaded) {
			await getUserAllHousingsByStaff.run();
			Housing.housingLoaded = true;
		}
		return await showModal(RelanceScraperHabitation.name);
	},
	findFamilyMember(id) {
		if (!id || !getAllFamilyMembersByStaff.data) return {};
		
		return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.find((f) => f.id === id);
	},
	getDefaultProfileSelectionValue() {
		if (utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection")) {
			return utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection");
		}

		if (!getLastHousingRunData.data.data.getLastHousingRunData.firstName && getAllFamilyMembersByStaff.data && getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.length === 1) {
			return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers[0].id;
		}
		
		return "";
	},
}