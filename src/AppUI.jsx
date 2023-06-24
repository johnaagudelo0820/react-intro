import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodosLoading } from './components/TodoLoader';
import { TodoContext } from './context';

const AppUI = () => {
  return (
    <div style={{ padding: 20 }}>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({ loading, todosFiltered, completeTodo, deleteTodoItem }) => (
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
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </div>
  );
};

export default AppUI;
