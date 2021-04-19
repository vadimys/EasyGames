import User from '../../user/userModel';

export default async function getGameProps(req, res) {
  if (req.params && req.params.id) {
    User.findOne({ _id: req.params.id }).exec((err, user) => {
      if (err) return res.status(500).send({ message: err });
      if (!user) return res.status(404).send({ message: 'User not found' });

      res.status(200).send({
        favorite: user ? user.favorite : [],
        like: user ? user.like : [],
      });
    });
  }
}
