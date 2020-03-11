import React from "react";

export const ID_PREFIX = "error-";

function ErrorComponent(props) {
  //id of element this error is for
  const id = props.id;

  //values for this error
  const errorId = ID_PREFIX + id;

  //classname, allow additional classes
  const defaultClass = "error-msg text-danger ";
  const className = props.className
    ? defaultClass + props.className
    : defaultClass;

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
