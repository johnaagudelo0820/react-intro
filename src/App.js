import logo from './platzi.webp';
import './App.css';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

const listDefault = [
  { title: 'Estudiar Inversión', completed: true },
  { title: 'Estudiar JS', completed: false },
  { title: 'Realizar trabajos de la empresa', completed: false },
  { title: 'jugar con juandi', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter total={5} completed={3} />
      <TodoSearch />

      <TodoList>
        {listDefault.map(({ title, completed }) => (
          <TodoItem title={title} key={title} completed={completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
