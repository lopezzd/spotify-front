import React from "react";
import songsArray from "../database/songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import "../styles/Song.css";

const Song = () => {
  const handleClick = () => {
    console.table(songsArray);
  };

  return (
    <div className="song-card">
      <FontAwesomeIcon className="song-card__play" icon={faCirclePlay} />
      <img
        className="song-card__image"
        src={`${songsArray[0].image}`}
        alt={`Songa: ${songsArray[0].name}`}
      />
      <div className="song-card__heading">
        <h2 className="song-card__heading__name">{songsArray[0].song}</h2>
        <h3 className="song-card__heading__type">{songsArray[0].name}</h3>
      </div>
    </div>
  );
};

export default Song;