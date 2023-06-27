// CustomTimePopup.js
import React from "react";
import style from "./CustomTimePopup.module.css";
import style2 from "../Button.module.css";

const CustomTimePopup = ({
  showPopup,
  popupRef,
  customTime,
  handleCustomInputChange,
  handleCustomTime,
  handlePopupClose,
}) => {
  return (
    showPopup && (
      <div className={style.popupOverlay}>
        <div className={style.popup} ref={popupRef}>
          <div className={style.popupContent}>
            <h3 className={style.popupTitle}>Enter Custom Time</h3>
            <div className={style.inputGroup}>
              <label>Minutes:</label>
              <input
                type="number"
                name="minutes"
                value={customTime.minutes}
                onChange={handleCustomInputChange}
              />
            </div>
            <div>
              <button
                onClick={handleCustomTime}
                className={`${style.setButton} ${style2.button}`}
              >
                Set Custom Time
              </button>
              <button
                onClick={handlePopupClose}
                className={`${style.cancelButton} ${style2.button}`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CustomTimePopup;
