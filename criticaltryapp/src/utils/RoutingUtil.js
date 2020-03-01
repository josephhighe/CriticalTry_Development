import React from "react";
import { Redirect } from "react-router-dom";

class RoutingUtil {
  static redirect(path) {
    return <Redirect to={path} />;
  }

  static landingPage() {
    return "/";
  }
  static toLandingPage() {
    return this.redirect(this.landingPage());
  }

  static loginPage() {
    return "/login";
  }
  static toLoginPage() {
    return this.redirect(this.loginPage());
  }
}

export default RoutingUtil;
