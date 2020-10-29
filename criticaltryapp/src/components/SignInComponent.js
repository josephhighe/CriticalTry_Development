import React, { Component } from "react";
import Card from "./card/Card";
import LoginComponent from "./LoginComponent";
import RegistrationComponent from "./RegistrationComponent";

export const SignInType = {
    LOGIN: "login",
    REGISTER: "register"
};

class SignInComponent extends Component {
    state = {
        signInType: this.props.signInType,
    };

    toggleSignInType(event) {
        var newSignInType = null
        switch (this.state.signInType) {
            case SignInType.REGISTER:
                newSignInType = SignInType.LOGIN;
                break;
            case SignInType.LOGIN:
            default:
                newSignInType = SignInType.REGISTER;
                break;
        }
        
        this.setState(() => ({
            signInType: newSignInType
        }));
    }

    getAlternateSignInOption() {
        var message = null;
        var alternateButton = null;

        switch (this.state.signInType) {
            case SignInType.LOGIN:
                message = "New to Critical Try?";
                alternateButton = "Register here!";
                break;
            case SignInType.REGISTER:
                message = "Already have an account?";
                alternateButton = "Login here!";
                break;
            default:
        }

        return (
            <div className="container-fluid">
                <br/>
                &nbsp;
                <p style={{display: "inline"}}>{message}</p>
                &nbsp;
                <button id="toggle-signin" className="link" onClick={this.toggleSignInType.bind(this)}>
                {alternateButton}
                </button>
            </div>
        );
    }

    getSignInOption() {
        switch (this.state.signInType) {
            case SignInType.LOGIN:
                return <LoginComponent/>
            case SignInType.REGISTER:
                return <RegistrationComponent/>
            default:
                return <p>Error, no sign in type provided</p>
        }
    }

    render() {   
        return (
            <span className="center-screen">
                <Card id="sign-component" style={{ background: "rgba(56,255,255,255)" }}>
                    {this.getSignInOption()}
                    {this.getAlternateSignInOption()}
                </Card>
            </span>
        );
    }
}

export default SignInComponent;