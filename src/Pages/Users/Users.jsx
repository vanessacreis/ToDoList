import React from "react";
import S from "./Users.module.css";
import User from "../../Components/User/User";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className={S.container}>
      <aside className={S.aside}>
        <p>To do List</p>
        <img src="/assets/img/todo-list.svg" alt="" />
      </aside>
      <section className={S.section}>
        <h2>Users</h2>
        <div>
          <Link to="/todo">
            <User />
          </Link>

          <User />
          <User />
        </div>
      </section>
    </div>
  );
};

export default Users;
