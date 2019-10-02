import { combineReducers } from 'redux'

import user from './reducers/user.reducer'

const rootReducers = {
  user
}
const reducer = combineReducers(rootReducers)

export default reducer
