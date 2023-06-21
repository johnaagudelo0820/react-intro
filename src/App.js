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

  const todosFiltered = todos.filter(({ title }) => {
    const titleText = title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return titleText.toLowerCase().includes(searchText);
  });

  const deleteTodoItem = (todoIndex) => {
    setTodos((todoItems) => {
      const values = [...todoItems];
      values.splice(todoIndex, 1);
      return values;
    });
  };

  const completeTodo = (todoIndex) => {
    setTodos((todos) => {
      const todosItems = [...todos];
      const { completed } = todosItems[todoIndex];
      todosItems[todoIndex].completed = !completed;
      return todosItems;
    });
  };

  return (
    <>
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
    </>
  );
}

export default App;
