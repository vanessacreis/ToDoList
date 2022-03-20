import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Todo from "../Pages/ToDo/Todo";
import Users from "../Pages/Users/Users";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Users />} />
      <Route path="/todo" element={<Todo />} />
    </Switch>
  );
};

export default Routes;
