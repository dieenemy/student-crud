import React, { useState } from 'react';
import { PencilIcon, XCircleIcon, EyeIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import { ChildContent } from './StudentChild.styled';
import ModalStudent from '../../components/Header/ModalStudent';
import StudentModalView from './StudentModalView';

function StudentChild({ id, name, address, gender, birthday }) {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenViewModal, setIsOpenViewUpdateModal] = useState(false);
  return (
    <ChildContent>
      <span>{id}</span>
      <span>{name}</span>
      <span>{address}</span>
      <span>{gender}</span>
      <span>{birthday}</span>
      <span>
        <Link to={`/students/${id}`}>
          <EyeIcon onClick={() => setIsOpenViewUpdateModal(true)} />
        </Link>
        <PencilIcon onClick={() => setIsOpenUpdateModal(true)} />
        <XCircleIcon />
      </span>
      <ModalStudent
        titleValue="Update student information"
        open={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
      />
      <StudentModalView
        open={isOpenViewModal}
        onClose={() => setIsOpenViewUpdateModal(false)}
      />
    </ChildContent>
  );
}

export default StudentChild;
