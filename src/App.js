import { useState } from "react";
import Form from "./components/form";
import Header from "./components/header";
import TodoList from "./components/todoList";

function App() {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
