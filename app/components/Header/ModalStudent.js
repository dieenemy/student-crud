import React, { memo, useState } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
} from '../../containers/Students/selectors';
import {
  createStudent,
  updateStudentRequest,
} from '../../containers/Students/actions';
import Modal from '../Modal/Modal';
import { Form } from '../Modal/Modal.styled';
import { FootModal } from './ModalStudent.styled';
import LoadingIndicator from '../LoadingIndicator';

function ModalStudent({
  open,
  onClose,
  titleValue,
  createNewStudent,
  loading,
  message,
  error,
  mode,
  id,
  success,
}) {
  const [studentName, setStudentName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [dOB, setDOB] = useState('');
  const [classDTO, setClassDTO] = useState({ id: 1 });

  const handleChange = e => {
    const { name, value } = e.target;
    setClassDTO({ ...classDTO, [name]: +value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (mode === 'create') {
      createNewStudent({
        name: studentName,
        age,
        address,
        gender,
        dOB,
        classDTO,
      });
    }

    updateStudentRequest(id, {
      name: studentName,
      age,
      address,
      gender,
      dOB,
      classDTO,
    });
    e.target.reset();
  };

  const data = [
    {
      value: 1,
      name: 'Math',
    },
    {
      value: 2,
      name: 'Physical',
    },
    {
      value: 3,
      name: 'Biology',
    },
  ];

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return message;
  }

  return (
    <Modal open={open}>
      {success && message}
      <h2>{titleValue}</h2>
      <Form onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          value={studentName}
          type="text"
          name="name"
          onChange={e => setStudentName(e.target.value)}
        />
        <span>Age</span>
        <input
          value={age}
          type="text"
          name="age"
          onChange={e => setAge(e.target.value)}
        />
        <span>Address</span>
        <input
          value={address}
          type="text"
          name="address"
          onChange={e => setAddress(e.target.value)}
        />
        <span>Gender</span>
        <input
          value={gender}
          type="text"
          name="gender"
          onChange={e => setGender(e.target.value)}
        />
        <span>Birthday</span>
        <input
          value={dOB}
          type="text"
          name="birthday"
          onChange={e => setDOB(e.target.value)}
        />
        <span>Class</span>
        <select name="id" onChange={handleChange}>
          <option>Please select</option>
          {data.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
        <FootModal>
          <button disabled={loading} type="submit">
            Submit
          </button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </FootModal>
      </Form>
    </Modal>
  );
}

ModalStudent.propTypes = {
  // students: PropTypes.array,
  // fetchStudents: PropTypes.func,
  // removeStudent: PropTypes.func,
  // createStudentt: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    createNewStudent: student => dispatch(createStudent(student)),
  };
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMessage(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ModalStudent);

// export default ModalStudent;
