import React from "react";

const TodoItem = ({ id, completed, title, toggleTodo, deleteTodo }) => {
  return (
    <div>
      <li className="flex justify-between items-center bg-gray-600 p-2 my-3">
        <label htmlFor={id}>
          <input
            type="checkbox"
            className="m-2"
            id={id}
            checked={completed}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />
          {title}
        </label>

        <button
          onClick={() => deleteTodo(id)}
          className="border-2 border-pink-600 rounded-md py-2 px-3"
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
