/*
 *
 * Subjects actions
 *
 */

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
  SEARCH_SUBJECT_REQUEST,
  SEARCH_SUBJECT_SUCCESS,
  SEARCH_SUBJECT_FAILED,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getSubject() {
  return {
    type: GET_SUBJECT_REQUEST,
  };
}

export function getSubjectSuccess(subjects) {
  return {
    type: GET_SUBJECT_SUCCESS,
    subjects,
  };
}

export function getSubjectFailed(error) {
  return {
    type: GET_SUBJECT_FAILED,
    error,
  };
}

export function createSubject(subject) {
  return {
    type: POST_SUBJECT_REQUEST,
    subject,
  };
}

export function createSubjectSuccess() {
  return {
    type: POST_SUBJECT_SUCCESS,
  };
}

export function createSubjectFailure(error) {
  return {
    type: POST_SUBJECT_FAILED,
    error,
  };
}

export function removeSubject(id) {
  return {
    type: DELETE_SUBJECT_REQUEST,
    id,
  };
}

export function removeSubjectSuccess() {
  return {
    type: DELETE_SUBJECT_SUCCESS,
    message: 'delete success',
  };
}

export function removeSubjectFailure() {
  return {
    type: DELETE_SUBJECT_FAILED,
    message: 'delete failed',
  };
}

export function updateSubject(subject) {
  return {
    type: UPDATE_SUBJECT_REQUEST,
    subject,
  };
}

export function updateSubjectSuccess() {
  return {
    type: UPDATE_SUBJECT_SUCCESS,
    message: 'update success',
  };
}

export function updateSubjectFailure() {
  return {
    type: UPDATE_SUBJECT_FAILED,
    message: 'update failed',
  };
}

export function searchSubject(keyword) {
  return {
    type: SEARCH_SUBJECT_REQUEST,
    keyword,
  };
}

export function searchSubjectSuccess(subjects) {
  return {
    type: SEARCH_SUBJECT_SUCCESS,
    subjects,
  };
}

export function searchSubjectFailure() {
  return {
    type: SEARCH_SUBJECT_FAILED,
    message: 'search failed',
  };
}
