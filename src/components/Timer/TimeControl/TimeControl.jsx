// Файл: TimeControl.js

import React from "react";
import style from "./TimeControl.module.css";
import style2 from "../Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

const TimeControl = ({ isRunning, handleToggle, handleReset, isDisabled }) => {
  return (
    <div className={style.timeControlContainer}>
      <button
        onClick={isDisabled ? undefined : handleToggle}
        className={`${style.timeControl} ${style2.button}`}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={handleReset}
        className={`${style.timeControl} ${style.reset}`}
      >
        <FontAwesomeIcon icon={faArrowRotateLeft} />
      </button>
    </div>
  );
};

export default TimeControl;
