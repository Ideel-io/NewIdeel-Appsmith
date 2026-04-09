export default {
	familyMembersLoaded: false,
	profileSelector: getAllFamilyMembersByStaff.data ? getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.map((f) => {
		return { label: `${f.firstname} ${f.lastname}`, value: f.id };
	}) : [],
	secondProfileSelector: SelectProfile.options.filter((o) => o.value !== SelectProfile.selectedOptionValue),
}