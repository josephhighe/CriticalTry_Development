import React from "react";
import { optionalAdd } from "../../utils/ObjectUtil";

const ErrorComponentIds = {
  PREFIX: "error-",
};

const ErrorComponentCss = {
  DEFAULT_CLASS: "error-msg text-danger",
};

function ErrorComponent(props) {
  //id of element this error is for
  const id = props.id;

  //values for this error
  const errorId = ErrorComponentIds.PREFIX + id;

  //classname, allow additional classes
  const className = optionalAdd(`${ErrorComponentCss} `, props.className);

  //the inner html for error (typically just text)
  const inner = props.children;

  //if the error is currently enabled
  const enabled = inner && true === props.enable;

  return enabled ? (
    <div id={errorId} className={className}>
      {inner}
    </div>
  ) : (
    ""
  );
}

export default ErrorComponent;
