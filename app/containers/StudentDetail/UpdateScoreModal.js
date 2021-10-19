import React from 'react';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/index';

function UpdateScoreModal({ open, onClose }) {
  return (
    <Modal open={open}>
      <Title>Are you sure you want to update this score?</Title>
      <GroupButton>
        <Button>update</Button>
        <Button onClick={onClose}>Cancel</Button>
      </GroupButton>
    </Modal>
  );
}

export default UpdateScoreModal;

const GroupButton = styled.p`
  display: flex;
`;
const Title = styled.h3`
  text-align: center;
  margin-top: 3rem;
`;
