import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {};

  render() {
    const { email } = this.props;
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
            0

          </p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,

});
export default connect(mapStateToProps)(Header);
