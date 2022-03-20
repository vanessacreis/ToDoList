import React from "react";
import S from "./Todo.module.css";
import ItemLista from "../../Components/ItemLista/ItemLista";
import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <div className={S.container}>
      <Link to="/" className={S.logout}>
        <img src="./assets/img/logout.svg" alt="" />
      </Link>
      <section className={S.user}>
        <img src="/assets/img/user.svg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          labore porro assumenda voluptates laboriosam praesentium odio ab.
          Veniam illum molestias nam animi praesentium, facilis illo harum.
          Nemo, reiciendis esse! Sapiente?
        </p>
      </section>
      <section className={S.todoSection}>
        <p>My to-do list</p>
        <section className={S.inserirItem}>
          <input type="text" placeholder="Inserir novo item" />
          <img src="/assets/img/add.svg" alt="" />
        </section>
        <div>
          <ItemLista />
          <ItemLista />
          <ItemLista />
        </div>
      </section>
    </div>
  );
};

export default Todo;
