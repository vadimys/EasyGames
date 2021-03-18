import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './Reducers';
import history from '../History';

const store = createStore(connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk, createLogger({
    collapsed: true
  }))));

export default store;
