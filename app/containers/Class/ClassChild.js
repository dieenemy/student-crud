import React, { useState } from 'react';
import styled from 'styled-components';
import { PencilIcon, XCircleIcon, EyeIcon } from '@heroicons/react/solid';
import ModalClass from '../../components/Header/ModalClass';
import ClassModalView from './ClassModalView';

function ClassChild() {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenViewModal, setIsOpenViewModal] = useState(false);
  return (
    <ChildContent>
      <span>1</span>
      <span>Information Technology</span>
      <span>
        <EyeIcon onClick={() => setIsOpenViewModal(true)} />
        <PencilIcon onClick={() => setIsOpenUpdateModal(true)} />
        <XCircleIcon />
      </span>
      <ModalClass
        titleValue="Update class information"
        open={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
      />
      <ClassModalView
        open={isOpenViewModal}
        onClose={() => setIsOpenViewModal(false)}
      />
    </ChildContent>
  );
}

export default ClassChild;
const ChildContent = styled.div``;
