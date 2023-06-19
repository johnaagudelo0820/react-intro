import { useState } from 'react';
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const listDefault = [
  { title: 'Estudiar Inversión', completed: true },
  { title: 'Estudiar JS', completed: false },
  { title: 'Realizar trabajos de la empresa', completed: true },
  { title: 'jugar con juandi', completed: false },
];

function App() {
  const [todos, setTodos] = useState(listDefault);
  const [searchValue, setSearchValue] = useState('');

  const completed = todos.filter(({ completed }) => !!completed).length;
  const total = todos.length;

  const todosFiltered = todos.filter(({ title }) =>
    title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <TodoCounter total={total} completed={completed} />
      <TodoSearch {...{ searchValue, setSearchValue }} />

      <TodoList>
        {todosFiltered.map(({ title, completed }) => (
          <TodoItem title={title} key={title} completed={completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
