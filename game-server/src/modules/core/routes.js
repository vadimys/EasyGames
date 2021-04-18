import signup from '../data/user/controllers/register';
import signin from '../data/user/controllers/login';
import updateGameProp from '../data/user/controllers/updateGameProp';
import getAllGames from '../data/game/controllers/getAll';
import getGameProps from '../data/game/controllers/getGameProps';
import checkDuplicate from '../middlewares/checkDuplicate';
import setGameLike from '../middlewares/setGameLike';
import start from '../data/game/controllers/startGame';
import finish from '../data/game/controllers/finishGame';
import gameAction from '../data/game/controllers/gameAction';
import getGame from '../data/game/controllers/getGame';

export default function routes(app) {
  app.post('/signup', [checkDuplicate], signup);
  app.post('/signin', signin);
  app.post('/update/favorite', updateGameProp);
  app.post('/update/like', [setGameLike], updateGameProp);
  app.get('/props/:id', getGameProps);
  app.get('/games', getAllGames);
  app.post('/start', start);
  app.post('/game', getGame);
  app.post('/finish', finish);
  app.post('/action', gameAction);
}
