import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { PencilIcon, XCircleIcon, EyeIcon } from '@heroicons/react/solid';
import { createStructuredSelector } from 'reselect';
import { ChildContent } from './StudentChild.styled';
import ModalStudent from '../../components/Header/ModalStudent';
import StudentModalView from './StudentModalView';
import { deleteStudentRequest } from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectSuccess,
} from './selectors';

function StudentChild({
  id,
  name,
  address,
  gender,
  birthday,
  deleteStudent,
  success,
  error,
  message,
}) {
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenViewModal, setIsOpenViewUpdateModal] = useState(false);

  if (error) {
    return message;
  }

  return (
    <ChildContent>
      {success && message}
      <span>{id}</span>
      <span>{name}</span>
      <span>{address}</span>
      <span>{gender}</span>
      <span>{birthday}</span>
      <span>
        <EyeIcon onClick={() => setIsOpenViewUpdateModal(true)} />
        <PencilIcon onClick={() => setIsOpenUpdateModal(true)} />
        <XCircleIcon onClick={() => deleteStudent(id)} />
      </span>
      <ModalStudent
        titleValue="Update student information"
        open={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
        mode="update"
        id="id"
      />
      <StudentModalView
        open={isOpenViewModal}
        onClose={() => setIsOpenViewUpdateModal(false)}
      />
    </ChildContent>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMessage(),
  success: makeSelectSuccess(),
});

function mapDispatchToProps(dispatch) {
  return {
    deleteStudent: id => dispatch(deleteStudentRequest(id)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StudentChild);
