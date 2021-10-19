import React, { useState } from 'react';
import styled from 'styled-components';
import { PencilIcon, XCircleIcon, EyeIcon } from '@heroicons/react/solid';
import ModalSubject from '../../components/Header/ModalSubject';

function SubjectChild({ subject, updSubject }) {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  return (
    <ChildContent>
      <span>{subject.id}</span>
      <span>{subject.name}</span>
      <span>
        <EyeIcon />
        <PencilIcon onClick={() => setIsOpenUpdateModal(true)} />
        <XCircleIcon />
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
