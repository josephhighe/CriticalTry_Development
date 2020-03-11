import React, { Component } from "react";
import { connect } from "react-redux";

import { PLACEHOLDER_ACCOUNT } from "../state/models/UserAccount";
import { LoginAction } from "../state/actions/LoginAction";
import RoutingUtil, { Pages } from "../utils/RoutingUtil";
import InputComponent from "./inputcomponent/InputComponent";

import "../styles/RegistrationComponent.css";
import { Link } from "react-router-dom";

export const firstNameId = "firstname";
export const lastNameId = "lastname";
export const emailId = "email";
export const passwordId = "password";
export const passwordTwoId = "password-two";
export const registerBtnId = "login-btn";
export const ROOT_ID = "registration-component";

//placeholder account information to display
const USER = PLACEHOLDER_ACCOUNT;

//TODO set up better error messages (more descriptive)

class RegistrationComponent extends Component {
  state = {
    redirect: false
  };

  register(event) {
    //TODO handle initial error in input fields
    //TODO create account based on fields
    //TODO register account
    //TODO handle errors based upon server response
    //TODO redirect on success
  }

  onFirstChange(event) {
    this.setState({ firstName: event.target.value });
  }

  onLastChange(event) {
    this.setState({ lastName: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onPasswordTwoChange(event) {
    this.setState({ passwordTwo: event.target.value });
  }

  render() {
    if (this.state.redirect === true) {
      return RoutingUtil.toLandingPage();
    }

    const formClass =
      "card registration-card bg-info center " + this.props.className;
    const columnClass = "col-sm-6 col-xs-12";
    const emailColumnClass = "col-sm-12 col-xs-12";

    return (
      <div id={ROOT_ID} className="text-center">
        <form onSubmit={this.register.bind(this)}>
          <div className={formClass}>
            <div className="card-body">
              <h2>Register New Account</h2>
              <hr />
              <div>
                Already have an account?
                <Link to={Pages.LOGIN}> Login here!</Link>
              </div>

              <br />

              <div className="row">
                <div className={emailColumnClass}>
                  <InputComponent
                    id={emailId}
                    label="Email"
                    hint="(Don't worry, we WILL sell your email for monies.)"
                    error="Invalid email"
                    placeholder={USER.username}
                    onTextChangeCallback={this.onEmailChange.bind(this)}
                  />
                </div>
              </div>

              <br />

              <div className="row">
                <div className={columnClass}>
                  <InputComponent
                    id={firstNameId}
                    label="First name"
                    error="Invalid first name"
                    placeholder={USER.first}
                    onTextChangeCallback={this.onFirstChange.bind(this)}
                  />
                </div>

                <div className={columnClass}>
                  <InputComponent
                    id={lastNameId}
                    label="Last name"
                    error="Invalid last name"
                    placeholder={USER.last}
                    onTextChangeCallback={this.onLastChange.bind(this)}
                  />
                </div>
              </div>

              <br />

              <div className="row">
                <div className={columnClass}>
                  <InputComponent
                    id={passwordId}
                    type="password"
                    label="Password"
                    error="Invalid password"
                    placeholder={USER.pass}
                    onTextChangeCallback={this.onPasswordChange.bind(this)}
                  />
                </div>
                <div className={columnClass}>
                  <InputComponent
                    id={passwordTwoId}
                    type="password"
                    label="Re-enter password"
                    error="Invalid password"
                    placeholder={USER.pass}
                    onTextChangeCallback={this.onPasswordTwoChange.bind(this)}
                  />
                </div>
              </div>

              <br />

              <button
                id={registerBtnId}
                type="button"
                className="btn btn-primary btn-smooth"
                onClick={this.register.bind(this)}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.AccountReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(LoginAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComponent);
