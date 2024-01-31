// AddTodo Component
import React, { useState } from 'react';

function AddToDo({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    onAddTodo && onAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddToDo;
