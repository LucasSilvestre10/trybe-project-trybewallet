import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionLogin } from '../redux/actions';

const MIN_PARAM = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isError: true,
  };

  setNewState = (element) => {
    const { value, name } = element.target;
    this.setState({ [name]: value }, this.validateForm);
  };

  validateForm = () => {
    const { password, email } = this.state;
    let error = 0;

    if (email.length < MIN_PARAM) {
      error += 1;
    }
    if (password.length < MIN_PARAM) {
      error += 1;
    }
    const re = /\S+@\S+\.\S+/;
    const result = re.test(email);
    if (result === false) {
      error += 1;
    }
    if (error === 0) {
      this.setState({ isError: false });
    }
    if (error >= 1) {
      this.setState({ isError: true });
    }
  };

  submitData = (element) => {
    const { email } = this.state;
    const { dispatch, history } = this.props;
    element.preventDefault();
    dispatch(actionLogin(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, isError } = this.state;
    return (
      <main>
        <form>
          <input
            type="text"
            data-testid="email-input"
            name="email"
            value={ email }
            placeholder="Email"
            onChange={ this.setNewState }

          />
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            placeholder="Password"
            onChange={ this.setNewState }

          />
          <button
            type="submit"
            onClick={ this.submitData }
            disabled={ isError }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}
Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});
export default connect(mapStateToProps)(Login);
