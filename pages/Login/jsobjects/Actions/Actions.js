export default {
	async login (environment, apiLink) {
		try {
			if (!environment) {
				return showAlert("Pas d'environnement sélectionné", "warning");
			}
		
			const cognitoUrl = `https://${environment}-ideel-auth.auth.eu-west-1.amazoncognito.com/oauth2/token`;
			const environmentToClientIdMap = {
				production: "7bpj7eh4m0rj2sh8lkq6e7k610",
				staging: "7ri92tj74hgij54hm9fcn7bvcu",
				ghassen: "7lggn53emt3hpfu59pdtv0iuo8"
			};
		
			const clientId = environmentToClientIdMap[environment];
		
			if (!clientId) {
				return showAlert(`Environnement inconnu : "${environment}"`);
			}
		
			await storeValue('cognito', cognitoUrl);
			await storeValue('client_id', clientId);
			await storeValue('env', apiLink);
			
			await UserLogin.run();
			
			if (UserLogin.data.errors) {
				throw new Error(UserLogin.data.errors[0].message);
			}
			
			const result = UserLogin.data.data.login;
			
			await storeValue("sessionToken", result.sessionToken);
			await storeValue("accessToken", result.authenticationResult.accessToken);
			await storeValue("refreshToken", result.authenticationResult.refreshToken);
			await storeValue("ctx", jsonwebtoken.decode(result.sessionToken));
			await storeValue("environment", environment)
			
			await showAlert("Connexion réussie !", "success");
			return navigateTo('Home', {}, 'SAME_WINDOW');
		} catch (error) {
			return showAlert(error.message, "error");
		}
	}
}