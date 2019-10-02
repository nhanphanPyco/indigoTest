import { all } from 'redux-saga/effects'
import getRandomUserSaga from './sagas/getRandomUser.saga'

export default function* rootSaga() {
  yield all([
    getRandomUserSaga()
  ]);
}