import React, { useContext, useState } from 'react';

import '../styles/TodoForm.css';
import { TodoContext } from '../context';

const TodoForm = () => {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodValue, setNewTodoValue] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newTodValue);
    addTodo(newTodValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Lavar los platos "
        value={newTodValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type=""
          onClick={() => setOpenModal(false)}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Anadir
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
