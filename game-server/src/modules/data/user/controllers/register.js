import User from '../userModel';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export default async function signup(req, res) {
  const { username, email, password } = req.body.data;
  const user = new User({ username, email, password: bcrypt.hashSync(password, 10) });

  user.save((err, user) => {
    if (err) return res.status(500).send({ message: err });

    user.id = new mongoose.Types.ObjectId();
    res.status(200).send({ message: 'User was successfully registered!' });
  });
}
