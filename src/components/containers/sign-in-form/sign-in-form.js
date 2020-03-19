import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Operation} from "../../../reducer/user/reducer";
import {getAuthStatus} from "../../../reducer/user/selectors";

class SignInForm extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``
    };

    this._changeValueForm = this._changeValueForm.bind(this);
    this._submitHandler = this._submitHandler.bind(this);
  }

  _changeValueForm(e) {
    this.setState({
      [e.target.type]: e.target.value
    });
  }

  _submitHandler(e) {
    e.preventDefault();
    const {email, password} = this.state;
    this.props.onSubmit(email, password);
  }

  render() {
    return (
      <div className="sign-in user-page__content">
        <form onSubmit={this._submitHandler}
          action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                required={true}
                onChange={this._changeValueForm}
                value={this.state.email}
                className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email" />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                onChange={this._changeValueForm}
                value={this.state.password}
                className="sign-in__input" required={true} type="password" placeholder="Password" name="user-password"
                id="user-password" />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
    );
  }
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func
};

const mapStateToProps = (state) => ({
  status: getAuthStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (email, password) => {
    dispatch(Operation.loginUser(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
