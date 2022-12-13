const actionLogin = (email) => ({
  type: 'LOGIN',
  payload: email,
});

const actionSetCurrencies = (currencies) => ({
  type: 'SET_CURRENCIES',
  payload: currencies,
});

export { actionLogin, actionSetCurrencies };
