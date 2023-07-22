import React, { useState } from "react";
import style from "./CustomTimePopup.module.css";

const CustomTimePopup = ({
  isPopupVisible,
  popupRef,
  handleSetCustomTime,
  handleCancel,
}) => {
  const [inputMinutes, setInputMinutes] = useState(0);

  const handleInputChange = (event) => {
    setInputMinutes(parseInt(event.target.value, 10));
  };

  const handleSetCustomTimeClick = () => {
    handleSetCustomTime(inputMinutes);
    setInputMinutes(0); // Скидання значення inputMinutes
  };

  const handlePopupClick = (event) => {
    event.stopPropagation(); // Зупинка подальшого поширення кліку на батьківські елементи
  };

  return (
    isPopupVisible && (
      <div className={style.popupOverlay}>
        <div className={style.popup} ref={popupRef} onClick={handlePopupClick}>
          <h3 className={style.popupTitle}>Enter custom time</h3>

          <div className={style.inputGroup}>
            <label className={style.label}>minutes:</label>
            <input
              type="text"
              name="minutes"
              className={style.popupInput}
              value={inputMinutes}
              onChange={handleInputChange}
              maxLength={4}
              placeholder="input your time"
            />
          </div>

          <div className={style.buttons}>
            <button
              onClick={handleSetCustomTimeClick}
              className={`${style.setButton} ${style.button}`}
            >
              Set
            </button>
            <button
              onClick={handleCancel}
              className={`${style.cancelButton} ${style.button}`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomTimePopup;
