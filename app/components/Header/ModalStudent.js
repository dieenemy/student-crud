import React from 'react';
import Modal from '../Modal/Modal';
import { Form } from '../Modal/Modal.styled';
import { FootModal } from './ModalStudent.styled';

function ModalStudent({ open, onClose, titleValue }) {
  return (
    <Modal open={open}>
      <h2>{titleValue}</h2>
      <Form>
        <span>Name</span>
        <input type="text" name="name" />
        <span>Age</span>
        <input type="text" name="age" />
        <span>Address</span>
        <input type="text" name="address" />
        <span>Gender</span>
        <input type="text" name="gender" />
        <span>Birthday</span>
        <input type="text" name="birthday" />
      </Form>
      <FootModal>
        <button type="button">Submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </FootModal>
    </Modal>
  );
}

export default ModalStudent;
