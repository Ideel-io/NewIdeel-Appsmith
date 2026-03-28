export default {
	
	displayCommission({ commissionType, commissionValue }) {
		return {
      label: commissionType === "price" ? `${commissionValue}€` : `${commissionValue}%`,
      value: commissionValue
    };
  }, 
	getSelectedPartner() {
  return Object.values(NouveauxPartner.data).find(entry => 
    entry["Compagnie"] === user_new_partner.selectedOptionLabel
  );
  },
	
		formatFormulesLine: () => {
	    const selectedPartner = Object.values(NouveauxPartner.data).find(entry => 
        entry["Compagnie"] === user_new_partner.selectedOptionLabel
     );	
     return selectedPartner["Formules"]
       .split(';')
       .map(item => item.trim())
       .filter(item => item.length > 0)
       .map(item => ({
        label: item,
        value: item
       }));
  }, 
	
	setComissionValue() {
		if (commissionType.selectedOptionValue === "LINEAR") {
       Commission_pourcentage2.setSelectedOption(Commission_pourcentage.selectedOptionValue);
       Commission_pourcentage3.setSelectedOption(Commission_pourcentage.selectedOptionValue);
			 Commission_pourcentage2.setDisabled(true);
			 Commission_pourcentage3.setDisabled(true);
    } else {
			 Commission_pourcentage2.setDisabled(false);
			 Commission_pourcentage3.setDisabled(false);
		}
	},
	getCommessionOptions() {
    const selectedPartner = Object.values(NouveauxPartner.data).find(entry => 
        entry["Compagnie"] === user_new_partner.selectedOptionLabel
     );
    if(!selectedPartner) return;
		
    const comm1 = JSON.parse(selectedPartner["Commission 1"]);
		const comm2 = JSON.parse(selectedPartner["Commission 2"]);
    const comm3 = JSON.parse(selectedPartner["Commission 3"]);

		const options1 = comm1.map(v => ({
      label: selectedPartner.CommissionUnit === "price" ? `${v}€` : `${v}%`,
      value: v
    }));
		
		const options2 = comm2.map(v => ({
      label: selectedPartner.CommissionUnit === "price" ? `${v}€` : `${v}%`,
      value: v
    }));
		
		const options3 = comm3.map(v => ({
      label: selectedPartner.CommissionUnit === "price" ? `${v}€` : `${v}%`,
      value: v
    }));
		
		Commission_pourcentage.setOptions(options1);
		Commission_pourcentage2.setOptions(options2);
		Commission_pourcentage3.setOptions(options3);
		
	  if (getProcedureById.data.data.getProcedureById.newContract.typeOfCommissioning === "LINEAR") {
			 Commission_pourcentage2.setDisabled(true);
			 Commission_pourcentage3.setDisabled(true);
    }
  },
	
	calculateSendDate: () => {
    const [day, month, year] = user_date_effet.formattedDate.split('/');
    const date = dayjs(`${year}-${month}-${day}`);
    return date.subtract(2, "month").endOf("month").subtract(3, "days").format("YYYY-MM-DD");
  },
	
 calculateAnnualPrice() {
	  const selectedPartner = Object.values(NouveauxPartner.data).find(entry => 
        entry["Compagnie"] === user_new_partner.selectedOptionLabel
     );

	if (selectedPartner["CommissionUnit"] === "price") 
		return Number(Commission_pourcentage.selectedOptionValue)
	 
  let annualPrice;
	let price = parseInt(user_new_tarif.text);
	let commissionPercentage = Commission_pourcentage.selectedOptionValue
	 
  switch (user_cotisation.selectedOptionValue) {
    case 'Mensuel':
      annualPrice = price * 12; 
      break;
    case 'Trimestriel':
      annualPrice = price * 4; 
      break;
		case 'Semestriel':
      annualPrice = price * 2; 
      break;	
    case 'Annuel':
      annualPrice = price; 
      break;
    default:
			return 0;  
	}

  let finalPrice = (annualPrice * 0.80 * commissionPercentage) / 100;

  return isNaN(finalPrice) ? 0 : parseInt(finalPrice.toFixed(2));
  
},
	
  calculateAnnualPrice2() {
	 const selectedPartner = Object.values(NouveauxPartner.data).find(entry => 
        entry["Compagnie"] === user_new_partner.selectedOptionLabel
     );	
	if (selectedPartner["CommissionUnit"] === "price") 
		return Number(Commission_pourcentage2.selectedOptionValue)
		
  let annualPrice;
	let price = parseInt(user_new_tarif.text);
	let commissionPercentage = Commission_pourcentage2.selectedOptionValue
	 
  switch (user_cotisation.selectedOptionValue) {
    case 'Mensuel':
      annualPrice = price * 12; 
      break;
    case 'Trimestriel':
      annualPrice = price * 4; 
      break;
		case 'Semestriel':
      annualPrice = price * 2; 
      break;	
    case 'Annuel':
      annualPrice = price; 
      break;
    default:
			return 0;  
	}

  let finalPrice = (annualPrice * 0.80 * commissionPercentage) / 100;

  return isNaN(finalPrice) ? 0 : parseInt(finalPrice.toFixed(2));
  
},
	
	 calculateAnnualPrice3() {
		 
	 const selectedPartner = Object.values(NouveauxPartner.data).find(entry => 
        entry["Compagnie"] === user_new_partner.selectedOptionLabel
     ); 	 
		 
	if (selectedPartner["CommissionUnit"] === "price") 
		return Number(Commission_pourcentage3.selectedOptionValue)
		 
		 
  let annualPrice;
	let price = parseInt(user_new_tarif.text);
	let commissionPercentage = Commission_pourcentage3.selectedOptionValue
	 
  switch (user_cotisation.selectedOptionValue) {
    case 'Mensuel':
      annualPrice = price * 12; 
      break;
    case 'Trimestriel':
      annualPrice = price * 4; 
      break;
		case 'Semestriel':
      annualPrice = price * 2; 
      break;	
    case 'Annuel':
      annualPrice = price; 
      break;
    default:
			return 0;  
	}

  let finalPrice = (annualPrice * 0.80 * commissionPercentage) / 100;

  return isNaN(finalPrice) ? 0 : parseInt(finalPrice.toFixed(2));
  
},
	
}