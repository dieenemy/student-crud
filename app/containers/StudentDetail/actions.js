/*
 *
 * StudentDetail actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function getStudent(id) {
  return {
    type: constants.GET_STUDENT_REQUEST,
    id,
  };
}

export function getStudentSuccess(user) {
  return {
    type: constants.GET_STUDENT_SUCCESS,
    user,
  };
}

export function getStudentFailed(errors) {
  return {
    type: constants.GET_STUDENT_FAILED,
    errors,
  };
}
