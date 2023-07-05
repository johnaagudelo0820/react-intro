import React, { useContext } from 'react';

import '../styles/CreateTodoButton.css';
import { TodoContext } from '../context';

const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={() => setOpenModal((state) => !state)}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
