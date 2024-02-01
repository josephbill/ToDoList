// App Component
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddToDo';
import ExampleComponent from './components/ExampleComponent';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
      <AddTodo onAddTodo={addTodo} />
      <ExampleComponent/>
    </div>
  );
}

export default App;
