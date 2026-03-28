export default {
	async openScraperModal() {
		if (!State.familyMembersLoaded) {
			await getAllFamilyMembersByStaff.run();
			State.familyMembersLoaded = true;
		}
		if (!Housing.housingLoaded) {
			await getUserAllHousingsByStaff.run();
			Housing.housingLoaded = true;
		}
		return await showModal(modale_loan.name);
	},
	findFamilyMember(id) {
		if (!id || !getAllFamilyMembersByStaff.data) return {};
		
		return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.find((f) => f.id === id);
	},
	getDefaultProfileSelectionValue() {
		if (utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_credit_health")) {
			return utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_credit_health");
		}

		if (getAllFamilyMembersByStaff.data && getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.length === 1) {
			return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers[0].id;
		}
		
		return "";
	},
}