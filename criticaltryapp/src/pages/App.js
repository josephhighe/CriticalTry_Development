import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import { Pages } from "../utils/RoutingUtil";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import RegistrationPage from "./RegistrationPage";
import SignInPage from "./SignInPage";

function App() {
  const backgroundColor = "bg-dark";

  return (
    <div className={"main " + backgroundColor}>
      <Switch>
        <Route path={Pages.LANDING} exact component={LandingPage} />
        <Route path={Pages.LOGIN} component={LoginPage} />
        <Route path={Pages.REGISTRATION} component={RegistrationPage} />
        <Route path={Pages.SIGN_IN} component={SignInPage}/>
      </Switch>
    </div>
  );
}

export default App;
