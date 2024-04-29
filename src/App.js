import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (taskText) => {
    const newTask = { id: tasks.length + 1, text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;
