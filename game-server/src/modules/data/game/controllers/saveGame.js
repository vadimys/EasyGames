import Session from '../gameSessionModel';
import User from '../../user/userModel';

export default function save(req, res) {
  const { sessionId } = req.body;

  if (sessionId) {
    Session.findOneAndDelete({ _id: sessionId }).exec((err, doc) => {
      if (err) return res.status(500).send({ message: err });

      if (doc) {
        const { userId, id, dimension } = doc;
        const data = {
          id,
          dimension: dimension.width + '' + dimension.height,
          score: Math.floor(Math.random() * 100),
        };

        User.findByIdAndUpdate(userId, {
          $addToSet: {
            sessions: {
              id: data.id,
              dimension: data.dimension,
              score: data.score,
            },
          },
        }).exec();

        res.status(200).send({ message: 'Game saved successfully!' });
      }
    });
  }
}
