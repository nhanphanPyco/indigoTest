import { call, put, takeLatest } from 'redux-saga/effects'

import API from '../../services/API.services'

import constants from '../constans'

function* getRandomUserSaga() {
  try {
    const response = yield API.get()
    yield put({
      type: constants.GET_RANDOM_USER_SUCCESS, payload: response.results
    });
  } catch (e) {
    console.log('error', e);
  }
}



export default function* geatRandomUser() {
  yield takeLatest(constants.GET_RANDOM_USER, getRandomUserSaga);
}