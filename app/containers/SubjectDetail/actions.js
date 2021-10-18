/*
 *
 * SubjectDetail actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function getDetailSubject(id) {
  return {
    type: constants.GET_SUBJECT_REQUEST,
    id,
  };
}

export function getDetailSubjectSuccess(subject) {
  return {
    type: constants.GET_SUBJECT_SUCCESS,
    subject,
  };
}

export function getDetailSubjectFailed(error) {
  return {
    type: constants.GET_SUBJECT_FAILED,
    error,
  };
}
