import Session from '../gameSessionModel';
import Game from '../gameModel';

export default function start(req, res) {
  const { id, userId, dimension } = req.body;
  const session = new Session();

  Game.findOne({ id }).exec((err, game) => {
    if (err) return res.status(500).send({ message: err });

    const { data } = game;

    if (data) {
      const dimensions = data.dimension;

      if (dimensions && dimensions[Number(dimension)]) {
        const size = dimensions[Number(dimension)];

        session.id = id;
        session.userId = userId;
        session.dimension = {
          width: size.width,
          height: size.height,
        };
        session.save((err, doc) => {
          if (err) {
            return res.status(500).send({ message: err });
          }

          res.status(200).send({
            id,
            sessionId: doc._id,
            dimension: dimensions[Number(dimension)],
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

// Array(size.height).fill([...Array(size.width).fill(0)])
