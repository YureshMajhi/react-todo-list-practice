import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(newItem);
    setNewItem("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col text-white">
        <label htmlFor="" className="flex flex-col">
          <h1 className="text-4xl">New Item</h1>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="p-2  my-3 bg-gray-300 text-gray-700"
          />
        </label>
        <button className="text-2xl bg-gray-500 hover:bg-opacity-50 p-1">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Form;
