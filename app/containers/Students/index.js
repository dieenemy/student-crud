/**
 *
 * Students
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStudents, {
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Input from './Input';
import { getUsers, deleteStudent, createStudent } from './actions';

export function Students({
  fetchStudents,
  removeStudent,
  createStudentt,
  students,
}) {
  useInjectReducer({ key: 'students', reducer });
  useInjectSaga({ key: 'students', saga });

  const [student, setStudent] = useState({
    email: '',
    username: '',
    website: '',
  });

  const { email, website, username } = student;

  console.log(students);

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = event => {
    const { name, value } = event.target;

    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    createStudentt({ email, website, username });
  };

  return (
    <div>
      <Helmet>
        <title>Students</title>
        <meta name="description" content="Description of Students" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <button type="button" onClick={() => removeStudent(1)}>
        Delete
      </button>
      <form action="submit" onSubmit={handleSubmit}>
        <Input
          id="username"
          name="username"
          type="text"
          placeholder="Enter your username here"
          value={username}
          onChange={handleChange}
        />
        <Input
          id="website"
          name="website"
          type="text"
          placeholder="Enter your website name here"
          value={website}
          onChange={handleChange}
        />
        <Input
          id="email"
          name="email"
          type="text"
          email="Enter your email here"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

Students.propTypes = {
  students: PropTypes.array,
  fetchStudents: PropTypes.func,
  removeStudent: PropTypes.func,
  createStudentt: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  students: makeSelectStudents(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMessage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStudents: () => dispatch(getUsers()),
    removeStudent: id => dispatch(deleteStudent(id)),
    createStudentt: student => dispatch(createStudent(student)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Students);
