import { put, takeLatest } from 'redux-saga/effects'

import API from '../../services/API.services'

import constants from '../constants'

function* getRandomUserSaga(action) {
  try {
    const response = yield API.get()

    yield put({
      type: constants.GET_RANDOM_USER_SUCCESS, payload: response.results
    })

    if(action.payload==='ADD'){
      yield put({
        type: constants.ADD_MY_FAVOURITE, payload: response.results[0]
      });
    }

  } catch (e) {
    yield put({
      type: constants.GET_RANDOM_USER_FAILED, payload: e.response
    })
  }
}



export default function* geatRandomUser() {
  yield takeLatest(constants.GET_RANDOM_USER, getRandomUserSaga);
}