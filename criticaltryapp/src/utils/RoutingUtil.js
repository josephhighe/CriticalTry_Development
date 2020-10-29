import React from "react";
import { Redirect } from "react-router-dom";

export const Pages = {
  LANDING: "/",
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
}

export default RoutingUtil;
