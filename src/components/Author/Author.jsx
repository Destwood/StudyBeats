import React, { useState } from "react";
import style from "./Author.module.css";

function Author() {
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText("Destwood");

    setShowNotification(true);

    // Через 3 секунды скрываем уведомление
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className={style.authorWrapper} onClick={handleClick}>
      <p className={style.name}>Made by Destwood</p>

      {showNotification && (
        <div className={style.notification}>
          <p>discord copied</p>
        </div>
      )}
    </div>
  );
}

export default Author;
