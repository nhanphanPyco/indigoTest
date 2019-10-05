import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import {
  createNetworkMiddleware,
  offlineActionTypes,
  checkInternetConnection
} from 'react-native-offline'

import rootReducer from './reducer'
import rootSaga from './rootSaga'


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist:[
    'users',
  ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const networkMiddleware = createNetworkMiddleware();

const store = createStore(persistedReducer, applyMiddleware(networkMiddleware, sagaMiddleware));

const persistor = persistStore(store, {}, () => {
  checkInternetConnection().then(isConnected => {
    store.dispatch({
      type: offlineActionTypes.CONNECTION_CHANGE,
      payload: isConnected
    })
  })
});

sagaMiddleware.run(rootSaga)

export { store, persistor }




