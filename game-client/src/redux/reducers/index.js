import { combineReducers } from 'redux';
import { authentication } from './loginReducer';
import { registration } from './registrationReducer';
import { alert } from './alertReducer';
import { allGames } from './gamesReducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  allGames
});

export default rootReducer;
