import { combineReducers } from 'redux';
import { authentication } from './loginReducer';
import { registration } from './registrationReducer';
import { alert } from './alertReducer';
import { games } from './gamesReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  games
});

export default rootReducer;
