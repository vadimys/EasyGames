import Session from '../gameSessionModel';
import Game from '../gameModel';
import User from '../../user/userModel';

export default function start(req, res) {
  const { id, userId, dimension } = req.body;
  const session = new Session();
  let userSessions = null;

  if (userId) {
    User.findOne({ _id: userId }).exec((err, user) => {
      if (err) return res.status(500).send({ message: err });
      if (!user) return res.status(404).send({ message: 'User not found' });

      if (user && user.sessions) {
        userSessions = user.sessions;
      }
    });
  }

  Game.findOne({ id }).exec((err, game) => {
    if (err) return res.status(500).send({ message: err });

    const { data } = game;

    if (data) {
      const dimensions = data.dimension;

      if (dimensions) {
        const size =
          typeof dimension === 'object' ? dimension : dimensions[Number(dimension)];

        if (!size) return res.status(500).send({ message: 'Dimensions data not found!' });
        let score = 0;

        if (userSessions) {
          userSessions.forEach(session => {
            if (
              session.id === id &&
              session.dimension === size.width + '' + size.height
            ) {
              score = session.score;
            }
          });
        }

        session.id = id;
        session.userId = userId;
        session.score = score;
        session.dimension = {
          width: size.width,
          height: size.height,
        };
        session.save((err, doc) => {
          if (err) return res.status(500).send({ message: err });

          res.status(200).send({
            id,
            sessionId: doc._id,
            dimension: size,
          });
        });
      } else {
        return res.status(500).send({ message: 'Incorrect dimension!' });
      }
    } else {
      return res.status(500).send({ message: 'No game data!' });
    }
  });
}
