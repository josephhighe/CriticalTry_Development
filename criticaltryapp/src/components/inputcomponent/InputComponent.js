import React, { Component } from "react";

import LabelComponent from "./LabelComponent";

import "../../styles/InputComponent.css";
import ErrorComponent from "./ErrorComponent";
import HintComponent from "./HintComponent";

/**
 * Common input element types. A full list can be found:
 * https://www.w3schools.com/html/html_form_input_types.asp
 */
export const InputTypes = {
  BUTTON: "button",
  DATE: "date",
  EMAIL: "email",
  HIDDEN: "hidden",
  NUMBER: "number",
  PASSWORD: "password",
  RADIO: "radio",
  RANGE: "range",
  SEARCH: "search",
  SUBMIT: "submit",
  TELEPHONE: "tel",
  TEXT: "text",
  TIME: "time",
  URL: "url",
};

/**
 * Component class to represent an input element.
 * Provides hint, label, and error text elements to provide user with more information.
 */
class InputComponent extends Component {
  state = {
    enableError: this.props.enableError,
  };

  onTextChange = function (event) {
    this.props.onTextChangeCallback(event);
  };

  setError(bValue) {
    this.setState({ enableError: bValue });
  }

  enableError() {
    this.setError(true);
  }

  hideError() {
    this.setError(false);
  }

  render() {
    //ids
    const id = this.props.id;

    //classes
    const inputClass = "form-control ";
    const formGroupClass = "form-group ";
    const rootClass = this.props.className
      ? formGroupClass + this.props.className
      : formGroupClass;

    //input element type
    const type = this.props.type ? this.props.type : InputTypes.TEXT;

    return (
      <div className={rootClass}>
        <LabelComponent id={id}>{this.props.label}</LabelComponent>

        <input
          type={type}
          className={inputClass}
          id={id}
          placeholder={this.props.placeholder}
          onChange={this.onTextChange.bind(this)}
        />

        <HintComponent id={id}>{this.props.hint}</HintComponent>

        <ErrorComponent id={id} enable={this.state.enableError}>
          {this.props.error}
        </ErrorComponent>
      </div>
    );
  }
}
export default InputComponent;
