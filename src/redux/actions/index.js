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
const actionEditExpenses = (idToEdit) => ({
  type: 'EDIT_EXPENSES',
  payload: idToEdit,
});
const actionSaveEditExpenses = (newExpenses) => ({
  type: 'SAVE_EDIT_EXPENSES',
  payload: newExpenses,
});

export {
  actionLogin,
  actionSetCurrencies,
  actionSaveExpenses,
  actionDeleteExpenses,
  actionEditExpenses,
  actionSaveEditExpenses,
};
