import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

const KEY_LOCALSTORAGE_VERSION = 'TODOS_V1';

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
  } = useLocalStorage(KEY_LOCALSTORAGE_VERSION, []);
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(true);

  const completed = todos.filter(({ completed }) => !!completed).length;
  const total = todos.length;

  const todosFiltered = todos.filter(({ title }) => {
    const titleText = title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return titleText.toLowerCase().includes(searchText);
  });

  const deleteTodoItem = (todoIndex) => {
    const todosItems = [...todos];
    todosItems.splice(todoIndex, 1);
    saveTodos(todosItems);
  };

  const completeTodo = (todoIndex) => {
    const todosItems = [...todos];
    const { completed } = todosItems[todoIndex];
    todosItems[todoIndex].completed = !completed;
    saveTodos(todosItems);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        completed,
        total,
        setSearchValue,
        todosFiltered,
        completeTodo,
        deleteTodoItem,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
