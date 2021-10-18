import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import { CancelButton } from '../Student/StudentModalView.styled';

function ClassModalView({ open, onClose }) {
  return (
    <ModalClassView open={open}>
      <h2>Class: Information technology</h2>
      <h4>Subject's Class: English, History</h4>
      <CancelButton>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </CancelButton>
    </ModalClassView>
  );
}

export default ClassModalView;

const ModalClassView = styled(Modal)`
  width: 40%;
`;
