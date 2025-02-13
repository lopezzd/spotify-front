import React from "react";

// Components

import Artist from "../components/Artist";
import Song from "../components/Song";
import Album from "../components/Album";

// Styles

import "../styles/Main.css";

// Data Base

import artistsArray from "../database/artists.json";
import songsArray from "../database/songs.json";
import albumsArray from "../database/albums.json";



const Main = () => {
  return (
    <main className="main">
      <div className="musician-list">
        <div className="musician-list__header">
          <h2 className="">Artistas populares</h2>
          <a className="musician-list__link" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="musician-list__list">
          {artistsArray.map((artist, index)=>(
            <Artist
            key={index}
            name={artist.name}
            image={artist.image}
            type={artist.type}
            />
          ))}
        </div>
      </div>
      <div className="song-list">
        <div className="song-list__header">
          <h2 className="">Ouvir denovo</h2>
          <a className="song-list__link" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="song-list__list">
        {songsArray.map((song, index)=>(
            <Song
            key={index}
            name={song.name}
            artist={song.artist}
            image={song.image}
            />
          ))}
        </div>
      </div>
      <div className="album-list">
        <div className="album-list__header">
          <h2 className="">Albums</h2>
          <a className="album-list__link" href="/">
            Mostrar tudo
          </a>
        </div>
        <div className="album-list__list">
        {albumsArray.map((album, index)=>(
            <Album
            key={index}
            name={album.name}
            year={album.year}
            artist={album.artist}
            image={album.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
