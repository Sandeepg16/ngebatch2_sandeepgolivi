import React from "react";
import { todo } from "./ListToDo";

interface todoItemprops {
  todo: todo;
}

export default function TodoItem(props: todoItemprops, { removeTodo }: any) {
  const { todo } = props;

  const handleRemove = (event: any) => {
    removeTodo(event.target.value);
  };
  return (
    //<li key={todo.id} className={todo?.complete ? "complete" : ''}>
    //        {todo?.id} - {todo?.task} status - {todo?.complete ? 'Completed' : 'pending'}
    //</li>
    <>
      <li key={todo.id}>
        {todo?.id} - {todo?.task}
      </li>
      <span>
        <button onClick={handleRemove}>Remove</button>
      </span>
    </>
  );
}
