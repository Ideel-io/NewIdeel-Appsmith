export default {
	/*UserTableData: (() => {
		try {
			if (userByEmailInput.text) return searchUsers.data.data.searchUsers.items.map(item => {
				const s = JSON.parse(item.source);
				return {
					node: s
				};
			});
		} catch(error){}

		try {
			return getAllUser.data.data.getAllUser.edges;
		} catch(error){}

		return [];
	})(),*/
	UserTableData: (() => {
		try {
			if (getUserByEmail.data.data.findUserByEmail) return [ { node: getUserByEmail.data.data.findUserByEmail } ];
		} catch(error){}

		try {
			if (getUserByPhoneNumber.data.data.getUserByPhoneNumber) return [ { node: getUserByPhoneNumber.data.data.getUserByPhoneNumber } ];
		} catch(error){}

		try {
			return getAllUsersBySalesOwner.data.data.getAllUsersBySalesOwner.edges;
		} catch(error){}

		try {
			return getAllUser.data.data.getAllUser.edges;
		} catch(error){}

		return [];
	})(),
	searchIsLoading: getAllUser.isLoading || getUserByEmail.isLoading || getUserByPhoneNumber.isLoading || getAllUsersBySalesOwner.isLoading,
	async initPage () {
		try {
			await Sales_List.run();
			await getAllUser.run();
			await getAllBusinessPartners.run();
			console.log("All intial queries launched successfully !")
		} catch (error) {
			console.log("Failed to launch initial queries !")
		}
	},
	async getAllUsers () {
		try {
			getUserByEmail.clear();
			getUserByPhoneNumber.clear();
			getAllUsersBySalesOwner.clear();

			await getAllUser.run();

			if (getAllUser.data.errors)
				throw new Error(getAllUser.data.errors[0].message);

			showAlert("Utilisateurs trouvés !", "success");
		} catch (error) {
			showAlert(`Utilisateur(s) introuvable(s) (${error.message})`, "error");
		}
	},
	async getUsersBySalesOwner() {
		try {
			getAllUser.clear();
			getUserByEmail.clear();
			getUserByPhoneNumber.clear();

			await getAllUsersBySalesOwner.run({
				salesOwnerEmail: SalesOwnerEmailSelect.selectedOptionValue,
			});

			if (getAllUsersBySalesOwner.data.errors)
				throw new Error(getAllUsersBySalesOwner.data.errors[0].message);

			showAlert("Utilisateur(s) trouvé(s) par SalesOwner !", "success");
		} catch (error) {
			showAlert(`Utilisateur(s) introuvable(s) pour ce SalesOwner (${error.message})`, "error");
		}
	},
	async getUserByEmail(email) {
		try {
			getAllUser.clear();
			getUserByPhoneNumber.clear();
			getAllUsersBySalesOwner.clear();

			await getUserByEmail.run({ userEmail: email });

			if (getUserByEmail.data.errors)
				throw new Error(getUserByEmail.data.errors[0].message);
			
			if (!getUserByEmail.data.data.findUserByEmail) 
				return showAlert("Utilisateur n'existe pas avec ce E-mail !", "warning")
   				
			showAlert("Utilisateur trouvé par E-mail  !", "success");
		} catch (error) {
			showAlert(`Utilisateur introuvable par E-mail (${error.message})`, "error");
		}
	},
	async getUserByPhoneNumber(phoneNumber) {
		try {
			getAllUser.clear();
			getUserByEmail.clear();
			getAllUsersBySalesOwner.clear();

			await getUserByPhoneNumber.run({ userPhoneNumber: phoneNumber });

			if (getUserByPhoneNumber.data.errors)
				throw new Error(getUserByPhoneNumber.data.errors[0].message);

			showAlert("Utilisateur trouvé par téléphone !", "success");
		} catch (error) {
			showAlert(`Utilisateur introuvable par téléphone ! (${error.message})`, "error");
		}
	},
	async searchUserByContact (contact) {
		if (!contact)
			return showAlert("Veuillez saisir un e-mail ou un numéro de téléphone", "warning");

		const emailRegex = /\S+@\S+\.\S+/;
		const isEmail = emailRegex.test(contact);

		if (isEmail) 
			return await this.getUserByEmail(contact);

		const normalized = contact.replace(/\s+/g, '');
 
		return await this.getUserByPhoneNumber(normalized);
	},
	async searchUsers (args = { resetTable: false }) {
		try {
			const { resetTable } = args;

			if (resetTable)
				resetWidget("users_table", true);;

			if (userByEmailInput.text) 
				return await this.searchUserByContact(userByEmailInput.text);

			if (SalesOwnerEmailSelect.selectedOptionLabel)
				return this.getUsersBySalesOwner();

			return await this.getAllUsers();
		} catch (error) {
			showAlert(`Utilisateur(s) introuvable(s). Vérifiez vos informations. (${error.message})`, "error");
		}
	},
	async resetSearch () {
		try {
			resetWidget("users_table", true);
			resetWidget("userByEmailInput", true);
			resetWidget("SalesOwnerEmailSelect", true);
			await this.getAllUsers();
		} catch(error) {
			return showAlert(error.message, "error");
		}
	}
}