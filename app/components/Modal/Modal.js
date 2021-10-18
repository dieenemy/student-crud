import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, ModalContent } from './Modal.styled';

function Modal({ open, children }) {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <>
      <Overlay />
      <ModalContent>{children}</ModalContent>
    </>,
    document.getElementById('portal'),
  );
}

export default Modal;
