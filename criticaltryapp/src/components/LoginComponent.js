import React, { Component } from "react";
import "../styles/LoginComponent.css";

class LoginComponent extends Component {
  state = {};
  render() {
    const inputClass = "form-control";
    const formGroupClass = "form-group";
    const formClass = "card login-card bg-info " + this.props.className;

    return (
      <form className={formClass}>
        <div className="card-body">
          <h2>Critical Try Login</h2>
          <hr />
          <br />

          <div className={formGroupClass}>
            <label className="compact" for="usr">
              Name:
            </label>
            <input type="text" className={inputClass} id="usr" />
          </div>

          <br />

          <div className={formGroupClass}>
            <label className="compact" for="pwd">
              Password:
            </label>
            <input type="password" className={inputClass} id="pwd" />
          </div>

          <br />

          <button id="login-btn" className="btn btn-primary">
            Login
          </button>
          <button id="register-btn" className="btn btn-secondary">
            Register
          </button>
        </div>
      </form>
    );
  }
}

export default LoginComponent;
