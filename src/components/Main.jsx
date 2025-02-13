import React from "react";
import Artist from '../components/Artist'
import Song from '../components/Song'
import '../styles/Main.css'

const Main = () => {

  return (
    <main className="main">
        <div className="musician-list">
            <div className="musician-list__header">
                <h2 className="">Artistas populares</h2>
                <a className="musician-list_link" href="/">Mostrar mais</a >
            </div>
            <div>
                <Artist />
                <Song />
            </div>
        </div>
    </main>
)

}

export default Main;