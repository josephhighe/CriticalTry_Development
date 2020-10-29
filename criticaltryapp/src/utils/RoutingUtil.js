import React from "react";
import { Redirect } from "react-router-dom";

export const Pages = {
  LANDING: "/",
  LOGIN: "/login",
  REGISTRATION: "/registration",
  SIGN_IN: "/signin"
};

class RoutingUtil {
  static redirect(path) {
    return <Redirect to={path} />;
  }

  static toLandingPage() {
    return this.redirect(Pages.LANDING);
  }

  static toSignInPage() {
    return this.redirect(Pages.SIGN_IN);
  }

  static toLoginPage() {
    return this.redirect(Pages.LOGIN);
  }

  static toRegistration() {
    return this.redirect(Pages.REGISTRATION);
  }
}

export default RoutingUtil;
