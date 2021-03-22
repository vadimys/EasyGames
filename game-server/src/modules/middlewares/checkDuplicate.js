import User from '../../modules/auth/userModel';
import types from '../auth/constants';

export default function checkDuplicate(req, res, next) {
  const { username, email } = req.body.userData;
  const onErrors = (err, user, isUser = true) => {
    const message = isUser ? types.ERR_USER_EXIST : types.ERR_EMAIL_EXIST;
    const onError = (code, message) => res.status(code).send({ message });
    const isExist = !!(err || user);

    isExist && (err ? onError(500, err) : onError(400, message));

    return isExist;
  };

  User.findOne({ email }).exec((err, user) => {
    if (!onErrors(err, user, false)) {
      User.findOne({ username }).exec((err, user) => {
        !onErrors(err, user) && next();
      });
    }
  });
}
