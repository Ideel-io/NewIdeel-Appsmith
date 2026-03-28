export default {
	hideTables: async () => {
		storeValue('showReferralTable', false);
		storeValue('showBankTransactionsTable', false);
	},
	executeQueriesInSequence: async () => {
        await findUserByEmail.run();
        await getAllUserProcedures.run();
    },
}