import React from "react";

import "../../styles/Card.css";
import { optionalAdd } from "../../utils/ObjectUtil";

const CardIds = {
  CARD_PREFIX: "card-",
};

const CardCss = {
  ROOT_CLASS: "card-root text-center",
  BACKGROUND_CLASS: "card-background container-fluid",
  BODY_CLASS: "card-body",
  DEF_BACKGROUND_COLOR: "bg-info",
};

/**
 * Nested as:
 *
 *  Root class
 *      Background class
 *          Body class
 *              innerHTML (given through props)
 *
 * @param {*} props
 *  color: background color for card
 *  className: background classes (appended to defaults)
 *  children: innerHTML
 *  id: id appended to root id prefix
 */

function Card(props) {
  const color = props.color ? props.color : CardCss.DEF_BACKGROUND_COLOR;
  const backgroundClass = optionalAdd(
    `${CardCss.BACKGROUND_CLASS} ${color} `,
    props.className
  );

  const inner = props.children ? props.children : "";

  return (
    <div id={CardIds.CARD_PREFIX + props.id} className={CardCss.ROOT_CLASS}>
      <div className={backgroundClass}>
        <div className={CardCss.BODY_CLASS}>{inner}</div>
      </div>
    </div>
  );
}

export default Card;
