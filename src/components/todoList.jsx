import Todo from "./todo";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo key={todoItem.id} todoItem={todoItem.name} todoList={todoList} setTodoList={setTodoList} />
      ))}
    </div>
  );
};

export default TodoList;
