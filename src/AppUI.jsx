import React, { useContext } from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodosLoading } from './components/TodoLoader';
import { TodoContext } from './context';
import Modal from './components/Modal';

const AppUI = () => {
  const {
    loading,
    todosFiltered,
    completeTodo,
    deleteTodoItem,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <div style={{ padding: 20 }}>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {todosFiltered.map(({ title, completed }, index) => (
          <TodoItem
            title={title}
            key={title}
            completed={completed}
            onComplete={() => completeTodo(index)}
            deleteTodoItem={() => deleteTodoItem(index)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && <Modal>portal de react</Modal>}
    </div>
  );
};

export default AppUI;
