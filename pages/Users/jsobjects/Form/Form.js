export default {
	nameRegex: new RegExp("^\s*[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[-' ][A-Za-zÀ-ÖØ-öø-ÿ]+)*\s*$"),
	phoneRegex: new RegExp("^(?:(?:\\+|00)33|0)[67]\\d{8}$"),
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
	validatePhone (phone) {
		if (!phone) return false;
		if (!this.phoneRegex.test(phone)) return false;
		return true;
	}
}