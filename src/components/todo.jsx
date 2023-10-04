import styles from "../style.module.css";

const Todo = ({ todoList, setTodoList, todoItem }) => {
    const handleDelete = () => {
        setTodoList(todoList.filter((item) => item.name !== todoItem));
    };
    
  return (
    <div>
      <div className={styles.todoItem}>
        <h3 className={styles.todoName}>{todoItem}</h3>
        <button onClick={handleDelete} className={styles.deleteButton}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Todo;
