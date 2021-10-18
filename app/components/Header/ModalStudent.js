import React, { memo, useRef } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import makeSelectStudents, {
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
} from '../../containers/Students/selectors';
import { createStudent } from '../../containers/Students/actions';
import Modal from '../Modal/Modal';
import { Form } from '../Modal/Modal.styled';
import { FootModal } from './ModalStudent.styled';

function ModalStudent({ open, onClose, titleValue }) {
  const nameRef = useRef();
  const ageRef = useRef();
  const addressRef = useRef();
  const genderRef = useRef();
  const birthdayRef = useRef();

  const createStudentHandler = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = nameRef.current.value;
    const address = nameRef.current.value;
    const gender = nameRef.current.value;
    const birthday = nameRef.current.value;
    createStudent({ name, age, address, gender, birthday });
  };
  return (
    <Modal open={open}>
      <h2>{titleValue}</h2>
      <Form>
        <span>Name</span>
        <input ref={nameRef} type="text" name="name" />
        <span>Age</span>
        <input ref={ageRef} type="text" name="age" />
        <span>Address</span>
        <input ref={addressRef} type="text" name="address" />
        <span>Gender</span>
        <input ref={genderRef} type="text" name="gender" />
        <span>Birthday</span>
        <input ref={birthdayRef} type="text" name="birthday" />
        <span>Class</span>
        <select name="classes">
          <option value="CNTT1">CNTT1</option>
          <option value="CNTT2">CNTT2</option>
          <option value="CNTT3">CNTT3</option>
          <option value="CNTT4">CNTT4</option>
        </select>
      </Form>
      <FootModal>
        <button type="button" onClick={createStudentHandler}>
          Submit
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </FootModal>
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
    createStudent: student => dispatch(createStudent(student)),
  };
}
const mapStateToProps = createStructuredSelector({
  students: makeSelectStudents(),
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
