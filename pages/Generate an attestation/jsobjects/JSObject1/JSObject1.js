export default {
	disable: () => {
		user_first_name.setDisabled(true)
		user_email.setDisabled(true)
		user_bien_resilie.setDisabled(true)
		user_last_name.setDisabled(true)
		user_adress1.setDisabled(true)
		user_adress2.setDisabled(true)
		user_adress3.setDisabled(true)
		user_ancien_contrat.setDisabled(true)
		user_compagnie_a_resilier.setDisabled(true)
		user_date_effet.setDisabled(true)
		user_nouvelle_compagnie.setDisabled(true)
		EditerValider.setDisabled(true)
		user_type_envoie.setDisabled(true)
		user_date_envoie.setDisabled(true)
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
                <p style='text-align: right; padding-right:8px; font-family: "Dancing Script"'>${MySendingBoxAdress.data["0"].Adresse1}</p>
                <p style='text-align: right; padding-right:8px; font-family: "Dancing Script"'>${MySendingBoxAdress.data["0"].Adresse2}</p>
                <p style='text-align: right; padding-right:8px; font-family: "Dancing Script"'>${MySendingBoxAdress.data["0"].Adresse3}</p>
                <br> 
                <br> ${MySendingBoxType.data["0"]["Type de contrat"]}
                <br> 
                <br> Lettre recommandée de résiliation
                <br> Client : ${user_last_name.text} ${user_first_name.text}
                <br> Contrat : ${user_ancien_contrat.text}
                <br> 
                <br> 
                <br> ${MySendingBoxType.data["0"]["Type de contrat text"]}
                <br>
                <br> ${user_bien_resilie.text}
                <br>
                <br> Cette résiliation prendra effet le : ${moment(user_date_effet.selectedDate).format("DD/MM/YYYY")} à 00h00
                <br>
                <br> À compter de cette date, le bien sera assuré chez ${user_nouvelle_compagnie.text}
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