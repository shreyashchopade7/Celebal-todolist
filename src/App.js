import React from 'react';
import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <TodoApp />
    </div>
  );
}

export default App;
