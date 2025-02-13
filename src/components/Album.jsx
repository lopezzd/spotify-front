import React from "react";
import songsArray from "../database/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../styles/Album.css";

const Album = ({name, artist, year, image}) => {
  return (
    <div className="Album-card">
      <FontAwesomeIcon className="Album-card__play" icon={faCirclePlay} />
      <img
        className="Album-card__image"
        src={image}
        alt={`Album: ${name}`}
      />
      <div className="Album-card__heading">
        <h2 className="Album-card__heading__name">{name}</h2>
        <h3 className="Album-card__heading__type">{`${year} • ${artist}`}</h3>
      </div>
    </div>
  );
};

export default Album;
