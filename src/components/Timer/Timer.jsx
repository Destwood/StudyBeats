import React, { useState, useEffect } from "react";
import style from "./Timer.module.css";
import SwitchButton from "./SwitchButton/SwitchButton";
import TimeDisplay from "./TimeDisplay/TimeDisplay";
import TimeControl from "./TimeControl/TimeControl";

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isTimerMode, setIsTimerMode] = useState(false);
  const [time, setTime] = useState(0);
  const [resetCount, setResetCount] = useState(0);
  const [customTime, setCustomTime] = useState(0);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  useEffect(() => {
    let interval = null;

    const decreaseTime = () => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          alert("Время истекло!");
          setIsRunning(false);
          setIsTimerFinished(true);
          return 0; // Устанавливаем значение времени в 0 после уведомления
        } else {
          return prevTime - 1;
        }
      });
    };

    const increaseTime = () => {
      setTime((prevTime) => prevTime + 1);
    };

    if (isRunning) {
      interval = setInterval(isTimerMode ? decreaseTime : increaseTime, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, isTimerMode]);

  const handleToggle = () => {
    setIsRunning((prevState) => !prevState);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setResetCount((prevCount) => prevCount + 1);
    setCustomTime(0);
    setIsTimerFinished(false);
  };

  const handleModeChange = () => {
    setIsTimerMode((prevState) => !prevState);
  };

  const handleCustomTime = (minutes) => {
    setTime(minutes * 60);
    setCustomTime(minutes);
    setIsRunning(true);
    setIsTimerFinished(false);
  };

  return (
    <div className={style.timer}>
      <SwitchButton
        isTimerMode={isTimerMode}
        handleModeChange={handleModeChange}
      />
      <TimeDisplay
        time={time}
        resetTime={handleReset}
        resetCount={resetCount}
        customTime={customTime}
        handleCustomTime={handleCustomTime}
        isTimerFinished={isTimerFinished}
      />
      <TimeControl
        isRunning={isRunning}
        handleToggle={handleToggle}
        handleReset={handleReset}
      />
    </div>
  );
};

export default Timer;
