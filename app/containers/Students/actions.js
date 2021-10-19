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

export function getStudentRequest(obj) {
  return {
    type: constants.GET_STUDENTS_REQUEST,
    obj,
  };
}

export function getStudentRequestSuccess(students) {
  return {
    type: constants.GET_STUDENTS_SUCCESS,
    students,
  };
}

export function getStudentRequestFailed(errors) {
  return {
    type: constants.GET_STUDENTS_FAILED,
    errors,
  };
}

export function deleteStudentRequest(id) {
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

export function updateStudentRequest(id, student) {
  return {
    type: constants.CREATE_STUDENT_REQUEST,
    student,
    id,
  };
}

export function updateStudentSuccess() {
  return {
    type: constants.CREATE_STUDENT_SUCCESS,
  };
}

export function updateStudentFailed() {
  return {
    type: constants.CREATE_STUDENT_FAILED,
  };
}
