import React, { useState } from "react";

export default function AddTodo({ onAddTodo }: any) {
  const [todoItem, setTodoItem] = useState("");

  const handleChange = (event: any) => {
    setTodoItem(event.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("handle submit");
    const text = todoItem;
    onAddTodo(text);
    setTodoItem('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoItem}
          onChange={handleChange}
          placeholder="Enter your todo..."
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
