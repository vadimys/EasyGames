import { combineReducers } from 'redux';
import authentication from '../modules/auth/reducers/LoginReducer';
import registration from '../modules/auth/reducers/RegistrationReducer';
import alert from '../modules/alert/reducers/AlertReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert
});

export default rootReducer;
