import React, { useState, useEffect, useRef } from "react";
import style from "./Timer.module.css";
import SwitchButton from "./SwitchButton/SwitchButton";
import TimeDisplay from "./TimeDisplay/TimeDisplay";
import TimeControl from "./TimeControl/TimeControl";
import CustomTimePopup from "./CustomTimePopup/CustomTimePopup";

const Timer = () => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerMode, setIsTimerMode] = useState(false);
  const [customTime, setCustomTime] = useState({ minutes: 0 });
  const [showPopup, setShowPopup] = useState(false);

  const popupRef = useRef(null);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          let seconds = prevTime.seconds + 1;
          let minutes = prevTime.minutes;
          let hours = prevTime.hours;

          if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
            if (minutes >= 60) {
              minutes = 0;
              hours += 1;
            }
          }

          return {
            hours,
            minutes,
            seconds,
          };
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleToggle = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setTime({ hours: 0, minutes: 0, seconds: 0 });
    setIsRunning(false);
    setCustomTime({ minutes: 0 });
  };

  const handleModeChange = () => {
    setIsTimerMode((prevState) => !prevState);
  };

  const handleCustomTime = () => {
    const { minutes } = customTime;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    setTime({ hours, minutes: remainingMinutes, seconds: 0 });
    setCustomTime({ minutes: 0 });
    setIsRunning(false);
    setShowPopup(false);
  };

  const handleCustomInputChange = (e) => {
    const { value } = e.target;
    setCustomTime({ minutes: parseInt(value, 10) });
  };

  const showDialog = () => {
    alert("Time's up!");
  };

  const handleTimeClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={style.timer}>
      <SwitchButton
        isTimerMode={isTimerMode}
        handleModeChange={handleModeChange}
      />
      <TimeDisplay time={time} handleTimeClick={handleTimeClick} />
      <TimeControl
        isRunning={isRunning}
        handleToggle={handleToggle}
        handleReset={handleReset}
      />
      <CustomTimePopup
        showPopup={showPopup}
        popupRef={popupRef}
        customTime={customTime}
        handleCustomTime={handleCustomTime}
        handleCustomInputChange={handleCustomInputChange}
        handlePopupClose={handlePopupClose}
      />
    </div>
  );
};

export default Timer;
