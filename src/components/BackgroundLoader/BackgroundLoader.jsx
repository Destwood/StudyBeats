import React, { useRef } from "react";
import style from "./BackgroundLoader.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const BackgroundLoader = ({ onImgLoaded }) => {
  const inputRef = useRef(null);

  const handleImgLoad = (event) => {
    const file = event.target.files[0];

    if (file) {
      const render = new FileReader();

      render.onload = (e) => {
        const imageUrl = e.target.result;
        onImgLoaded(imageUrl);
      };

      render.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*, video/*"
        onChange={handleImgLoad}
        className={style.fileInput}
      />
      <span className={style.icon} onClick={handleIconClick}>
        <FontAwesomeIcon icon={faImage} className={style.inputIcon} /> Upload
      </span>
    </div>
  );
};

export default BackgroundLoader;
