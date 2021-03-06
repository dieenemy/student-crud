// import { take, call, put, select } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import * as constants from './constants';

import {
  getSubjectFailed,
  getSubjectSuccess,
  createSubjectSuccess,
  createSubjectFailure,
  removeSubjectSuccess,
  removeSubjectFailure,
  updateSubjectSuccess,
  updateSubjectFailure,
  searchSubjectFailure,
  searchSubjectSuccess,
} from './actions';

// Individual exports for testing
export function* subjectsSaga() {
  // See example in containers/HomePage/saga.js
  const requestURL = `https://jsonplaceholder.typicode.com/users?limit=10`;
  try {
    const subjects = yield call(request, requestURL);
    yield put(getSubjectSuccess(subjects));
  } catch (err) {
    yield put(getSubjectFailed(err));
  }
}

export function* createSubjectSaga(action) {
  const { subject } = action;
  const requestURL = `https://jsonplaceholder.typicode.com/users`;
  const options = {
    method: 'POST',
    body: JSON.stringify(subject),
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(createSubjectSuccess(response));
  } catch (err) {
    yield put(createSubjectFailure(err));
  }
}

export function* deleteSubjectSaga(action) {
  const { id } = action;
  const requestURL = `https://jsonplaceholder.typicode.com/users/${id}`;
  const options = {
    method: 'DELETE',
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(removeSubjectSuccess(response));
  } catch (err) {
    yield put(removeSubjectFailure(err));
  }
}

export function* updateSubjectSaga(action) {
  const { subject } = action;
  const requestURL = `https://jsonplaceholder.typicode.com/users${subject.id}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(subject),
  };
  try {
    const response = yield call(request, requestURL, options);
    yield put(updateSubjectSuccess(response));
  } catch (err) {
    yield put(updateSubjectFailure(err));
  }
}

export function* searchSubjectsSaga() {
  // See example in containers/HomePage/saga.js
  const requestURL = `https://jsonplaceholder.typcode.com/users`;
  try {
    const subjects = yield call(request, requestURL);
    yield put(searchSubjectSuccess(subjects));
  } catch (err) {
    yield put(searchSubjectFailure());
  }
}

export default function* Subjects() {
  yield takeLatest(constants.GET_SUBJECT_REQUEST, subjectsSaga);
  yield takeLatest(constants.POST_SUBJECT_REQUEST, createSubjectSaga);
  yield takeLatest(constants.DELETE_SUBJECT_REQUEST, deleteSubjectSaga);
  yield takeLatest(constants.UPDATE_SUBJECT_REQUEST, updateSubjectSaga);
  yield takeLatest(constants.SEARCH_SUBJECT_REQUEST, searchSubjectsSaga);
}
