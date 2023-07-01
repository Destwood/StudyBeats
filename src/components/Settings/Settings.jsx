import React, { useState } from "react";
import style from "./Settings.module.css";

import BackgroundLoader from "../BackgroundLoader/BackgroundLoader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faWarning,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
function Settings({ BackgroundImgCallback, reset }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const report = () => {
    alert("Contuct us in discord => https://discord.gg/v6tzqrvE");
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
            <button className={style.menuButton} onClick={report}>
              <FontAwesomeIcon icon={faWarning} />
              Report
            </button>
          </li>
          <li className={style.menuItem}>
            <button className={style.menuButton} onClick={reset}>
              <FontAwesomeIcon icon={faArrowRotateLeft} />
              Reset
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Settings;
