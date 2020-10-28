import React from "react";
import { optionalAdd } from "../../utils/ObjectUtil";

const LabelComponentIds = {
  PREFIX: "label-",
};

const LabelComponentCss = {
  DEFAULT: "label-msg compact",
};

function LabelComponent(props) {
  //id of element this label is for
  const id = props.id;

  //values for this label
  const labelId = LabelComponentIds.PREFIX + id;

  //classname, allow additional classes
  const className = optionalAdd(
    `${LabelComponentCss.DEFAULT} `,
    props.className
  );

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
