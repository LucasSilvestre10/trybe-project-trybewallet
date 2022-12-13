const actionLogin = (email) => ({
  type: 'LOGIN',
  payload: email,
});

const actionSetCurrencies = (currencies) => ({
  type: 'SET_CURRENCIES',
  payload: currencies,
});

const actionSaveExpenses = (expenses) => ({
  type: 'SAVE_EXPENSES',
  payload: expenses,
});
const actionDeleteExpenses = (expenses) => ({
  type: 'DELETE_EXPENSES',
  payload: expenses,
});

export { actionLogin, actionSetCurrencies, actionSaveExpenses, actionDeleteExpenses };
