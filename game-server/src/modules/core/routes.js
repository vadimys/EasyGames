import signup from '../auth/controllers/register';
import signin from '../auth/controllers/login';
import checkDuplicate from '../middlewares/checkDuplicate';

export default function routes(app) {
  app.post('/signup', [checkDuplicate], signup);
  app.post('/signin', signin);
}
