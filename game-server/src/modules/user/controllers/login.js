import User from '../userModel';
import bcrypt from 'bcryptjs';

export default async function signin(req, res) {
  const { username, password } = req.body;

  User.findOne({ username }).exec((err, user) => {
    if (err) {
      return res.status(500).send({ message: err });
    }

    if (!user) {
      return res.status(404).send({ message: 'User Not found.' });
    }

    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid) {
      return res.status(401).send({
        message: 'Invalid Password!',
      });
    }

    res
      .cookie('sid', user._id)
      .status(200)
      .send({
        id: user._id,
        username: user.username,
        email: user.email,
      });
  });
}
