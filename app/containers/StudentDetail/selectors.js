import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the studentDetail state domain
 */

const selectStudentDetailDomain = state => state.studentDetail || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by StudentDetail
 */

const makeSelectStudentDetail = () =>
  createSelector(
    selectStudentDetailDomain,
    studentState => studentState.student,
  );

export default makeSelectStudentDetail;
export { selectStudentDetailDomain };
