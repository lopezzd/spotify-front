import React from "react";
import SpotifyLogo from '../assets/spotify-logo.png'
import '../styles/Header.css'

const Header = () => {

  return (
    <header className="header">
        <img className="header_image" src={SpotifyLogo} alt="Logo Spotify" />

        <a className="header__link" href="/" target="_parent">
            <h1>Spotify</h1>
        </a>
    </header>
)

}

export default Header;