import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../styles/Card.css";

const Card = ({title, subtitle, image}) => {
  return (
    <div className="Card">
      <FontAwesomeIcon className="Card__play" icon={faCirclePlay} />
      <img
        className="Card__image"
        src={image}
        alt={title}
      />
      <div className="Card__heading">
        <h2 className="Card__heading__name">{title}</h2>
        <h3 className="Card__heading__type">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Card;
