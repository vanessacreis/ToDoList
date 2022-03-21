import React, { useState } from "react";
import S from "./ItemLista.module.css";

const ItemLista = (props) => {
  const [state, setState] = useState(props.state);
  const toggle = (e) => {
    setState(!state);
  };

  return (
    <div className={state ? S.doBox : S.doneBox}>
      <p className={S.title}>{props.title}</p>
      <button onClick={toggle}>
        <img src={`/Assets/img/check-${state ? "bold" : "white"}.svg`} alt="" />
      </button>
    </div>
  );
};

export default ItemLista;
