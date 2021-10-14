/*
 *
 * Students actions
 *
 */

import * as constants from './constants';

export function defaultAction() {
  return {
    type: constants.DEFAULT_ACTION,
  };
}

export function getUsers() {
  return {
    type: constants.GET_STUDENTS_REQUEST,
  };
}

export function getUsersSuccess(users) {
  return {
    type: constants.GET_STUDENTS_SUCCESS,
    users,
  };
}

export function getUsersFailed(errors) {
  return {
    type: constants.GET_STUDENTS_FAILED,
    errors,
  };
}

export function deleteStudent(id) {
  return {
    type: constants.DELETE_STUDENT_REQUEST,
    id,
  };
}

export function deleteStudentSuccess() {
  return {
    type: constants.DELETE_STUDENT_SUCCESS,
  };
}

export function deleteStudentFailed() {
  return {
    type: constants.DELETE_STUDENT_FAILED,
  };
}

export function createStudent(student) {
  return {
    type: constants.CREATE_STUDENT_REQUEST,
    student,
  };
}

export function createStudentSuccess() {
  return {
    type: constants.CREATE_STUDENT_SUCCESS,
  };
}

export function createStudentFailed() {
  return {
    type: constants.CREATE_STUDENT_FAILED,
  };
}
