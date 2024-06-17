import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [inputValue, setInputValue] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, { text: inputValue.trim(), completed: false }]);
            setInputValue('');
        }
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    const filteredTasks = tasks.filter(task =>
        filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
    );

    return (
        <div className="todo-app">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a task"
            />
            <button onClick={addTask}>Add Task</button>
            <div className="filters">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('active')}>Active</button>
            </div>
            <ul>
                {filteredTasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        toggleTaskCompletion={() => toggleTaskCompletion(index)}
                        removeTask={() => removeTask(index)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
