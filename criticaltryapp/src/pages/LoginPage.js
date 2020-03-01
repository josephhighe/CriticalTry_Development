import React, { Component } from "react";
import LoginComponentFunc from "../components/LoginComponent";
import "../styles/LoginPage.css";

class LoginPage extends Component {
  state = {};

  render() {
    return (
      <div id="loginComponent" className="text-center bg-dark">
        <LoginComponentFunc />
      </div>
    );
  }
}

export default LoginPage;
