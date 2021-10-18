import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the subjectDetail state domain
 */

const selectSubjectDetailDomain = state => state.subjectDetail || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SubjectDetail
 */

const makeSelectSubjectDetail = () =>
  createSelector(
    selectSubjectDetailDomain,
    substate => substate,
  );

export default makeSelectSubjectDetail;
export { selectSubjectDetailDomain };
