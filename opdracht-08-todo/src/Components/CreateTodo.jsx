import { useState } from "react";

const CreateTodo = ({ onCreate }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    onCreate(value);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white rounded-sm shadow-sm"
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a to-do"
        aria-label="New to-do"
        className="px-4 py-3 w-80 sm:w-96 placeholder-gray-400 text-gray-800 focus:outline-none"
      />
      <button
        type="submit"
        className="ml-3 px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-sm shadow"
        aria-label="Add to-do"
      >
        Add
      </button>
    </form>
  );
};

export default CreateTodo;
