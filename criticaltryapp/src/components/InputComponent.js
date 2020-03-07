import React, { Component } from "react";
import "../styles/InputComponent.css";

class InputComponent extends Component {
  onTextChange(event) {
    this.props.onTextChangeCallback(event);
  }

  displayError() {}

  hideError() {}

  render() {
    const id = this.props.id;
    const labelId = "label-" + id;
    const errorId = "error-" + id;

    const inputClass = "form-control";
    const formGroupClass = "form-group";
    const type = this.props.type ? "text" : this.props.type;

    const label = this.props.labelText;
    const placeholder = this.props.placeholder;
    const error = this.props.error;
    const enableError = error && this.props.enableError;

    return (
      <div className={formGroupClass}>
        {label ? (
          <label id={labelId} className="compact" htmlFor={id}>
            {label}:
          </label>
        ) : (
          ""
        )}

        <input
          type={type}
          className={inputClass}
          id={id}
          placeholder={placeholder}
          onChange={this.onTextChange.bind(this)}
        />

        {enableError ? (
          <div id={errorId} className="error-msg">
            {error}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default InputComponent;
