import React, { useEffect, useState } from "react";
import S from "./Users.module.css";
import User from "../../Components/User/User";
import { Link } from "react-router-dom";
import { api } from "../../Services/api";

const Users = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    api.get("/users").then((response) => {
      setLoad(true);
      setData(response.data);
      setLoad(false);
    });
  }, []);

  return (
    <div className={S.container}>
      <aside className={S.aside}>
        <p>To do List</p>
        <img src="/assets/img/todo-list.svg" alt="" />
      </aside>
      <section className={S.section}>
        <h2>Users</h2>
        <div>
          {load ? (
            <p>Carregando...</p>
          ) : (
            data.map((user) => {
              return (
                <Link
                  key={user.id}
                  to={`/todo/${user.id}/${user.name}`}
                  className={S.link}
                >
                  <User id={user.id} name={user.name} />
                </Link>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Users;
