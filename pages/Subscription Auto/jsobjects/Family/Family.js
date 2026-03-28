export default {
	initIframe() {
		postWindowMessage(JSON.stringify({
			type: "auth",
			authorization: `Bearer ${appsmith.store.accessToken}`,
			token: appsmith.store.sessionToken,
			url: appsmith.store.env,
			userId: getProcedureById.data.data.getProcedureById.user.id,
		}), 'FamilyIFrame', "https://app.ideel.io/iframes/family/family.html");
	},
	async handleIframeMessage() {
		const message = JSON.parse(FamilyIFrame.message);
		if (message.type === "ready") {
			return this.initIframe();
		}

		if (message.type === "familyMemberAdded" || message.type === "familyMemberUpdated")  {
			await closeModal(FamilyModal.name);
			await getAllFamilyMembersByStaff.run();
			await showAlert("Modifications enregistrées !", "success");
			return await SelectProfile.setSelectedOption(message.data.id);
		}

		if (message.type === "familyMemberDeleted") {
			await getAllFamilyMembersByStaff.run();
			return showAlert("Modifications enregistrées !", "success");
		}
	},
	
	
	profileSelector: getAllFamilyMembersByStaff.data ? getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.map((f) => {
		return { label: `${f.firstname} ${f.lastname}`, value: f.id };
	}) : [],
	
	
	
	getDefaultProfileSelectionValue() {
		if (utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_vehcile")) {
			return utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection_vehcile");
		}
		
		if (getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.length === 1) {
			return { label: `${getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers["0"].firstname}                            ${getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers["0"].lastname}`, value:    getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers["0"].id }
		}
		
		
		return "";
	},
	findFamilyMember(id) {
		if (!id || !getAllFamilyMembersByStaff.data) return {};
		
		return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.find((f) => f.id === id);
	},
}