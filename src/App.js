import React, { useState } from "react";
import "./App.css";
import Settings from "./components/Settings/Settings";
import Timer from "./components/Timer/Timer";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import SwitcherMode from "./components/SwitcherMode/SwitcherMode";
import Author from "./components/Author/Author";
import Tasks from "./components/Tasks/Tasks";

import defaultImg from "./assets/img/exmpl.jpg";
import defaultSong from "./assets/audio/wunsche_birds.mp3";

function App() {
  const [currentImg, setCurrentImg] = useState(defaultImg);

  const handleReset = () => {
    setCurrentImg(defaultImg);
  };
  const handleImgLodaed = (image) => {
    setCurrentImg(image);
  };

  const [value, setValue] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${currentImg})`,
      }}
    >
      <div className="contentWrapper">
        {/* select visible element */}
        <SwitcherMode onChange={handleChange} />

        {/* main content */}
        {/* style used to prevent unmounting elements */}
        <main>
          <div
            style={{
              visibility: value ? "hidden" : "visible",
              position: value ? "absolute" : "inherit",
            }}
          >
            <Timer />
          </div>
          <div
            style={{
              visibility: !value ? "hidden" : "visible",
              position: !value ? "absolute" : "inherit",
            }}
          >
            <AudioPlayer audioSrc={defaultSong} />
          </div>
        </main>
        <Tasks />
        <p>footer</p>
      </div>
      <Author />
      <Settings BackgroundImgCallback={handleImgLodaed} reset={handleReset} />
    </div>
  );
}

export default App;
