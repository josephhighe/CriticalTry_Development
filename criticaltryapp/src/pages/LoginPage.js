import React, { Component } from "react";
import LoginComponent from "../components/LoginComponent";
import "../styles/LoginPage.css";

class LoginPage extends Component {
  state = {};

  render() {
    return (
      <div id="loginComponent" className="text-center bg-dark">
        <LoginComponent className="center" />
      </div>
    );
  }
}

export default LoginPage;
