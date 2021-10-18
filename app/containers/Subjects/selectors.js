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
    substate => substate,
  );

export default makeSelectSubjects;
export { selectSubjectsDomain };
