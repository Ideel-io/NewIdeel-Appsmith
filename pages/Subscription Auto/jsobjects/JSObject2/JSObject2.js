export default {
	
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
  },
	
	calculateSendDate: () => {
    const [day, month, year] = user_date_effet.formattedDate.split('/');
    const date = dayjs(`${year}-${month}-${day}`);
    return date.subtract(2, "month").endOf("month").subtract(3, "days").format("YYYY-MM-DD");
  },
	
	setComissionValue() {
		const type = commissionType.selectedOptionValue;

    const isDisabled = (type === "LINEAR" || type === "ONE_SHOT");

		if (type === "LINEAR") {
        const value = Commission_pourcentage.selectedOptionValue;
        Commission_pourcentage2.setSelectedOption(value);
        Commission_pourcentage3.setSelectedOption(value);
    }
		
		if (type === "ONE_SHOT") {
        Commission_pourcentage2.setSelectedOption(0);
        Commission_pourcentage3.setSelectedOption(0);
    }

    [Commission_pourcentage2, Commission_pourcentage3].forEach(el => {
        el.setDisabled(isDisabled);
    });
	},
	
 calculateAnnualPrice() {
  const selectedPartner = Object.values(NouveauxPartner.data).find(
    entry => entry["Compagnie"] === user_new_partner.selectedOptionLabel
  );
  if (!selectedPartner) return 0;

  if (selectedPartner["CommissionUnit"] === "price") 
    return Number(Commission_pourcentage.selectedOptionValue);

  const price = parseInt(user_new_tarif.text);
  const commissionPercentage = Commission_pourcentage.selectedOptionValue;
  let annualPrice;

  switch (user_cotisation.selectedOptionValue) {
    case 'Mensuel':
      annualPrice = price * 12; break;
    case 'Trimestriel':
      annualPrice = price * 4; break;
    case 'Semestriel':
      annualPrice = price * 2; break;	
    case 'Annuel':
      annualPrice = price; break;
    default:
      return 0;  
  }

  // Calculation after setting annualPrice
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
	
 sendingLetter: false,	
 async sendSouscriptionWithLetter() {
  try {
		
		if (this.sendingLetter) {
			const letterResult = await sendLetter.run();

    const terminationLink =
      letterResult?.data?.sendTerminationLetterForOldContract;


    if (!terminationLink) {
      showAlert("Erreur lors de l'envoi de la lettre", "error");
      return;
    }
		}
    
		
		await ValidateQuote.run();
		
		if (ValidateQuote.data.errors) throw new Error(ValidateQuote.data.errors[0].message )

    navigateTo("Mes contrats finalisés", {}, "SAME_WINDOW");
    showAlert("Fait !", "success");

  } catch (error) {
    console.error("One of the operations failed:", error);
    showAlert("Une erreur est survenue", "error");
  }
},

	
	generateLetter: () => {
		return `<html>
    <head>
        <meta charset='UTF-8'>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Dancing+Script" />
        <style>
            body {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
                padding-left: 8px;
            }
            .content {
                flex: 1;
            }
            .footer {
                font-size: 8px;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class="content">
            <div>
                <br>
                <img src="https://s3.eu-west-1.amazonaws.com/ideel.io/images/Logo-master.svg" class="logo">
                <br> IDEEL
                <br> 20 RUE SAINT NICOLAS
                <br> 75012 PARIS
                <br> ORIAS : 20 006 910
                <br> hello@ideel.io
                <p style='text-align: right; padding-right:8px; font-family: "Dancing Script"'>${user_compagnie_a_resilier.selectedOptionLabel}</p>
                <p style='text-align: right; padding-right:8px; font-family: "Dancing Script"'>${user_adress1.text}</p>
                <p style='text-align: right; padding-right:8px; font-family: "Dancing Script"'>${user_adress2.text}</p>
                <p style='text-align: right; padding-right:8px; font-family: "Dancing Script"'>${user_adress3.text}</p>
                <br> 
                <br> ${MySendingBoxType.data["0"]["Type de contrat"]}
                <br> 
                <br> Lettre recommandée de résiliation
                <br> Client : ${Family.findFamilyMember(SelectProfileResiliation.selectedOptionValue).lastname} ${Family.findFamilyMember(SelectProfileResiliation.selectedOptionValue).firstname}
                <br> Contrat : ${user_ancien_contrat.text}
                <br> 
                <br> 
                <br> ${MySendingBoxType.data["0"]["Type de contrat text"]}
                <br>
                <br> ${user_property.text}
                <br>
                <br> Cette résiliation prendra effet le : ${moment(user_date_effet.selectedDate).format("DD/MM/YYYY")} à 00h00
                <br>
                <br> À compter de cette date, le bien sera assuré chez ${user_new_partner.selectedOptionLabel}
                <br> Nous vous rappelons que, selon l'article R113-12 du Code des Assurances, nous nous assurons de la continuité de la couverture de l'assuré durant l'opération de résiliation.
                <br>
                <br> Recevez, Madame, Monsieur, nos sincères salutations
                <br>
                <br> IDEEL
                <br>
                <br> Votre courtier en assurances
            </div>
        </div>
        <div class="footer">
            <p>Société par actions simplifiée au capital de 20 393,00 € dont le siège social est 20, rue saint nicolas, 75012 Paris, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 841880792, enregistrée à l'Orias sous le numéro 200 06 910 (site de l'ORIAS : www.orias.fr), représentée par son Président, Edouard Alexandre.</p>
        </div>
    </body>
</html>`
	}

}