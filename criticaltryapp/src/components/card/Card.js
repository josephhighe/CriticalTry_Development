import React from "react";

import "../../styles/Card.css";
import { optionalAdd } from "../../utils/ObjectUtil";

const CardIds = {
  CARD_ROOT_PREFIX: "card-root-",
  CARD_BODY_PREFIX: "card-body-",
};

const CardCss = {
  ROOT_CLASS: "card-root text-center",
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
 var rootClass = null;

  if (props.style && props.style.background) {
    rootClass = rootClass = optionalAdd(
      `${CardCss.ROOT_CLASS} `, 
      props.className
      );
  }
  else {    
    rootClass = optionalAdd(
    `${CardCss.ROOT_CLASS} ${CardCss.DEF_BACKGROUND_COLOR} `, 
    props.className
    );
    
  }

  const inner = props.children ? props.children : "";

  return (
    <div {...props} id={CardIds.CARD_ROOT_PREFIX + props.id} className={rootClass}>
      <div id={CardIds.CARD_BODY_PREFIX + props.id} className={CardCss.BODY_CLASS}>{inner}</div>
    </div>
  );
}

export default Card;
