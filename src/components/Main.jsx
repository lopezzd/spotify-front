import React from "react";

// Components

import Galery from "./Galery";

// Styles

import "../styles/Main.css";

// Data Base

import artists from "../database/artists.json";
import songs from "../database/songs.json";
import albums from "../database/albums.json";

const Main = () => {
  return (
    <main className="main">
      <Galery
        title={`Artistas Populares`}
        min={5}
        max={10}
        array={artists}
        type={`artist`}
      />
      <Galery
        title={`Albuns Populares`}
        min={5}
        max={10}
        array={albums}
        type={`album`}
      />
      <Galery
        title={`Músicas Populares`}
        min={5}
        max={10}
        array={songs}
        type={`song`}
      />
    </main>
  );
};

export default Main;
