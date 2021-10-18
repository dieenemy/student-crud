import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import * as constant from './constants';

import { getDetailSubjectSuccess, getDetailSubjectFailed } from './actions';

// Individual exports for testing
export function* subjectDetailSaga(action) {
  const { id } = action;
  const requestURL = `https://jsonplaceholder.typicode.com/users/${id}`;
  try {
    const subject = yield call(request, requestURL);
    yield put(getDetailSubjectSuccess(subject));
  } catch (err) {
    yield put(getDetailSubjectFailed(err));
  }
}

export default function* getSubject() {
  yield takeLatest(constant.GET_SUBJECT_REQUEST, subjectDetailSaga);
}
