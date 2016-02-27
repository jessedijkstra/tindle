import React, { Component, AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import cardStorageMiddleWare from '../middleware/cardStorageMiddleware';

import * as reducers from '../reducers';
import Tindle from './Tindle';

const middleware = applyMiddleware(
  thunk,
  createLogger(),
  cardStorageMiddleWare(AsyncStorage)
);

const reducer = combineReducers(reducers);
const store = createStore(reducer, {}, middleware);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tindle />
      </Provider>
    );
  }
}
