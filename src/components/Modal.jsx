import React from 'react';
import reactDom from 'react-dom';

import '../styles/Modal.css';

const Modal = ({ children }) => {
  return reactDom.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById('modal')
  );
};

export default Modal;
