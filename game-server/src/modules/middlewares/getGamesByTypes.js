import User from '../data/user/userModel';

export default function getGamesByTypes(req, res, next) {
  if (req.params && req.params.id) {
    User.findOne({ _id: req.params.id }).exec((err, user) => {
      req.favorite = user ? user.favorite : [];
      req.like = user ? user.like : [];
      next();
    });
  }
}
