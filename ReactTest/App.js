import React from 'react'
import { Provider } from 'react-redux'

import Navigator from './src/Navigation/index'
import store from './src/redux/createStore'

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

export default App

