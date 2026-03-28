export default {
	formatOptionType(option_value, option_type) {
		switch (option_type) {
			case "number":
				let number = Number(option_value);
				if (isNaN(number))
					return 0;
				return number / 100;
			case "bool":
				if (option_value.toLowerCase() === "true")
					return "✅";
				return "❌";
			default:
				return option_value;
		}
	},
	
	/*
	*	Returns an option with this name and formats it according to the given type
	* Allowed type are : "bool", "number", "text"
	* If unknown type is given, "text" type is choosen by default
	*/
	getOptionByName (options, option_name, option_type="text") {
		for (const option_list of options) {
			for (const option of option_list["options"]) {
				if (option.title === option_name) {
					return this.formatOptionType(option.value, option_type);
				}
			}
		}
		
		// No value found, return "-"
		return "-";
	}
}