/*
 *
 * StudentDetail reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  user: '',
  loading: false,
  error: false,
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const studentDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.GET_STUDENT_REQUEST:
        draft.loading = true;
        break;
      case constants.GET_STUDENT_SUCCESS:
        draft.user = action.user;
        draft.loading = false;
        break;
      case constants.GET_STUDENT_FAILED:
        draft.error = true;
        draft.errorMessage = action.errorMessage;
        break;
    }
  });

export default studentDetailReducer;
