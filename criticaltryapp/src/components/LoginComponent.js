import React, { Component } from "react";
import { connect } from "react-redux";

import { LoginAction } from "../state/actions/LoginAction";
import RoutingUtil from "../utils/RoutingUtil";
import "../styles/LoginComponent.css";

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
