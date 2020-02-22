import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  state = {};

  render() {
    return (
      <div className="text-center">
        <h1>This is the landing page for our dope ass website</h1>
        <br />
        <Link to="/login" className="center-block">
          <button className="btn btn-primary btn-xl text-uppercase center-block">
            Click to login
          </button>
        </Link>
      </div>
    );
  }
}

export default LandingPage;
