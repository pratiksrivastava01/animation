// components/MusicPlayer.js
"use client";

import React, { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("background-audio");

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio id="background-audio" loop>
        <source src="/assets/MusicPlayer.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={toggleMusic}>
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default MusicPlayer;
