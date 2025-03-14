import { useState } from 'react';
import React from 'react';

const TodoInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:opacity-90"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
