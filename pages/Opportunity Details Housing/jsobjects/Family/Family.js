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
			
			await showModal(RelanceScraperHabitation.name);
			await getAllFamilyMembersByStaff.run();
			await showAlert("Modifications enregistrées !", "success");
			return await SelectProfile.setSelectedOption(message.data.id);
		}

		if (message.type === "familyMemberDeleted") {
			await getAllFamilyMembersByStaff.run();
			return showAlert("Modifications enregistrées !", "success");
		}
	}
}