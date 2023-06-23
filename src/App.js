import { useState } from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

// const listDefault = [
//   { title: 'Estudiar Inversión', completed: true },
//   { title: 'Estudiar JS', completed: false },
//   { title: 'Realizar trabajos de la empresa', completed: true },
//   { title: 'jugar con juandi', completed: false },
// ];
// localStorage.setItem('TODOS_V1', listDefault)

const KEY_LOCALSTORAGE_VERSION = 'TODOS_V1';

function App() {
  const localStorageTodos = localStorage.getItem(KEY_LOCALSTORAGE_VERSION);
  const parsedTodos = JSON.parse(localStorageTodos) ?? [];

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('');

  const completed = todos.filter(({ completed }) => !!completed).length;
  const total = todos.length;

  const todosFiltered = todos.filter(({ title }) => {
    const titleText = title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return titleText.toLowerCase().includes(searchText);
  });

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem(KEY_LOCALSTORAGE_VERSION, JSON.stringify(newTodos));
  };

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
    <div style={{ padding: 20 }}>
      <TodoCounter total={total} completed={completed} />
      <TodoSearch {...{ searchValue, setSearchValue }} />

      <TodoList>
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
    </div>
  );
}

export default App;
