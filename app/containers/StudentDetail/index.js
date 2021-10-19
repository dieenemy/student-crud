/**
 *
 * StudentDetail
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { CakeIcon, UserIcon, LocationMarkerIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';
import makeSelectStudentDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getStudent } from './actions';
import {
  Main,
  Container,
  StudentInfoCol,
  SubjectInfo,
  ScoreInfo,
  GroupButton,
} from './StudentDetail.styled';
export function StudentDetail({ match, fetchStudent, student }) {
  useInjectReducer({ key: 'studentDetail', reducer });
  useInjectSaga({ key: 'studentDetail', saga });

  const [inputValue, setInputValue] = useState(10);

  const { id } = match.params;

  useEffect(() => {
    if (!student || student.id !== id) {
      // get userDetail
      fetchStudent(id);
    }
  }, []);

  return (
    <Main>
      <Helmet>
        <title>StudentDetail</title>
        <meta name="description" content="Description of StudentDetail" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      <Container>
        <StudentInfoCol>
          <h2>Le Huynh Duc</h2>
          <p>
            <UserIcon />
            <span>Male</span>
          </p>
          <p>
            <CakeIcon />
            <span>25/08/2000</span>
          </p>
          <p>
            <LocationMarkerIcon />
            <span>Hai Duong</span>
          </p>
        </StudentInfoCol>

        <SubjectInfo>
          <span>Subject</span>
          <span>English</span>
          <span>English</span>
          <span>English</span>
          <span>English</span>
        </SubjectInfo>
        <ScoreInfo>
          <span>Score</span>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <GroupButton>
            <button type="button">Update Scores</button>
            <Link to="/">
              <button type="button">Return</button>
            </Link>
          </GroupButton>
        </ScoreInfo>
      </Container>
    </Main>
  );
}

StudentDetail.propTypes = {
  match: PropTypes.object,
  fetchStudent: PropTypes.func,
  student: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  student: makeSelectStudentDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchStudent: id => dispatch(getStudent(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(StudentDetail);
