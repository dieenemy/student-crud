/*
 *
 * SubjectDetail reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  subject: false,
  loading: false,
  error: false,
  errorMessage: '',
};

/* eslint-disable default-case, no-param-reassign */
const subjectDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.DEFAULT_ACTION:
        break;
      case constants.GET_SUBJECT_REQUEST:
        draft.loading = true;
        break;
      case constants.GET_SUBJECT_SUCCESS:
        draft.loading = false;
        draft.subject = action.subject;
        break;
      case constants.GET_SUBJECT_FAILED:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default subjectDetailReducer;
