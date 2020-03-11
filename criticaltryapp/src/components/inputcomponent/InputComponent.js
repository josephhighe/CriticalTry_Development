import React, { Component } from "react";

import LabelComponent from "./LabelComponent";

import "../../styles/InputComponent.css";
import ErrorComponent from "./ErrorComponent";
import HintComponent from "./HintComponent";

class InputComponent extends Component {
  state = {
    enableError: this.props.enableError
  };

  onTextChange = function(event) {
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
    const type = this.props.type ? this.props.type : "text";

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
