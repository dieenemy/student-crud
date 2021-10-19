import React, { useState } from 'react';
import styled from 'styled-components';
import { PencilIcon, XCircleIcon, EyeIcon } from '@heroicons/react/solid';
import ModalSubject from '../../components/Header/ModalSubject';

function SubjectChild({ subject, updSubject, delSubject }) {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const handleDelete = () => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm('Are you sure you want to remove this into the database?')
    ) {
      delSubject(subject.id);
    }
  };
  return (
    <ChildContent>
      <span>{subject.id}</span>
      <span>{subject.name}</span>
      <span>
        <EyeIcon />
        <PencilIcon onClick={() => setIsOpenUpdateModal(true)} />
        <XCircleIcon onClick={handleDelete} />
      </span>
      <ModalSubject
        titleValue="Update subject information"
        open={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
        updSubject={updSubject}
        subject={subject}
      />
    </ChildContent>
  );
}

export default SubjectChild;

const ChildContent = styled.div``;
