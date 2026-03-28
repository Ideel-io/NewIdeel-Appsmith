export default {
 calculateAnnualPrice() {
  let annualPrice;
	let applicationFees;
	let annualComission; 
	let finalPrice;
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

	applicationFees = parseInt(application_fees.text || 0) * 0.85;
		
  annualComission = (annualPrice * 0.85 * commissionPercentage) / 100;
	 
	finalPrice = applicationFees + annualComission; 

  return isNaN(finalPrice) ? 0 : parseInt(finalPrice.toFixed(2));
  
}

}