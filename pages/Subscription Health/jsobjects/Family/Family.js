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
		if (utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection")) {
			return utils.getAnswer(getProcedureDetails.data.data.getProcedureDetails, "profile_selection");
		}
		
		if (getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.length === 1) {
			return { label: `${getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers["0"].firstname}                            ${getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers["0"].lastname}`, value:    getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers["0"].id }
		}
		
		return "";
	},
	maritalStatus: {
		single: "Célibataire",
		married: "Marié(e)",
		pacs: "Pacsé(e)",
		divorced: "Divorcé(e)",
		couple: "Concubin(e)",
		widow: "Veuf/ve",
	},
	occupation: {
		employee: "Salarié(e)",
		executive: "Salarié(e) Cadre",
		farmer: "Salarié(e) / exploitant(e) agricole",
		entrepreneur: "Chef d'entreprise",
		selfEmployed: "Travailleur / Travailleuse non salarié(e)",
		unemployed: "Sans profession",
		functionary: "Fonctionnaire",
		student: "Étudiant(e)",
		retired: "Retraité(e)",
		other: "Autre",
	},
	familyTies: {
  	conjoint: "Conjoint / Conjointe",
  	child: "Enfant",
  	parent: "Parent",
  	spouse: "Époux / Épouse",
  	other: "Autre",
  	myself: "Moi-même",
	},
	maritalStatusOptions: Object.entries(this.maritalStatus).map(([value, name]) => ({name, value})),
	occupationOptions: Object.entries(this.occupation).map(([value, name]) => ({name, value})),
	familyTiesOptions: Object.entries(this.familyTies).filter(([key]) => key !== "myself").map(([value, name]) => ({name, value})),
	findFamilyMember(id) {
		if (!id || !getAllFamilyMembersByStaff.data) return {};
		
		return getAllFamilyMembersByStaff.data.data.getAllFamilyMembersByStaff.familyMembers.find((f) => f.id === id);
	},
}