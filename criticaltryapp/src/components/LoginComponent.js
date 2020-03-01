import React, { Component } from "react";
import { useDispatch } from "react-redux";
import UserAccount from "../state/models/UserAccount";

import "../styles/LoginComponent.css";
import { LoginAction } from "../state/actions/LoginAction";

import RoutingUtil from "../utils/RoutingUtil";

class LoginComponent extends Component {
  state = {};

  constructor(props) {
    super(props);

    //hook used to login
    this.loginHook = props.loginHook;

    this.state.redirect = false;
  }

  login(event) {
    //create an account based upon the login creds
    let user = new UserAccount();
    user = user.initDef(this.state.username, this.state.password);

    console.log(user);

    //use loginHook
    this.loginHook(user);

    console.log(user);

    //if user successfully logged in
    if (user.isLoggedIn()) {
      this.setState(() => ({
        redirect: true
      }));
    }
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

    const inputClass = "form-control";
    const formGroupClass = "form-group";
    const formClass = "card login-card bg-info center " + this.props.className;

    return (
      <form onSubmit={this.login.bind(this)}>
        <div className={formClass}>
          <div className="card-body">
            <h2>Critical Try Login</h2>
            <hr />
            <br />

            <div className={formGroupClass}>
              <label className="compact">Name:</label>
              <input
                type="text"
                className={inputClass}
                id="usr"
                placeholder="Bobbert@bob.com"
                onChange={this.onUsernameChange.bind(this)}
              />
            </div>

            <br />

            <div className={formGroupClass}>
              <label className="compact">Password:</label>
              <input
                type="password"
                className={inputClass}
                id="pwd"
                placeholder="Bobbert123"
                onChange={this.onPasswordChange.bind(this)}
              />
            </div>

            <br />

            <button
              id="login-btn"
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

function LoginComponentFunc() {
  const dispatch = useDispatch();

  return (
    <LoginComponent
      loginHook={user => {
        dispatch(LoginAction(user));
      }}
    ></LoginComponent>
  );
}

// export default LoginComponent;
export default LoginComponentFunc;
