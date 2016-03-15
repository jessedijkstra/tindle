import React from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createMiddleware, createLoader } from 'redux-storage';
import createLogger from 'redux-logger';
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import debounce from 'redux-storage-decorator-debounce';

import * as reducers from '../reducers';
import Tindle from './Tindle';

const engine = debounce(createEngine('@TINDLE:STORAGE'), 1000);

const middleware = applyMiddleware(thunk, createMiddleware(engine), createLogger());
const reducer = combineReducers(reducers);
const store = createStore(reducer, {}, middleware);
const load = createLoader(engine);

load(store);

export default () => (<Provider store={store}><Tindle /></Provider>);
