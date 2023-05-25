import { useState } from "react";
import GetTodo from "./GetTodo";
import AddTodo from "./AddTodo";
import Todo from "./Todo";


function App() {



  return (
    <div className="App">
      <header className="App-header">
          <h1>TodoList</h1>

          <Todo />

          
      </header>
    </div>
  );
}

export default App;
