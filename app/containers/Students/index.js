import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { MainContent, Title } from './Student.styled';
import StudentChild from './StudentChild';
import { getUsers } from './actions';
import makeSelectStudents, {
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectRecordsTotal,
  makeSelectRecordsFiltered,
} from './selectors';
import saga from './saga';
import reducer from './reducer';
import LoadingIndicator from '../../components/LoadingIndicator';

function Student({
  fetchStudents,
  students,
  recordsTotal,
  recordsFiltered,
  loading,
  error,
  message,
}) {
  useInjectReducer({ key: 'students', reducer });
  useInjectSaga({ key: 'students', saga });

  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = Math.ceil(recordsTotal / recordsFiltered);

  const showMoreItems = () => {
    setCurrentPage(preValue => preValue + 1);
  };
  useEffect(() => {
    fetchStudents({
      search: '',
      page: currentPage,
      limit: 3,
    });
  }, [currentPage]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return message;
  }

  return (
    <MainContent>
      <div>Student details</div>
      <Title>
        <span>No</span>
        <span>Name</span>

        <span>Address</span>
        <span>Gender</span>
        <span>Birthday</span>
        <span>More</span>
      </Title>
      {students.map(student => (
        <StudentChild
          key={student.id}
          id={student.id}
          name={student.name}
          address={student.address}
          gender={student.gender}
          birthday={student.dOB}
        />
      ))}
      {currentPage !== totalPage && (
        <button type="button" onClick={showMoreItems}>
          Load More
        </button>
      )}
    </MainContent>
  );
}
const mapStateToProps = createStructuredSelector({
  students: makeSelectStudents(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  message: makeSelectMessage(),
  recordsTotal: makeSelectRecordsTotal(),
  recordsFiltered: makeSelectRecordsFiltered(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStudents: obj => dispatch(getUsers(obj)),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Student);
