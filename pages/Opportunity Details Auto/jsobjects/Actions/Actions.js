export default {
	async openScraperModal() {
		if (!Housing.housingLoaded) {
			await getUserAllHousingsByStaff.run();
			Housing.housingLoaded = true;
		}
		await getLastAutoRunData.run();
		return await showModal(RelanceScraperAuto.name);
	},
	findFamilyMember(id) {
		if (!id || !getAllFamilyMembersByStaff.data) return {};

		return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.find((f) => f.id === id);
	},
	getDefaultProfileSelectionValue() {
		if (utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_vehcile")) {
			return utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_vehcile");
		}

		if (!getLastAutoRunData.data.data.getLastAutoRunData.userPersonalInfo.firstName && getAllFamilyMembersByStaff.data && getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.length === 1) {
			return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers[0].id;
		}

		return "";
	},
}