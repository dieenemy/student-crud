/**
 *
 * Subjects
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSubjects from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { MainContent } from './Subject.styled';
import SubjectChild from './SubjectChild';

import {
  getSubject,
  createSubject,
  removeSubject,
  updateSubject,
  searchSubject, 
} from './actions';

export function Subjects({
  fetchSubjects,
  postSubject,
  deleteSubject,
  updateSubject,
  searchSubject,
}) {
  useInjectReducer({ key: 'subjects', reducer });
  useInjectSaga({ key: 'subjects', saga });

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Subjects</title>
        <meta name="description" content="Description of Subjects" />
      </Helmet>
      <MainContent>
        <div>Subject details</div>
        <div className="title">
          <span>No</span>
          <span>Name</span>
          <span>More</span>
        </div>
        <SubjectChild />
        <SubjectChild />
        <SubjectChild />
        <button type="button">Load More</button>
      </MainContent>
    </div>
  );
}

Subjects.propTypes = {
  fetchSubjects: PropTypes.func,
  createSubject: PropTypes.func,
  removeSubject: PropTypes.func,
  updateSubject: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  subjects: makeSelectSubjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchSubjects: () => dispatch(getSubject()),
    postSubject: () => dispatch(createSubject({ name: 'diem', age: '18' })),
    deleteSubject: () => dispatch(removeSubject(1)),
    updateSubject: () =>
      dispatch(updateSubject({ id: 1, name: 'diem', age: '18' })),
    searchSubject: () => dispatch(searchSubject('diem')),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Subjects);
