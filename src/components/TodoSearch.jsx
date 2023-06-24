import React, { useContext } from 'react';

import '../styles/TodoSearch.css';
import { TodoContext } from '../context';

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      placeholder="Hacer ejercicio"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
};

export { TodoSearch };
