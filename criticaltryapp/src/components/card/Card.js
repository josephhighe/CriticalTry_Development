import React from "react";

import "../../styles/Card.css";

export const ID_PREFIX = "card-";
export const ROOT_CLASS = "card-root";
export const BACKGROUND_CLASS = "card-background";
export const BODY_CLASS = "card-body";

const DEF_COLOR = "bg-info";

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
  const rootClass = "text-center card-root";

  const color = props.color ? props.color : DEF_COLOR;
  const defaultCard = color + " card container-fluid card-background ";
  const cardClass = props.className
    ? defaultCard + props.className
    : defaultCard;

  const bodyClass = "card-body";

  const inner = props.children ? props.children : "";

  return (
    <div id={ID_PREFIX + props.id} className={rootClass}>
      <div className={cardClass}>
        <div className={bodyClass}>{inner}</div>
      </div>
    </div>
  );
}

export default Card;
