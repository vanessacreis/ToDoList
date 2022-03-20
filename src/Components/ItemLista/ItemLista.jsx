import React from "react";
import S from "./ItemLista.module.css";

const ItemLista = () => {
  return (
    <div className={S.doneBox}>
      <p>Item a fazer</p>
      <img src="/Assets/img/check-bold.svg" alt="" />
    </div>
  );
};

export default ItemLista;
