import { all } from 'redux-saga/effects'
import matchesData from '../demoSaga/demoSafa'

export default function* rootSaga() {
  yield all([
    matchesData()
  ]);
}