import { combineReducers } from 'redux'
import { reducer as network } from 'react-native-offline'

import users from './reducers/user.reducer'
import myFavourite from './reducers/myFavourite.reducer'


const rootReducers = {
  users,
  myFavourite,
  network
}
const reducer = combineReducers(rootReducers)

export default reducer
