import React from 'react';
import TodoIcon from './TodoIcon';

const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <TodoIcon
      type="ckeck"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
};

export default CompleteIcon;
