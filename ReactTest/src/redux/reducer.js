import { combineReducers } from 'redux'

import users from './reducers/user.reducer'

const rootReducers = {
  users
}
const reducer = combineReducers(rootReducers)

export default reducer
