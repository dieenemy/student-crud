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
import styled from 'styled-components';
import makeSelectStudentDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getStudent } from './actions';
// import {
//   StudentInfo,
//   SubjectInfo,
//   CancelButton,
// } from '../Student/StudentModalView.styled';

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

  const Main = styled.div`
    background-color: #f4ffef;
    height: calc(100vh - 110px);
  `;

  const Container = styled.div`
    display: flex;
    margin-left: calc(260px + 20vw);
    margin-top: 2rem;
    height: calc(100vh - 300px);
    width: 40vw;
    border: 1px solid lightgray;
    border-radius: 4px;

    display: flex;
    > * {
      flex: 1;
    }

    button {
      color: white;
    }
  `;
  const StudentInfoCol = styled.div`
    padding: 2rem 4rem;
    border-right: 1px solid lightgray;
    display: flex;
    flex-direction: column;

    p {
      display: flex;
      align-items: center;
      svg {
        height: 2rem;
        width: 2rem;
        margin-top: -4px;
        margin-right: 8px;
      }
    }
  `;
  const SubjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    padding: 4.2rem 4rem;
    border-right: 1px solid lightgray;
  `;

  const ScoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4rem;
    row-gap: 2rem;
    input {
      border: none;
      background-color: inherit;
    }
  `;

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
          {/* <CancelButton>
            <button type="button">Update Scores</button>
            <button type="button">Return</button>
          </CancelButton> */}
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
