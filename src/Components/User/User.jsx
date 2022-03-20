import React from "react";
import S from "./User.module.css";

const User = () => {
  return (
    <div className={S.userBox}>
      <img src="/assets/img/user.svg" alt="" />
      <div className={S.text}>
        <p>Nome do usuário</p>
        <p>ID</p>
      </div>
    </div>
  );
};

export default User;
