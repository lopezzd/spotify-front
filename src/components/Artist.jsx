import React from "react";
import songsArray from "../database/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../styles/Artist.css";

const Artist = () => {
  const handleClick = () => {
    console.table(songsArray);
  };

  return (
    <div className="musician-card">
      <FontAwesomeIcon className="musician-card__play" icon={faCirclePlay} />
      <img
        className="musician-card__image"
        src={`${songsArray[0].image}`}
        alt={`Artista: ${songsArray[0].name}`}
      />
      <div className="musician-card__heading">
        <h2 className="musician-card__heading__name">Machine Head</h2>
        <h3 className="musician-card__heading__type">Artista</h3>
      </div>
    </div>
  );
};

export default Artist;
