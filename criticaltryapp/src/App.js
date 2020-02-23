import React from "react";
import "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <head></head>
        <body className="bg-dark">
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
