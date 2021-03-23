import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, createLogger({
        collapsed: true
    }))));

export default store;
