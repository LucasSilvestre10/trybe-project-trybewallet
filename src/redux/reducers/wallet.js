const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_CURRENCIES':
    return {
      ...state,
      currencies: action.payload,
    };
  case 'SAVE_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case 'DELETE_EXPENSES':
    return {
      ...state,
      expenses: action.payload,
    };
  case 'EDIT_EXPENSES':
    return {
      ...state,
      idToEdit: action.payload,
      editor: true,
    };
  case 'SAVE_EDIT_EXPENSES':
    return {
      ...state,
      expenses: action.payload,
      idToEdit: 0,
      editor: true,
    };
  default:
    return state;
  }
}

export default wallet;
