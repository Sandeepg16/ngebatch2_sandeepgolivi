import React from "react";
import TodoItem from "./TodoItem";

export interface todo {
  id: number;
  task: string;
  complete: boolean;
}

interface listTodoProps {
    todos: todo[]
}

export default function ListToDo(props: listTodoProps, {removeTodo}:any) {
  return (
    <div>
      {props.todos.map((todo: any) => (
        <TodoItem todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}
