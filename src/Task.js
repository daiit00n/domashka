import React from 'react';

function Task({ task, toggleTaskCompletion }) {
  return (
    <li 
      className={task.completed ? 'completed' : ''}
      onClick={() => toggleTaskCompletion(task.id)}
    >
      {task.text}
    </li>
  );
}

export default Task;
