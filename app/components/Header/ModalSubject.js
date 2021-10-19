/* eslint-disable react/no-unused-prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import { Form } from '../Modal/Modal.styled';
import { FootModal } from './ModalStudent.styled';

function ModalClass({ open, onClose, titleValue, subject = {}, updSubject }) {
  const [input, setInput] = useState(subject.name);
  const handleChangeInput = e => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    updSubject({ ...subject, name: input });
    onClose();
  };

  return (
    <Modal open={open}>
      <h2>{titleValue}</h2>
      <ModalSubjectForm>
        <span>Subject Name</span>
        <input
          type="text"
          name="name"
          value={input}
          onChange={handleChangeInput}
        />
      </ModalSubjectForm>
      <FootModal>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </FootModal>
    </Modal>
  );
}

export default ModalClass;
const ModalSubjectForm = styled(Form)`
  margin-top: 3rem;
  margin-bottom: 3rem;
  input {
    margin-top: 1rem;
  }
`;
