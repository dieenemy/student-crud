/*
 *
 * Students reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  students: [],
  loading: false,
  error: false,
  message: '',
  recordsTotal: '',
  recordsFiltered: '',
};

/* eslint-disable default-case, no-param-reassign */
const studentsReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.GET_STUDENTS_REQUEST:
        draft.loading = true;
        break;
      case constants.GET_STUDENTS_SUCCESS:
        draft.loading = false;
        draft.students = draft.students.concat(action.students.data);
        draft.recordsTotal = action.students.recordsTotal;
        draft.recordsFiltered = action.students.recordsFiltered;
        break;
      case constants.GET_STUDENTS_FAILED:
        draft.message = action.error;
        draft.error = true;
        draft.loading = false;
        break;
      case constants.DELETE_STUDENT_REQUEST:
        draft.loading = true;
        break;
      case constants.DELETE_STUDENT_SUCCESS:
        draft.loading = false;
        draft.message = 'Deleted successfully';
        break;
      case constants.DELETE_STUDENT_FAILED:
        draft.error = true;
        draft.message = action.error;
        break;
      case constants.CREATE_STUDENT_REQUEST:
        draft.loading = true;
        break;
      case constants.CREATE_STUDENT_SUCCESS:
        draft.loading = false;
        draft.message = 'Created successfully';
        break;
      case constants.CREATE_STUDENT_FAILED:
        draft.error = true;
        draft.message = action.error;
        break;
    }
  });

export default studentsReducer;
