import { useState } from "react";
import "./App.css";
import ListToDo from "./components/ListToDo";
import AddTodo from "./components/AddTodo";

const App = () => {
  // eslint-disable-next-line

  const [todos , setTodos] = useState<any>([]);
  /* const todos = [
    {
      id: 1,
      task: "Walk the Dog",
      complete: false,
    },
    {
      id: 2,
      task: "Feed the Cat",
      complete: true,
    },
    {
      id: 3,
      task: "read a book",
      complete: false,
    },
  ]; */

  const addTodo = (value:any) => {
    console.log("value",value);
    const newTodo = {
      id: todos.length + 1,
      task: value,
    };
    setTodos([...todos,newTodo]);
  }

  return (
    <div>
      <h1>Todo</h1>
      {/* your code goes here... */}
      <AddTodo onAddTodo={addTodo}/>
      <ListToDo todos= {todos}/>
    </div>
  );
};

export default App;
