import styles from "../style.module.css";

const Form = ({ todo, setTodo, todoList, setTodoList }) => {


  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {name:todo, id:Math.random()*1000}])
    console.log(todoList);
    setTodo("");

  }

  return (
    <div className={styles.todoForm}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.todoInput}
          type="text"
          value={todo}
          onChange={handleChange}
        />
        <button type="submit" className={styles.todoButton}>Add</button>
      </form>
    </div>
  );
};

export default Form;
