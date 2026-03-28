export default {
	initIframe() {
		postWindowMessage(JSON.stringify({
			type: "auth",
			authorization: `Bearer ${appsmith.store.accessToken}`,
			token: appsmith.store.sessionToken,
			url: appsmith.store.env,
			userId: findUserByEmail.data.data.findUserByEmail.id,
		}), 'FamilyIFrame', "https://app.ideel.io/iframes/family/family.html");
	},
	async handleIframeMessage() {
		const message = JSON.parse(FamilyIFrame.message);
		if (message.type === "ready") {
			return this.initIframe();
		}

		if (message.type === "familyMemberAdded" || message.type === "familyMemberUpdated")  {
			if (message.data.id === findUserByEmail.data.data.findUserByEmail.id) {
				await findUserByEmail.run();
			}
			return showAlert("Modifications enregistrées !", "success");
		}

		if (message.type === "familyMemberDeleted") {
			return showAlert("Modifications enregistrées !", "success");
		}
	}
}