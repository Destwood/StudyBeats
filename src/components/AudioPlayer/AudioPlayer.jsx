import React, { useState, useEffect, useRef } from "react";
import style from "./AudioPlayer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.volume = 0.1;

    const updateProgress = () => {
      setProgress((audioElement.currentTime / audioElement.duration) * 100);
    };

    isPlaying ? audioElement.play() : audioElement.pause();

    audioElement.addEventListener("timeupdate", updateProgress);
    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = () => {
    const audioElement = audioRef.current;
    const newProgress = parseInt(progressRef.current.value);
    audioElement.currentTime = (newProgress / 100) * audioElement.duration;
    setProgress(newProgress);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.AudioPlayer}>
        {/* <button className={style.playButton} onClick={togglePlay}>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <div>
          <input
            type="range"
            value={progress}
            onChange={handleProgressChange}
            ref={progressRef}
            className={style.progress}
          />
        </div> */}
        <iframe
          className={style.spotifyPlayer}
          src="https://open.spotify.com/embed/playlist/75zNFVHwxiMEwecjLPfFEK?utm_source=generator"
          volume="0.2"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          loading="lazy"
        ></iframe>
        <audio ref={audioRef} src={audioSrc} />
      </div>
    </div>
  );
};

export default AudioPlayer;
