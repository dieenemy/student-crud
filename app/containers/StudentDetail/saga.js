import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { GET_STUDENT_REQUEST } from './constants';
import { getStudentSuccess, getStudentFailed } from './actions';

// Individual exports for testing
export function* studentDetailSaga(action) {
  // See example in containers/HomePage/saga.js
  const { id } = action;
  const requestURL = `https://jsonplaceholder.typicode.com/users/${id}`;
  try {
    const user = yield call(request, requestURL);
    console.log(user);
    yield put(getStudentSuccess(user));
  } catch (err) {
    yield put(getStudentFailed(err));
  }
}

export default function* getStudent() {
  yield takeLatest(GET_STUDENT_REQUEST, studentDetailSaga);
}
