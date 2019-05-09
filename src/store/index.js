import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';

const sagaMiddlewares = createSagaMiddleware();

const applyMiddlewares = [sagaMiddlewares];

const composer = applyMiddleware(...applyMiddlewares);

const store = createStore(reducers, composer);

sagaMiddlewares.run(sagas);

export default store;
