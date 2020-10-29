import React from "react";
import SignInComponent, { SignInType } from "../components/SignInComponent";

function SignInPage() {
  return <SignInComponent signInType={SignInType.LOGIN}/>
}

export default SignInPage;
