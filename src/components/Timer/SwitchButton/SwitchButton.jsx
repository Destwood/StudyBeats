// Файл: SwitchButton.js

import React from "react";
import style from "./SwitchButton.module.css";
import style2 from "../Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { faHourglass } from "@fortawesome/free-solid-svg-icons";

const SwitchButton = ({ isTimerMode, handleModeChange }) => {
  return (
    <button
      onClick={handleModeChange}
      className={`${style.switchButton} ${style2.button}`}
    >
      {isTimerMode ? (
        <span>
          <FontAwesomeIcon icon={faHourglass} />
          Timer
        </span>
      ) : (
        <span>
          <FontAwesomeIcon icon={faStopwatch} />
          Stopwatch
        </span>
      )}
    </button>
  );
};

export default SwitchButton;
