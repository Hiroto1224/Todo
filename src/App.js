import Todo from "./Todo";

export const url = 'https://todolist-team3.deno.dev/api/todo';
export const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoList</h1>
        <Todo />
      </header>
    </div>
  );
}



