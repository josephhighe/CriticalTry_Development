import React from "react";

export const ID_PREFIX = "hint-";

function HintComponent(props) {
  //id of element this hint is for
  const id = props.id;

  //values for this hint
  const hintId = ID_PREFIX + id;

  //classname, allow additional classes
  const defaultClass = "hint-msg compact ";
  const className = props.className
    ? defaultClass + props.className
    : defaultClass;

  //the inner html for hint (typically just text)
  const inner = props.children;

  return inner ? (
    <div id={hintId} className={className}>
      {inner}
    </div>
  ) : (
    ""
  );
}

export default HintComponent;
