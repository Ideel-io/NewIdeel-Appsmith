export default {
	nameRegex: new RegExp("^\s*[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*\s*$"),
	isUpdateUserInfoFormValid: () => {
		const requiredFields = [
			updateLastNameInput,
			updateFirstNameInput,
			updateBirthdateInput,
			updateOccupationInput,
		]
		return requiredFields.every(field => field.isValid)
	},
	validateName (name) {
		if (!name) return false;
		if (name.length < 1) return false;
		if (name.length > 26) return false;
		if (!this.nameRegex.test(name)) return false;
		return true;
	},
	validateNameError (name) {
		if (!name) return "Ce champ est obligatoire";
		if (name.length < 1) return "Doit être plus long que 1 caractère";
		if (name.length > 26) return "Doit être plus court que 26 caractères";
		if (!this.nameRegex.test(name)) return "Ce champ ne peut pas contenir des caractères spéciaux ou des chiffres.";
		return "";
	},
}