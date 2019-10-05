import { all } from 'redux-saga/effects'
import { networkSaga } from 'react-native-offline'

import getRandomUserSaga from './sagas/getRandomUser.saga'

export default function* rootSaga() {
  yield all([
    getRandomUserSaga(),
    networkSaga()
  ]);
}