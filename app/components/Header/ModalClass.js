import React from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import { Form } from '../Modal/Modal.styled';
import { FootModal } from './ModalStudent.styled';

function ModalClass({ open, onClose, titleValue }) {
  return (
    <Modal open={open}>
      <h2>{titleValue}</h2>
      <ModalClassForm>
        <span>Class Name</span>
        <input type="text" name="name" />
      </ModalClassForm>
      <FootModal>
        <button type="button">Submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </FootModal>
    </Modal>
  );
}

export default ModalClass;

const ModalClassForm = styled(Form)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  input {
    margin-top: 1rem;
  }
`;
