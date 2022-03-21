import React from "react";
import S from "./User.module.css";

const User = (props) => {
  return (
    <div className={S.userBox}>
      <img src="/assets/img/user.svg" alt="" />
      <div className={S.text}>
        <p>{props.name}</p>
        <p>ID: {props.id}</p>
      </div>
    </div>
  );
};

export default User;
