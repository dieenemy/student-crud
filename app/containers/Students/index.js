/**
 *
 * Students
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectStudents from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Students() {
  useInjectReducer({ key: 'students', reducer });
  useInjectSaga({ key: 'students', saga });

  return (
    <div>
      <Helmet>
        <title>Students</title>
        <meta name="description" content="Description of Students" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Students.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  students: makeSelectStudents(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
