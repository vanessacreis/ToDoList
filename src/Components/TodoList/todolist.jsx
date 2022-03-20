import React from "react";
import S from "./todolist.module.css";

const Todolist = () => {
  return (
    <div className={S.doneBox}>
      <p>Item a fazer</p>
      <img src="/Assets/img/check-bold.svg" alt="" />
    </div>
  );
};

export default Todolist;
