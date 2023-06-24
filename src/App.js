import './App.css';
import AppUI from './AppUI';
import { TodoProvider } from './context';

// const listDefault = [
//   { title: 'Estudiar Inversión', completed: true },
//   { title: 'Estudiar JS', completed: false },
//   { title: 'Realizar trabajos de la empresa', completed: true },
//   { title: 'jugar con juandi', completed: false },
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
