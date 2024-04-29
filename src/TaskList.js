import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
      ))}
    </ul>
  );
}

export default TaskList;
