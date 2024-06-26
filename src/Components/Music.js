// App.js
import React, { useState } from "react";
// import "./App.css";

function MusicApp() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Track 1",
      src: "Illuminati.mp3",
    },
    {
      id: 2,
      title: "Track 2",
      src: "Odimaga.mp3",
    },
    // Add more tracks here
  ];

  const playTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const pauseTrack = () => {
    setIsPlaying(false);
  };

  const skipTrack = () => {
    const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % tracks.length;
    setCurrentTrack(tracks[nextIndex]);
    setIsPlaying(true);
  };

  return (
    <div className="App1">
      <h1>Music Player App</h1>
      <div>
        <h2>Now Playing: {currentTrack ? currentTrack.title : "No track selected"}</h2>
        {isPlaying ? (
          <button className="buttons" onClick={pauseTrack}>Pause</button>
        ) : (
          <button className="buttons" onClick={() => playTrack(tracks[0])}>Play</button>
        )}
        <button className="buttons" onClick={skipTrack}>Skip Track</button>
      </div>
    </div>
  );
}

export default MusicApp;
