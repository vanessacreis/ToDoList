import React from "react";
import S from "./Todo.module.css";
import Todolist from "../../Components/TodoList/todolist";
import { Link } from "react-router-dom";

const Todo = () => {
  return (
    <div className={S.container}>
      {/* <Link to="/"> */}
      <img src="./assets/img/logout.svg" alt="" className={S.logout} />
      {/* </Link> */}
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
        <Todolist />
        <Todolist />
        <Todolist />
      </section>
    </div>
  );
};

export default Todo;
