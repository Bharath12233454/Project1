// src/TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;

Step 3: Modify App Component
Modify the App.js file to use the TodoList component:


// src/App.js
import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
