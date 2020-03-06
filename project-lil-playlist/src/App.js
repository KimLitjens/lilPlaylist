import React from "react";
import "./App.css";
import SongOverview from "./songOverview";

const App = () => {
  return (
    <div className="app">
      <header className="songHeader">
        <h1> Winc lil' Playlist</h1>
      </header>
      <SongOverview />
    </div>
  );
};

export default App;
