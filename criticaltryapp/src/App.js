import React from "react";
import "./pages/LoginPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RoutingUtil from "./utils/RoutingUtil";

function App() {
  return (
    <div className="main bg-dark">
      <Switch>
        <Route path={RoutingUtil.landingPage()} exact component={LandingPage} />
        <Route path={RoutingUtil.loginPage()} component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
