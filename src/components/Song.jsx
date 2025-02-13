import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../styles/Song.css";

const Song = ({name, artist, image}) => {
  return (
    <div className="song-card">
      <FontAwesomeIcon className="song-card__play" icon={faCirclePlay} />
      <img
        className="song-card__image"
        src={`${image}`}
        alt={`Song: ${name}`}
      />
      <div className="song-card__heading">
        <h2 className="song-card__heading__name">{name}</h2>
        <h3 className="song-card__heading__type">{artist}</h3>
      </div>
    </div>
  );
};

export default Song;
