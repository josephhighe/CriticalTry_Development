import React, { Component } from "react";
import LoginComponent from "../components/LoginComponent";

class LoginPage extends Component {
  state = {};

  render() {
    return (
      <div className="text-center">
        <br />
        <LoginComponent className="center" />
      </div>
    );
  }
}

export default LoginPage;
