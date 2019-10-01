import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'glamorous-native'
import createSagaMiddleware from 'redux-saga'

import Navigator from './src/Navigation/index'
import store from './src/redux/createStore'
import theme from './src/themes/theme'
import rootSaga from './src/redux/rootSaga'

// const sagaMiddleware = createSagaMiddleware().run(rootSaga);
const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  </Provider>
)
// sagaMiddleware.run(rootSaga);

export default App

