import React from "react";
import "./LoginPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import LandingPage from "./LandingPage";
import RegistrationPage from "./RegistrationPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import { Pages } from "../utils/RoutingUtil";

function App() {
  const backgroundColor = "bg-dark";

  return (
    <div className={"main " + backgroundColor}>
      <Switch>
        <Route path={Pages.LANDING} exact component={LandingPage} />
        <Route path={Pages.LOGIN} component={LoginPage} />
        <Route path={Pages.REGISTRATION} component={RegistrationPage} />
      </Switch>
    </div>
  );
}

export default App;
