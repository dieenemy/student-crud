/*
 *
 * Subjects reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_SUBJECT_REQUEST,
  GET_SUBJECT_SUCCESS,
  GET_SUBJECT_FAILED,
  POST_SUBJECT_REQUEST,
  POST_SUBJECT_SUCCESS,
  POST_SUBJECT_FAILED,
  DELETE_SUBJECT_REQUEST,
  DELETE_SUBJECT_SUCCESS,
  DELETE_SUBJECT_FAILED,
  UPDATE_SUBJECT_REQUEST,
  UPDATE_SUBJECT_SUCCESS,
  UPDATE_SUBJECT_FAILED,
} from './constants';

export const initialState = {
  subjects: [],
  loading: false,
  error: false,
  messages: '',
};

/* eslint-disable default-case, no-param-reassign */
const subjectsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_SUBJECT_REQUEST:
        draft.loading = true;
        break;
      case GET_SUBJECT_SUCCESS:
        draft.subjects = action.subjects;
        draft.loading = false;
        break;
      case GET_SUBJECT_FAILED:
        draft.error = true;
        break;
      case POST_SUBJECT_REQUEST:
        draft.loading = true;
        break;
      case POST_SUBJECT_SUCCESS:
        draft.loading = false;
        draft.messages = 'post successfully';
        break;
      case POST_SUBJECT_FAILED:
        draft.loading = false;
        draft.messages = action.error;
        break;
      case DELETE_SUBJECT_REQUEST:
        draft.loading = true;
        break;
      case DELETE_SUBJECT_SUCCESS:
        draft.loading = false;
        draft.messages = action.messages;
        break;
      case DELETE_SUBJECT_FAILED:
        draft.loading = false;
        draft.messages = action.messages;
        break;
      case UPDATE_SUBJECT_REQUEST:
        draft.loading = true;
        break;
      case UPDATE_SUBJECT_SUCCESS:
        draft.loading = false;
        draft.messages = action.messages;
        break;
      case UPDATE_SUBJECT_FAILED:
        draft.loading = false;
        draft.messages = action.messages;
        break;
    }
  });

export default subjectsReducer;
