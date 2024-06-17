import React from 'react';

const TodoItem = ({ task, toggleTaskCompletion, removeTask }) => (
    <li className={`todo-item ${task.completed ? 'completed' : ''}`}>
        <span onClick={toggleTaskCompletion}>
            {task.text}
        </span>
        <button onClick={removeTask}>Remove</button>
    </li>
);

export default TodoItem;
