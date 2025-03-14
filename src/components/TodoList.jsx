import React from "react";
const TodoList = ({ tasks, startEdit, deleteTask }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        {tasks.length === 0 ? (
          <div className="text-center text-gray-500">No tasks yet</div>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b pb-2 text-gray-800"
              >
                {task}
                <div className="space-x-2">
                  <button
                    onClick={() => startEdit(index)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:opacity-90"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(index)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:opacity-90"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default TodoList;
  