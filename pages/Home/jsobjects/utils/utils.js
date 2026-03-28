export default {
	isUserStaff: appsmith.store.ctx.role === "staff",
	stats: {},
	statsLoading: false,
	
	fromDate: new Date(),
	toDate: new Date(),
	
	async onPageLoad() {
		this.setupFilters();
		await this.getStats();
	},
	
	async getStats () {
		try{
			this.statsLoading = true;
			console.log(this.getUsFormatedDate(this.fromDate));
			await getAllProcedureStats.run(
				{
					"startDate": LimitResultSwitch.isSwitchedOn ? this.getUsFormatedDate(this.fromDate) : undefined
				}
			);
			getAllProcedureStats.data.data.getAllProceduresStats.categorySections.forEach((section) => {
				this.stats[section.name] = { label: section.displayName };
				section.stats.forEach((stat) => {
					this.stats[section.name][stat.stepId] = {
						label: stat.displayName, value: stat.amount
					};
				})
			})
			return this.stats;
    } catch(error) {
			console.log(error);
			// return showAlert(error.message, "error");
    } finally {
			this.statsLoading = false;
		}
	},
	
	onRerunRequest() {
		this.getStats();
	},
	
	onFromDatePickerChange() {
		this.fromDate = new Date(LimitResultFromDatePicker.selectedDate);
	},
	
	getUsFormatedDate(date) {
  	const day = String(date.getDate()).padStart(2, '0');
  	const month = String(date.getMonth() + 1).padStart(2, '0');
  	const year = date.getFullYear();

		return `${year}-${month}-${day}`;
	},
	
	getFrenchFormatedDate(date) {
  	const day = String(date.getDate()).padStart(2, '0');
  	const month = String(date.getMonth() + 1).padStart(2, '0');
  	const year = date.getFullYear();

		return `${month}/${day}/${year}`;
	},
	
	setupFilters() {
		const defaultDayRange = 30;
		
		this.fromDate.setDate(this.toDate.getDate() - defaultDayRange);

		LimitResultSwitch.setValue(true);
		LimitResultFromDatePicker.setValue(this.getFrenchFormatedDate(this.fromDate));
	}
}