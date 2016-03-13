import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createMiddleware, createLoader} from 'redux-storage'
import createLogger from 'redux-logger';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';

import * as reducers from '../reducers';
import Tindle from './Tindle';

const engine = createEngine('@TINDLE:STORAGE');

const middleware = applyMiddleware(thunk, createMiddleware(engine), createLogger());
const reducer = combineReducers(reducers);
const store = createStore(reducer, {}, middleware);
const load = createLoader(engine);

load(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tindle />
      </Provider>
    );
  }
}
