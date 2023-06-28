import React, { useState } from "react";
import style from "./Settings.module.css";

import BackgroundLoader from "../BackgroundLoader/BackgroundLoader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

function Settings({ BackgroundImgCallback }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const report = () => {
    alert("Contuct us in discord => Destwood");
  };

  return (
    <div className={style.settings}>
      <button
        onClick={handleMenuToggle}
        className={`${style.icon} ${isMenuOpen ? style.active : ""}`}
      >
        <FontAwesomeIcon icon={faCog} />
      </button>
      {isMenuOpen && (
        <ul className={style.settingsMenu}>
          <li className={style.menuItem}>
            <button className={style.menuButton}>
              <BackgroundLoader onImgLoaded={BackgroundImgCallback} />
            </button>
          </li>
          <li className={style.menuItem}>
            <button className={style.menuButton}>Playlist</button>
          </li>
          <li className={style.menuItem}>
            <button className={style.menuButton} onClick={report}>
              Report
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Settings;
