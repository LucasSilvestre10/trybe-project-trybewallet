import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionDeleteExpenses, actionEditExpenses } from '../redux/actions';

class Table extends React.Component {
  deleteExpense = (element) => {
    const { expenses, dispatch } = this.props;
    // console.log('target vem como string', element.target.id);
    // console.log('target agora em number', +element.target.id);
    const result = expenses.filter((e) => e.id !== +element.target.id);
    dispatch(actionDeleteExpenses(result));
  };

  editeExpenses = (element) => {
    console.log('deu certo');
    const { dispatch } = this.props;
    dispatch(actionEditExpenses(+element.target.id));
  };

  /* shouldComponentUpdate() {

  } */

  render() {
    const { expenses } = this.props;
    return (
      <main>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
        </table>
        <tbody>
          {expenses.map(({
            id,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates,
          }) => (
            <tr
              key={ id }
            >
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ Number(value).toFixed(2) }</td>
              <td>{ exchangeRates[currency].name }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>{ Number(exchangeRates[currency].ask * value).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  id={ id }
                  name="edit"
                  type="button"
                  onClick={ this.editeExpenses }
                  data-testid="edit-btn"
                >
                  Editar
                </button>
                <button
                  id={ id }
                  onClick={ this.deleteExpense }
                  name="delete"
                  type="button"
                  data-testid="delete-btn"
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </main>
    );
  }
}

Table.propTypes = {

  expenses: PropTypes.arrayOf.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
