import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import React from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(tasks[index]);
  };

  const updateTask = () => {
    if (editValue.trim()) {
      const updated = [...tasks];
      updated[editIndex] = editValue;
      setTasks(updated);
      cancelEdit();
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue('');
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-lg sm:max-w-xl md:max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Todo App
        </h1>

        <TodoInput addTask={addTask} />

        {editIndex !== null && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg py-2 px-4"
              />
              <button
                onClick={updateTask}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Update
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <TodoList tasks={tasks} startEdit={startEdit} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
