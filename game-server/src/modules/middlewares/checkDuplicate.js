import User from '../../modules/user/userModel';
import types from '../user/constants';

export default function checkDuplicate(req, res, next) {
  const { username, email } = req.body.data;
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
