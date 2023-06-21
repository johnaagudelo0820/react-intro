import React from 'react';

import '../styles/TodoItem.css';

const TodoItem = ({ title, completed, deleteTodoItem, onComplete }) => {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        V
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {title}
      </p>
      <span className="Icon Icon-delete" onClick={deleteTodoItem}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
