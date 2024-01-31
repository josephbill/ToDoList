// TodoItem Component
import React from 'react';

function TodoItem({ todo, onRemoveTodo }) {
  const handleRemove = () => {
    onRemoveTodo && onRemoveTodo(todo.id);
  };

  return (
    <li>
      {todo.text} <button onClick={handleRemove}>Remove</button>
    </li>
  );
}

export default TodoItem;
