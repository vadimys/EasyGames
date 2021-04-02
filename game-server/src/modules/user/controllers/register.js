import User from '../userModel';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export default async function signup(req, res) {
  const { username, email, password } = req.body.userData;
  const user = new User({ username, email, password: bcrypt.hashSync(password, 10) });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });

      return;
    }

    user.id = new mongoose.Types.ObjectId();
    res.send({ message: 'User was successfully registered!' });
  });
}
