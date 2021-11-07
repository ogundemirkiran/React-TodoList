function FuncFooter({ todoData, setTodoData }) {
  const clearItems = () => {
    setTodoData([]);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {todoData.length} </strong>
        items left
      </span>

      <button className="clear-completed" onClick={clearItems}>
        Clear completed
      </button>
    </footer>
  );
}

export default FuncFooter;
