import React from 'react';

import '../styles/TodoSearch.css';

const TodoSearch = ({ searchValue, setSearchValue }) => {
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
