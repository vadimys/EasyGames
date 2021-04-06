import signup from '../user/controllers/register';
import signin from '../user/controllers/login';
import updateGameProp from '../user/controllers/updateGameProp';
import getAllGames from '../game/controllers/getAll';
import getGameProps from '../game/controllers/getGameProps';
import checkDuplicate from '../middlewares/checkDuplicate';
import setGameLike from '../middlewares/setGameLike';

export default function routes(app) {
  app.post('/signup', [checkDuplicate], signup);
  app.post('/signin', signin);
  app.post('/update/favorite', updateGameProp);
  app.post('/update/like', [setGameLike], updateGameProp);
  app.get('/props/:id', getGameProps);
  app.get('/games', getAllGames);
}
