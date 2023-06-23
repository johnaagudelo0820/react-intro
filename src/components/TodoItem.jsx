import React from 'react';

import '../styles/TodoItem.css';
import CompleteIcon from './CompleteIcon';
import DeleteIcon from './DeleteIcon';

const TodoItem = ({ title, completed, deleteTodoItem, onComplete }) => {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {title}
      </p>
      <DeleteIcon onDelete={deleteTodoItem} />
    </li>
  );
};

export { TodoItem };
