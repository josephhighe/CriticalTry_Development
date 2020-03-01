import React from "react";
import { useDispatch } from "react-redux";
import LoginComponent from "../components/LoginComponent";
import { LoginAction } from "../state/actions/LoginAction";
import "../styles/LoginPage.css";

function LoginPage() {
  const dispatch = useDispatch();

  return (
    <div id="loginComponent" className="text-center bg-dark">
      <LoginComponent
        loginHook={user => {
          dispatch(LoginAction(user));
        }}
      />
    </div>
  );
}

export default LoginPage;
