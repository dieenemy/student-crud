// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import {
  GET_STUDENTS_REQUEST,
  DELETE_STUDENT_REQUEST,
  CREATE_STUDENT_REQUEST,
} from './constants';
import {
  getUsersSuccess,
  getUsersFailed,
  deleteStudentSuccess,
  deleteStudentFailed,
  createStudentSuccess,
  createStudentFailed,
} from './actions';

export function* studentsSaga() {
  // See example in containers/HomePage/saga.js
  const requestURL = `https://jsonplaceholder.typicode.com/users?limit=10`;
  try {
    const users = yield call(request, requestURL);
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailed(err));
  }
}

export function* deleteStudentSaga(action) {
  const { id } = action;
  const requestURL = `https://jsonplaceholder.typicode.com/users/${id}`;
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
  const requestURL = `https://jsonplaceholder.typicode.com/users`;
  const options = {
    method: 'POST',
    body: JSON.stringify(student),
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(createStudentSuccess(response));
  } catch (err) {
    yield put(createStudentFailed(err));
  }
}

export default function* Students() {
  yield takeLatest(GET_STUDENTS_REQUEST, studentsSaga);
  yield takeLatest(DELETE_STUDENT_REQUEST, deleteStudentSaga);
  yield takeLatest(CREATE_STUDENT_REQUEST, createStudentSaga);
}
