import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReucer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReucer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

export default store;