import React from "react";

export const ID_PREFIX = "label-";

function LabelComponent(props) {
  //id of element this label is for
  const id = props.id;

  //values for this label
  const labelId = ID_PREFIX + id;

  //classname, allow additional classes
  const defaultClass = "label-msg compact ";
  const className = props.className
    ? defaultClass + props.className
    : defaultClass;

  //the inner html for label (typically just text)
  const inner = props.children;

  return inner ? (
    <label id={labelId} className={className} htmlFor={id}>
      {inner}:
    </label>
  ) : (
    ""
  );
}

export default LabelComponent;
