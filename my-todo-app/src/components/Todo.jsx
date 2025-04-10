import React from "react";
import "../Styles/Todo.css";

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      {todo.text}
      <div className="buttons">
        <button className="toggle-btn" onClick={() => toggleTodo(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;