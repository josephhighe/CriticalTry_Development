import React, { Component } from "react";
import { connect } from "react-redux";

import { LoginAction } from "../state/actions/LoginAction";
import RoutingUtil from "../utils/RoutingUtil";
import "../styles/LoginComponent.css";
import InputComponent from "./InputComponent";

export const usernameId = "username";
export const passwordId = "password";
export const loginBtnId = "login-btn";

class LoginComponent extends Component {
  state = {
    redirect: false
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
      isAccountLocked: user.isAccountLocked()
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

    const formClass = "card login-card bg-info center " + this.props.className;

    return (
      <form onSubmit={this.login.bind(this)}>
        <div className={formClass}>
          <div className="card-body">
            <h2>Critical Try Login</h2>
            <hr />
            <br />

            <InputComponent
              id={usernameId}
              labelText="Name"
              placeholder="Bobbert"
              error="Invalid username"
              onTextChangeCallback={this.onUsernameChange.bind(this)}
            />

            <br />

            <InputComponent
              id={passwordId}
              type="password"
              labelText="Password"
              placeholder="Bobbert123"
              error="Invalid password"
              onTextChangeCallback={this.onPasswordChange.bind(this)}
            />

            <br />

            <button
              id={loginBtnId}
              type="button"
              className="btn btn-primary"
              onClick={this.login.bind(this)}
            >
              Login
            </button>
          </div>
        </div>
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
