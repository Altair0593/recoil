import * as React from "react";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilter from "./TodoListFilter";
import TodoList from "./TodoList";
import TodoListStats from "./TodoListStatus";

const TodoBlock = () => (
    <>
        <TodoItemCreator/>
        <TodoList/>
        <TodoListFilter/>
        <TodoListStats/>
    </>
);

export default TodoBlock;
