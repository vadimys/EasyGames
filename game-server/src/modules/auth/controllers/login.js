import User from '../userModel';
import bcrypt from 'bcryptjs';

export default async function signin(req, res) {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });

      return;
    }

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const isValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: ['user'],
    });
  });
}
