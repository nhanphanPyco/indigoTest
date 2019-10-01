import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'glamorous-native'

import Navigator from './src/Navigation/index'
import store from './src/redux/createStore'
import theme from './src/themes/theme'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigator />
    </ThemeProvider>
  </Provider>
)

export default App

