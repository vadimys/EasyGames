import signup from '../user/controllers/register';
import signin from '../user/controllers/login';
import updateType from '../user/controllers/updateType';
import getAllGames from '../game/controllers/getAll';
import checkDuplicate from '../middlewares/checkDuplicate';
import getGamesByTypes from '../middlewares/getGamesByTypes';
import setGameLike from '../middlewares/setGameLike';

export default function routes(app) {
  app.post('/signup', [checkDuplicate], signup);
  app.post('/signin', signin);
  app.post('/update/favorite', updateType);
  app.post('/update/like', [setGameLike], updateType);
  app.get('/games/:id', [getGamesByTypes], getAllGames);
  app.get('/games', getAllGames);
}
