import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const amount = expenses
      .reduce((acc, curr) => (
        acc + (curr.value * curr.exchangeRates[curr.currency].ask)), 0);
    return (
      <header>
        <div>
          <p
            data-testid="email-field"
          >
            {email}

          </p>
          <p
            data-testid="total-field"
          >
            {amount.toFixed(2)}

          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});
export default connect(mapStateToProps)(Header);
