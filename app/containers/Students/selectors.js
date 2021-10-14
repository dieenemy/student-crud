import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the students state domain
 */

const selectStudentsDomain = state => state.students || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Students
 */

const makeSelectStudents = () =>
  createSelector(
    selectStudentsDomain,
    studentState => studentState.students,
  );

export default makeSelectStudents;
export { selectStudentsDomain };
