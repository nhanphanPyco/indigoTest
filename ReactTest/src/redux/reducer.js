// @flow
import { combineReducers } from 'redux'

import { counterReducers } from '../demoSaga/demo'


const rootReducers = {
  counterReducers: counterReducers
}
const reducer = combineReducers(rootReducers)

export default reducer
