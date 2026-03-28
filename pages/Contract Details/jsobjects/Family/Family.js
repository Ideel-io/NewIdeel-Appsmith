export default {
	profileSelector: getAllFamilyMembersByStaff.data ? getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.map((f) => {
		return { label: `${f.firstname} ${f.lastname}`, value: f.id };
	}) : [],
	getDefaultProfileSelectionValue() {
		if (utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_vehcile")) {
			return utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_vehcile");
		}
		
		if (utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection")) {
			return utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection");
		}
		
		return "";
	},
	findFamilyMember(id) {
		if (!id || !getAllFamilyMembersByStaff.data) return {};
		
		return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.find((f) => f.id === id);
	},
}