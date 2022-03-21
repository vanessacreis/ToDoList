import React, { useEffect, useState } from "react";
import S from "./Todo.module.css";
import { Link, useParams } from "react-router-dom";
import { api } from "../../Services/api";
import ItemLista from "../../Components/ItemLista/ItemLista.jsx";

const Todo = () => {
  const { id, name } = useParams();
  const [listaTodos, setListaTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState(false);

  const data = new Date();
  const weeks = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sábado",
  ];
  const todayIs = `${weeks[data.getDay()]}, ${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()}`;
  const hora = `${data.getHours()}h${data.getMinutes()}`;

  const handleGetInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAddItem = () => {
    setLoad(true);
    const newItem = {
      userId: id,
      id: listaTodos.length + 1,
      title: title,
      completed: false,
    };
    console.log("oi");
    setListaTodos([newItem, ...listaTodos]);
    setLoad(false);
    setTitle("");
  };

  useEffect(() => {
    api.get("/todos").then((response) => {
      const todos = response.data;
      const filtrados = todos.filter((todo) => todo.userId == id);
      setListaTodos(filtrados);
    });
  }, [id]);

  return (
    <div className={S.container}>
      <Link to="/" className={S.logout}>
        <img src="/assets/img/logout.svg" alt="icon exit" />
      </Link>
      <section className={S.user}>
        <img src="/assets/img/user.svg" alt="" />
        <p>Olá, {name}!</p>
        <p className={S.dia}>
          Hoje é {todayIs}. <br />
          São {hora}.
        </p>
      </section>
      <section className={S.todoSection}>
        <p>My to-do list</p>
        <section className={S.inserirItem}>
          <input
            type="text"
            placeholder="Inserir novo item"
            onChange={handleGetInput}
            value={title}
          />
          <button onClick={handleAddItem}>
            <img src="/assets/img/add.svg" alt="Add a Todo" />
          </button>
        </section>
        <div>
          {load ? (
            <p>Carregando</p>
          ) : (
            listaTodos.length > 0 &&
            listaTodos.map((todo) => {
              return (
                <ItemLista
                  key={todo.id}
                  title={todo.title}
                  state={todo.completed}
                />
              );
            })
          )}
        </div>
      </section>
    </div>
  );
};

export default Todo;
