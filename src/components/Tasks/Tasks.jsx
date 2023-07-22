import React, { useState } from "react";
import style from "./Tasks.module.css";

function Tasks() {
  const [List, setList] = useState([]);
  const addItem = () => {
    const value = document.getElementById("task").value;
    const updatedArr = [...List, value];
    setList(updatedArr);
    document.getElementById("task").value = "";
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };
  const del = (i) => {
    const clearedList = [...List];
    clearedList.splice(i, 1);
    setList(clearedList);
  };
  const clear = () => {
    setList([]);
  };
  return (
    <div className={style.Tasks}>
      <h3 className={style.tasksTitle}>Tasks:</h3>
      <div className={style.tasksContent}>
        {/* Input */}
        <div className={style.tasksInput}>
          <input
            type="text"
            className={style.input}
            id="task"
            onKeyDown={handleKeyPress}
          />
          <button className={style.button} onClick={addItem}>
            +
          </button>
        </div>
        {/* List */}
        <div className={style.listContainer}>
          {List.map((item, index) => (
            <div
              className={style.listItem}
              onClick={() => {
                del(index);
              }}
              key={index}
            >
              <div className={style.listItemNumber}>{index + 1}.</div>
              <div className={style.listItemContent}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            </div>
          ))}
        </div>
        {/* clear */}

        <div className={style.control}>
          <button
            onClick={clear}
            className={`${style.button} ${
              List.length === 0 ? style.disabled : ""
            }`}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
