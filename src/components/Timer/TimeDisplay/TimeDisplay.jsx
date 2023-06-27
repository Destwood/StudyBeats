// Файл: TimeDisplay.js

import React from "react";
import style from "./TimeDisplay.module.css";

const TimeDisplay = ({ time, handleTimeClick }) => {
  return (
    <div className={`${style.time}`} onClick={handleTimeClick}>
      {time.hours > 0 ? (
        <span>
          {time.hours.toString().padStart(2, "0")}:
          {time.minutes.toString().padStart(2, "0")}:
          {time.seconds.toString().padStart(2, "0")}
        </span>
      ) : (
        <span>
          {time.minutes.toString().padStart(2, "0")}:
          {time.seconds.toString().padStart(2, "0")}
        </span>
      )}
    </div>
  );
};

export default TimeDisplay;
