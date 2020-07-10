import React from "react";
import { Redirect } from "react-router-dom";

export const Pages = {
  LANDING: "/",
  LOGIN: "/login"
};

class RoutingUtil {
  static redirect(path) {
    return <Redirect to={path} />;
  }

  static toLandingPage() {
    return this.redirect(Pages.LANDING);
  }

  static toLoginPage() {
    return this.redirect(Pages.LOGIN);
  }
}

export default RoutingUtil;
