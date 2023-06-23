import React from 'react';

import { ReactComponent as CkeckIcon } from './check.svg';
import { ReactComponent as DeleteIcon } from './delete.svg';

import '../styles/TodoIcon.css';

const iconTypes = {
  ckeck: (color) => <CkeckIcon className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteIcon className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span onClick={onClick} className={`Icon-container Icon-container-${type}`}>
      {iconTypes[type](color)}
    </span>
  );
}

export default TodoIcon;
