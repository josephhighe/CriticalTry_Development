import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import RoutingUtil, { Pages } from "../utils/RoutingUtil";
import { PLACEHOLDER_ACCOUNT } from "../state/models/UserAccount";
import { LoginAction } from "../state/actions/LoginAction";
import Card from "./card/Card";
import InputComponent from "./inputcomponent/InputComponent";

const LoginComponentIds = {
  ROOT_PREFIX: "login-component",
  USERNAME: "username",
  PASSWORD: "password",
  LOGIN_BUTTON: "login-btn",
};

//placeholder account information to display
const USER = PLACEHOLDER_ACCOUNT;

//TODO make better error messages

class LoginComponent extends Component {
  state = {
    redirect: false,
  };

  login(event) {
    //grab user, should never be invalid based on how redux works
    let user = this.props.user;

    //update user information
    let username = this.state.username;
    let password = this.state.password;
    user.initDef(username, password);

    //dispatch login action
    this.props.login(user);

    //update state
    this.setState(() => ({
      redirect: user.isLoggedIn(),
      isAccountLocked: user.isAccountLocked(),
    }));

    //TODO handle show errors
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    if (this.state.redirect === true) {
      return RoutingUtil.toLandingPage();
    }

    //TODO handle account being locked

    return (
      <Card id={LoginComponentIds.ROOT_PREFIX}>
        <h2>Critical Try Login</h2>
        <hr />

        <div className="container-fluid">
          <p className="inline-block">Don't have an account?</p>
          &nbsp;
          <Link className="inline-block" to={Pages.REGISTRATION}>
            Create one!
          </Link>
        </div>
        <br />

        <InputComponent
          id={LoginComponentIds.USERNAME}
          label="Name"
          error="Invalid username"
          placeholder={USER.username}
          onTextChangeCallback={this.onUsernameChange.bind(this)}
        />

        <br />

        <InputComponent
          id={LoginComponentIds.PASSWORD}
          type="password"
          label="Password"
          error="Invalid password"
          placeholder={USER.pass}
          onTextChangeCallback={this.onPasswordChange.bind(this)}
        />

        <br />

        <button
          id={LoginComponentIds.LOGIN_BUTTON}
          type="button"
          className="btn-smooth btn btn-primary"
          onClick={this.login.bind(this)}
        >
          Login
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
