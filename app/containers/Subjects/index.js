/**
 *
 * Subjects
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSubjects from './selectors';
import reducer from './reducer';
import saga from './saga';

import { MainContent } from './Subject.styled';
import SubjectChild from './SubjectChild';

import { getSubject, updateSubject } from './actions';

export function Subjects({ fetchSubjects, subjects, updSubject }) {
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
        {subjects.map(subject => (
          <SubjectChild
            key={subject.id}
            subject={subject}
            updSubject={updSubject}
          />
        ))}
        <button type="button">Load More</button>
      </MainContent>
    </div>
  );
}

Subjects.propTypes = {
  fetchSubjects: PropTypes.func,
  updSubject: PropTypes.func,
  subjects: PropTypes.array,
};

Subjects.defaultProps = {
  subjects: [],
};

const mapStateToProps = createStructuredSelector({
  subjects: makeSelectSubjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchSubjects: () => dispatch(getSubject()),
    updSubject: subject => dispatch(updateSubject(subject)),
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
