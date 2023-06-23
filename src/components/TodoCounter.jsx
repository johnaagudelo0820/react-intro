import React from 'react';

import '../styles/TodoCounter.css';

const TodoCounter = ({ total, completed }) => {
  if (total === 0) {
    return (
      <h1 className="TodoCounter">
        <span>No tiene tareas, !Agrega una tarea¡ 🤓</span>
      </h1>
    );
  }
  if (completed === total) {
    return (
      <h1 className="TodoCounter">
        <span>
          🎯 🎉 🎊Felicitaciones, Has completado todas las tareas 🥇 🏆
        </span>
      </h1>
    );
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
};

export { TodoCounter };
