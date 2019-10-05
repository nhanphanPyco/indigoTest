import React from 'react'
import { Provider } from 'react-redux'
import { ReduxNetworkProvider } from 'react-native-offline'
import { PersistGate } from 'redux-persist/lib/integration/react'

import Navigator from './src/Navigation/index'
import { store, persistor } from './src/redux/createStore'

const App = () => (
  <Provider store={store}>
    <ReduxNetworkProvider>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </ReduxNetworkProvider>
  </Provider>
)

export default App

