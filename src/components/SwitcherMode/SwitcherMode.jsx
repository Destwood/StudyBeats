import React, { useState } from "react";
import style from "./SwitcherMode.module.css"; // Подключаем файл стилей
import style2 from "./toggleStyles.module.css";

function ModeSelector({ onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <div className={style.modeSelector}>
      <div className={style2.check}>
        <input
          id="check"
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
        />
        <label htmlFor="check"></label>
      </div>
    </div>
  );
}

export default ModeSelector;
