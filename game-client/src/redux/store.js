import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import createSaga from 'redux-saga';
import rootSaga from './sagas';

const saga = createSaga();
const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(saga, createLogger({
    collapsed: true
  }))));

saga.run(rootSaga);

export default store;
