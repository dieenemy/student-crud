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
  console.log('regender...');
  // See example in containers/HomePage/saga.js
  const requestURL = `http://10.9.11.134:8080/api/subjects?search&page=1&limit=5`;
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
  const requestURL = `http://10.9.11.134:8080/api/subjects/${id}`;
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
  const requestURL = `http://10.9.11.134:8080/api/subjects/${subject.id}`;
  const newSubject = { ...subject };
  delete newSubject.id;
  const options = {
    method: 'PUT',
    body: JSON.stringify(newSubject),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
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
  yield takeLatest(constants.UPDATE_SUBJECT_SUCCESS, subjectsSaga);
  yield takeLatest(constants.DELETE_SUBJECT_FAILED, subjectsSaga);
}
