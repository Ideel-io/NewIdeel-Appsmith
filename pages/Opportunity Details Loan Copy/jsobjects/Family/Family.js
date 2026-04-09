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
			showAlert("Modifications enregistrées !", "success");
			await getAllFamilyMembersByStaff.run();
			if (!deuxieme_assure.isSwitchedOn) {
				await SelectProfile.setSelectedOption(message.data.id);
			}
			return showModal(modale_loan.name);
		}

		if (message.type === "familyMemberDeleted") {
			showAlert("Modifications enregistrées !", "success");
			return await getAllFamilyMembersByStaff.run();
		}
	}
}