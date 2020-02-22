import React from "react";
import "./App.css";
import "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header></header>
        <body>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </body>
        <footer></footer>
      </div>
    </Router>
  );
}

export default App;
