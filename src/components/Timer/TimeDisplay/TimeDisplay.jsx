import React, { useState, useEffect, useRef } from "react";
import CustomTimePopup from "./CustomTimePopup/CustomTimePopup";
import style from "./TimeDisplay.module.css";

const TimeDisplay = ({
  time,
  resetTime,
  resetCount,
  customTime,
  handleCustomTime,
  isTimerFinished,
}) => {
  const [displayTime, setDisplayTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const totalSeconds = Math.floor(time % 60);
    const totalMinutes = Math.floor((time / 60) % 60);
    const totalHours = Math.floor(time / 3600);

    setDisplayTime({
      hours: totalHours,
      minutes: totalMinutes,
      seconds: totalSeconds,
    });
  }, [time]);

  useEffect(() => {
    if (isTimerFinished) {
      setShowPopup(false); // Если таймер достиг 00:00, закрываем попап
    }
  }, [isTimerFinished]);

  const handleTimeClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (resetCount > 0) {
      setDisplayTime({ hours: 0, minutes: 0, seconds: 0 });
    }
  }, [resetCount]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className={`${style.time}`} onClick={handleTimeClick}>
      {displayTime.hours > 0 ? (
        <span>
          {displayTime.hours.toString().padStart(2, "0")}:
          {displayTime.minutes.toString().padStart(2, "0")}:
          {displayTime.seconds.toString().padStart(2, "0")}
        </span>
      ) : (
        <span>
          {displayTime.minutes.toString().padStart(2, "0")}:
          {displayTime.seconds.toString().padStart(2, "0")}
        </span>
      )}
      <CustomTimePopup
        showPopup={showPopup}
        popupRef={popupRef}
        handleCustomTime={handleCustomTime}
        handlePopupClose={handlePopupClose}
        isTimerFinished={isTimerFinished} // Передаем состояние isTimerFinished в попап
      />
    </div>
  );
};

export default TimeDisplay;
