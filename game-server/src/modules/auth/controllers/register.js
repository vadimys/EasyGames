import mongoose from 'mongoose';
import Auth from '../authModel';

export default async function registration(req, res) {
  const _id = new mongoose.Types.ObjectId();
  const data = req.body.userData;

  const auth = new Auth({
    _id,
    email: data.email,
    username: data.username,
    password: data.password,
  });

  auth
    .save()
    .then(() => {
      res.status(201).json('User registered!');
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
