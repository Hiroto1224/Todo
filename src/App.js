import { useState } from "react";
import GetTodo from "./GetTodo";
import AddTodo from "./AddTodo";


function App() {
  const [todos,setTodos] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
          <h1>TodoList</h1>

          <GetTodo get={todos} setGet={setTodos}/>
          <AddTodo setTodos={setTodos}/>

          
      </header>
    </div>
  );
}

export default App;
