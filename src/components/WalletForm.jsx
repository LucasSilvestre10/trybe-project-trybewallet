import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getCurrencies from '../services/apiCurrencies';
import { actionSetCurrencies } from '../redux/actions';

class WalletForm extends Component {
  state = {
    expenses: '',
    description: '',
    currencies: [],
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

  render() {
    const { expenses, description, currencies } = this.state;
    return (
      <main>
        <input
          data-testid="value-input"
          placeholder="Valor"
          type="number"
          name="expenses"
          value={ expenses }
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
          name="currencies"
          id="currencies"
          data-testid="currency-input"
        >
          {currencies.map((coin) => <option key={ coin } value={ coin }>{coin}</option>)}
        </select>
        <select
          name="method"
          id="method"
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          name="tag"
          id="tag"
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

      </main>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(WalletForm);
