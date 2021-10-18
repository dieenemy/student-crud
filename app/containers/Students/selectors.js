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

const makeSelectStudentsData = () =>
  createSelector(
    selectStudentsDomain,
    studentState => studentState.students,
  );

const makeSelectRecordsTotal = () =>
  createSelector(
    selectStudentsDomain,
    studentState => studentState.recordsTotal,
  );

const makeSelectRecordsFiltered = () =>
  createSelector(
    selectStudentsDomain,
    studentState => studentState.recordsFiltered,
  );

const makeSelectLoading = () =>
  createSelector(
    selectStudentsDomain,
    studentState => studentState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectStudentsDomain,
    studentState => studentState.error,
  );

const makeSelectMessage = () =>
  createSelector(
    selectStudentsDomain,
    studentState => studentState.message,
  );

export default makeSelectStudentsData;
export {
  selectStudentsDomain,
  makeSelectLoading,
  makeSelectError,
  makeSelectMessage,
  makeSelectRecordsTotal,
  makeSelectRecordsFiltered,
};
