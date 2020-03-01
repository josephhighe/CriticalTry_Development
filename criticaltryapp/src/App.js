import React from "react";
import "./pages/LoginPage";
import { Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Pages } from "./utils/RoutingUtil";

function App() {
  return (
    <div className="main bg-dark">
      <Switch>
        <Route path={Pages.LANDING} exact component={LandingPage} />
        <Route path={Pages.LOGIN} component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
