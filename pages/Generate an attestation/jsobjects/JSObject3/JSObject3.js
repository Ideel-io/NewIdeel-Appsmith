export default {
	myVar1: [],
	myVar2: {},
	myFun () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	myFun1: () => {
		const compagnieDefault = GetUser.data["0"]["Compagnie à résilier"];
		const compagnie = user_compagnie_a_resilier.selectedOptionLabel;

		if (!compagnie || compagnie === "") {
			return compagnieDefault;
		} else {
			return compagnie;
		}
	},

	calculateSendDate: () => {
    const [day, month, year] = user_date_effet.formattedDate.split('/');
    const date = dayjs(`${year}-${month}-${day}`);
    return date.subtract(2, "month").endOf("month").subtract(3, "days").format("YYYY-MM-DD");
  },
	
	myFun4: () => {
		const dateEffet = parseInt(GetUser.data["0"]["Date d'effet du nouveau contrat"]);

		return Date(dateEffet).toLocaleDateString()
	},
}