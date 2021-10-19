// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import {
  GET_STUDENTS_REQUEST,
  DELETE_STUDENT_REQUEST,
  CREATE_STUDENT_REQUEST,
  UPDATE_STUDENT_REQUEST,
} from './constants';
import {
  getStudentRequestSuccess,
  getStudentRequestFailed,
  deleteStudentSuccess,
  deleteStudentFailed,
  createStudentSuccess,
  createStudentFailed,
  updateStudentSuccess,
  updateStudentFailed,
} from './actions';

export function* getStudentsSaga(action) {
  const { obj } = action;
  // See example in containers/HomePage/saga.js
  const requestURL = `http://10.9.11.134:8080/api/students?${new URLSearchParams(
    obj,
  )}`;
  try {
    const students = yield call(request, requestURL);
    yield put(getStudentRequestSuccess(students));
  } catch (err) {
    yield put(getStudentRequestFailed(err));
  }
}

export function* deleteStudentSaga(action) {
  const { id } = action;
  const requestURL = `http://10.9.11.134:8080/api/students/${id}`;
  const options = {
    method: 'DELETE',
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(deleteStudentSuccess(response));
  } catch (err) {
    yield put(deleteStudentFailed(err));
  }
}

export function* createStudentSaga(action) {
  const { student } = action;
  const requestURL = 'http://10.9.11.134:8080/api/students';
  const options = {
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(createStudentSuccess(response));
  } catch (err) {
    yield put(createStudentFailed(err));
  }
}

export function* updateStudentSaga(action) {
  const { student } = action.student;

  const requestURL = `http://10.9.11.134:8080/api/students/${action.id}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(student),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(updateStudentSuccess(response));
  } catch (err) {
    yield put(updateStudentFailed(err));
  }
}

export default function* Students() {
  yield takeLatest(GET_STUDENTS_REQUEST, getStudentsSaga);
  yield takeLatest(DELETE_STUDENT_REQUEST, deleteStudentSaga);
  yield takeLatest(CREATE_STUDENT_REQUEST, createStudentSaga);
  yield takeLatest(UPDATE_STUDENT_REQUEST, updateStudentSaga);
}
