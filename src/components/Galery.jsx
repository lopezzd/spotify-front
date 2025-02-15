import React, { useState } from "react";
import "../styles/Galery.css";

import Card from "./Card";

const Galery = ({ title, min, max, array, type }) => {
  const [items, setItems] = useState(min);

  const showMore = () => setItems(max);
  const showLess = () => setItems(min);

  const renderCards = () => {
    switch (type) {
      case "artist":
        return array.slice(0, items).map((artist, index) => (
          <Card
            key={index}
            title={artist.name}
            subtitle={artist.type}
            image={artist.image}
          />
        ));

      case "album":
        return array.slice(0, items).map((album, index) => (
          <Card
            key={index}
            title={album.name}
            subtitle={`${album.year} • ${album.artist}`}
            image={album.image}
          />
        ));

      case "song":
        return array.slice(0, items).map((song, index) => (
          <Card
          key={index}
          title={song.name}
          subtitle={song.artist}
          image={song.image}
          />
        ));

        case "playlist":
          return array.slice(0, items).map((playlist, index) => (
            <Card
            key={index}
            title={``}
            subtitle={`${playlist.year} • ${playlist.artist}`}
            image={playlist.image}
          />
          ));

      default:
        return null;
    }
  };

  return (
    <section className="galery">
      <div className="galery-header">
        <h2 className="galery-header__title">{title}</h2>
        <button
          className="galery-header__button"
          onClick={items === min ? showMore : showLess}
        >
          {items === min ? "Mostrar mais" : "Mostrar menos"}
        </button>
      </div>
      <div className="galery-list__list">{renderCards()}</div>
    </section>
  );
};

export default Galery;
