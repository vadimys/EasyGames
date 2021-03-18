import registration from '../auth/controllers/register';
import login from '../auth/controllers/login';

export default function routes(app) {
  app.post('/register', registration);
  app.post('/login', login);
}
