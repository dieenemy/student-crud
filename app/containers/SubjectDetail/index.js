/**
 *
 * SubjectDetail
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSubjectDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { getDetailSubject } from './actions';

export function SubjectDetail({ getSubjectDetail }) {
  useInjectReducer({ key: 'subjectDetail', reducer });
  useInjectSaga({ key: 'subjectDetail', saga });

  useEffect(() => {
    getSubjectDetail(1);
  }, []);

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

SubjectDetail.propTypes = {
  getSubjectDetail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  subjectDetail: makeSelectSubjectDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    getSubjectDetail: id => dispatch(getDetailSubject(id)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SubjectDetail);
