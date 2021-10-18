/**
 *
 * StudentDetail
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
import makeSelectStudentDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { getStudent } from './actions';

export function StudentDetail({ match, fetchStudent, student }) {
  useInjectReducer({ key: 'studentDetail', reducer });
  useInjectSaga({ key: 'studentDetail', saga });

  const { id } = match.params;

  useEffect(() => {
    console.log('312312');
    if (!student || student.id !== id) {
      // get userDetail
      fetchStudent(id);
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>StudentDetail</title>
        <meta name="description" content="Description of StudentDetail" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
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
