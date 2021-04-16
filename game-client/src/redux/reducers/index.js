import { combineReducers } from 'redux';
import { login } from './loginReducer';
import { registration } from './registrationReducer';
import { alert } from './alertReducer';
import { games } from './gamesReducer';
import { game } from './gameReducer';

const rootReducer = combineReducers({
  login,
  registration,
  alert,
  games,
  game
});

export default rootReducer;
