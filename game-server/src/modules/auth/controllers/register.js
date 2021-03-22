import User from '../userModel';
import bcrypt from 'bcryptjs';

export default async function signup(req, res) {
  const { username, email, password } = req.body.userData;
  const user = new User({ username, email, password: bcrypt.hashSync(password, 8) });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });

      return;
    }

    user.roles = ['user'];
    res.send({ message: 'User was successfully registered!' });
  });
}
