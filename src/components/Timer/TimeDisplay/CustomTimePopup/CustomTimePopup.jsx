import React, { useState } from "react";
import style from "./CustomTimePopup.module.css";

const CustomTimePopup = ({
  showPopup,
  popupRef,
  handleCustomTime,
  handlePopupClose,
}) => {
  const [inputMinutes, setInputMinutes] = useState(0);

  const handleInputChange = (event) => {
    setInputMinutes(parseInt(event.target.value, 10));
  };

  const handleSetCustomTime = () => {
    handleCustomTime(inputMinutes);
    setInputMinutes(0); // Сброс значения inputMinutes
  };

  const handleCancel = () => {
    handlePopupClose();
    setInputMinutes(0); // Сброс значения inputMinutes
  };

  return (
    showPopup && (
      <div className={style.popupOverlay}>
        <div className={style.popup} ref={popupRef}>
          <h3 className={style.popupTitle}>Enter Custom Time</h3>

          <div className={style.inputGroup}>
            <label className={style.label}>Minutes:</label>
            <input
              type="text"
              name="minutes"
              className={style.popupInput}
              value={inputMinutes}
              onChange={handleInputChange}
              maxLength={4}
            />
          </div>

          <div className={style.buttons}>
            <button
              onClick={handleSetCustomTime}
              className={`${style.setButton} ${style.button}`}
            >
              Set Custom Time
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
