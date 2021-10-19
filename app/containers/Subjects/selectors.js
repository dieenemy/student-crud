import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the subjects state domain
 */

const selectSubjectsDomain = state => state.subjects || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Subjects
 */

const makeSelectSubjects = () =>
  createSelector(
    selectSubjectsDomain,
    subjectState => subjectState.subjects.data,
  );

export default makeSelectSubjects;
export { selectSubjectsDomain };
