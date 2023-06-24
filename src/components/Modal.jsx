import React from 'react';
import reactDom from 'react-dom';

const Modal = ({ children }) => {
  return reactDom.createPortal(
    <div className="Modal">{children}</div>,
    document.getElementById('modal')
  );
};

export default Modal;
