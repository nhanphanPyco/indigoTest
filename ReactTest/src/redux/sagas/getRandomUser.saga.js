import { call, put, takeLatest } from 'redux-saga/effects'

import API from '../../services/API.services'

import constants from '../constans'

function* getRandomUserSaga() {
  console.log('API', API)
  const response = yield API.get('?randomapi')
  console.log('response: ', response)
  // try {, 
  //   const anonymousProfilesData = yield call(createAnonymousProfiles);
  //   yield put({
  //     type: CREATE_ANONYMOUS_PROFILE_SUCCEED,
  //     payload: anonymousProfilesData
  //   });
  // } catch (e) {
  //   yield put({ type: CREATE_ANONYMOUS_PROFILE_FAILED, payload: e.message });
  // }
}



export default function* geatRandomUser() {
  yield takeLatest(constants.GET_RANDOM_USER, getRandomUserSaga);
}