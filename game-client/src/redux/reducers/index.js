import { combineReducers } from 'redux';
import authentication from './loginReducer';
import registration from './registrationReducer';
import alert from './alertReducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    alert
});

export default rootReducer;
