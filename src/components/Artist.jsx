import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../styles/Artist.css";


const Artist = ({name, image, type}) => {

  return (
    <div className="musician-card">
      <FontAwesomeIcon className="musician-card__play" icon={faCirclePlay} />
      <img
        className="musician-card__image"
        src={`${image}`}
        alt={`Artista: ${name}`}
      />
      <div className="musician-card__heading">
        <h2 className="musician-card__heading__name">{name}</h2>
        <h3 className="musician-card__heading__type">{type}</h3>
      </div>
    </div>
  );
};

export default Artist;
