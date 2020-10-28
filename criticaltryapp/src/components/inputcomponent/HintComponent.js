import React from "react";
import { optionalAdd } from "../../utils/ObjectUtil";

const HintComponentIds = {
  PREFIX: "hint-",
};

const HintComponentCss = {
  DEFAULT: "hint-msg compact",
};

function HintComponent(props) {
  //id of element this hint is for
  const id = props.id;

  //values for this hint
  const hintId = HintComponentIds.PREFIX + id;

  //classname, allow additional classes
  const className = optionalAdd(
    `${HintComponentCss.DEFAULT} `,
    props.className
  );

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
