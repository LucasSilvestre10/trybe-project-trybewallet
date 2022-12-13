import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrencies, exchangeRates } from '../services/apiCurrencies';
import { actionSetCurrencies, actionSaveExpenses } from '../redux/actions';

class WalletForm extends Component {
  state = {
    expense: '',
    description: '',
    currencies: [],
    currencie: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',

  };

  componentDidMount() {
    this.setCurrencies();
  }

  setCurrencies = async () => {
    const result = await getCurrencies();
    console.log(result);
    const { dispatch } = this.props;
    dispatch(actionSetCurrencies(result));

    this.setState({ currencies: result });
  };

  setNewState = (element) => {
    const { value, name } = element.target;
    this.setState({ [name]: value }, this.validateForm);
  };
  /* formato objeto
    expenses: [{
      "id": 0,
      "value": "3",
      "description": "Hot Dog",
      "currency": "USD",
      "method": "Dinheiro",
      "tag": "Alimentação",
      exchangeRates: []}] */

  submitExpenses = async () => {
    const { expenses, dispatch } = this.props;
    const { expense, description, currencie, method, tag } = this.state;
    const result = await exchangeRates();
    console.log('result api', result);
    const obj = {
      id: expenses.length,
      value: expense,
      description,
      currency: currencie,
      method,
      tag,
      exchangeRates: result,
    };
    dispatch(actionSaveExpenses(obj));
    console.log(obj);
    this.setState({
      currencie: 'USD',
      expense: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { expense, description, currencies } = this.state;
    return (
      <section>
        <input
          data-testid="value-input"
          placeholder="Valor"
          min="0"
          type="number"
          name="expense"
          value={ expense }
          onChange={ this.setNewState }
        />
        <input
          data-testid="description-input"
          type="text"
          placeholder="Descrição"
          name="description"
          value={ description }
          onChange={ this.setNewState }

        />
        <select
          name="currencie"
          id="currencie"
          onChange={ this.setNewState }
          data-testid="currency-input"
        >
          {currencies.map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
        <select
          name="method"
          id="method"
          onChange={ this.setNewState }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          id="tag"
          onChange={ this.setNewState }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          type="button"
          onClick={ this.submitExpenses }
        >
          Adicionar despesa

        </button>
      </section>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
