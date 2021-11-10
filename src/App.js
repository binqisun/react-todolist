import "./styles.css";
import { useState } from "react";
import TodoList from "./TodoList";
// import { grid, row, col } from "react-bootstrap";

export default function App() {
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  return (
    <div className="App">
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>clear completed todo</button>
      <div> 0 left to do</div>
    </div>
  );
}
