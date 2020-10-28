import React, { Component } from "react";
import { connect } from "react-redux";

import { PLACEHOLDER_ACCOUNT } from "../state/models/UserAccount";
import { LoginAction } from "../state/actions/LoginAction";
import RoutingUtil, { Pages } from "../utils/RoutingUtil";
import InputComponent, { InputTypes } from "./inputcomponent/InputComponent";
import Card from "./card/Card";

import { Link } from "react-router-dom";

const RegistrationComponentIds = {
  FIRST_NAME: "firstname",
  LAST_NAME: "lastname",
  EMAIL: "email",
  PASSWORD_ONE: "password",
  PASSWORD_TWO: "password-two",
  REGISTRATION_BUTTON: "registration-btn",
  ROOT_ID_SUFFIX: "registration-component",
};

const RegistrationComponentCss = {
  ROW_CLASS: "row",
  COLUMN_CLASS: "col-sm-6 col-xs-12",
  EMAIL_COLUMN_CLASS: "col-sm-12 col-xs-12",
  REGISTRATION_BUTTON_CLASS: "btn btn-primary btn-smooth",
};

//placeholder account information to display
const USER = PLACEHOLDER_ACCOUNT;

//TODO set up better error messages (more descriptive)

class RegistrationComponent extends Component {
  state = {
    redirect: false,
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

    return (
      <Card id={RegistrationComponentIds.REGISTRATION_BUTTON}>
        <h2>Register New Account</h2>
        <hr />

        <div className="container-fluid">
          <p className="inline-block">Already have an account?</p>
          &nbsp;
          <Link className="inline-block" to={Pages.LOGIN}>
            Login here!
          </Link>
        </div>
        <br />

        <div className={RegistrationComponentCss.ROW_CLASS}>
          <div className={RegistrationComponentCss.EMAIL_COLUMN_CLASS}>
            <InputComponent
              id={RegistrationComponentIds.EMAIL}
              label="Email"
              hint="(Don't worry, we WILL sell your email for monies.)"
              error="Invalid email"
              placeholder={USER.username}
              onTextChangeCallback={this.onEmailChange.bind(this)}
            />
          </div>
        </div>

        <br />

        <div className={RegistrationComponentCss.ROW_CLASS}>
          <div className={RegistrationComponentCss.COLUMN_CLASS}>
            <InputComponent
              id={RegistrationComponentIds.FIRST_NAME}
              label="First name"
              error="Invalid first name"
              placeholder={USER.first}
              onTextChangeCallback={this.onFirstChange.bind(this)}
            />
          </div>

          <div className={RegistrationComponentCss.COLUMN_CLASS}>
            <InputComponent
              id={RegistrationComponentIds.LAST_NAME}
              label="Last name"
              error="Invalid last name"
              placeholder={USER.last}
              onTextChangeCallback={this.onLastChange.bind(this)}
            />
          </div>
        </div>

        <br />

        <div className={RegistrationComponentCss.ROW_CLASS}>
          <div className={RegistrationComponentCss.COLUMN_CLASS}>
            <InputComponent
              id={RegistrationComponentIds.PASSWORD_ONE}
              type={InputTypes.PASSWORD}
              label="Password"
              error="Invalid password"
              placeholder={USER.pass}
              onTextChangeCallback={this.onPasswordChange.bind(this)}
            />
          </div>
          <div className={RegistrationComponentCss.COLUMN_CLASS}>
            <InputComponent
              id={RegistrationComponentIds.PASSWORD_TWO}
              type={InputTypes.PASSWORD}
              label="Re-enter password"
              error="Invalid password"
              placeholder={USER.pass}
              onTextChangeCallback={this.onPasswordTwoChange.bind(this)}
            />
          </div>
        </div>

        <br />

        <button
          id={RegistrationComponentIds.REGISTRATION_BUTTON}
          type={InputTypes.BUTTON}
          className={RegistrationComponentCss.REGISTRATION_BUTTON_CLASS}
          onClick={this.register.bind(this)}
        >
          Register
        </button>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.AccountReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(LoginAction(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationComponent);
