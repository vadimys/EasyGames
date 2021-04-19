import Session from '../gameSessionModel';
import start from './startGame';

export default function restart(req, res) {
  const { sessionId } = req.body;

  Session.findOneAndDelete({ _id: sessionId }).exec((err, doc) => {
    if (err) return res.status(500).send({ message: err });

    const { id, userId, dimension } = doc;

    req.body = { id, userId, dimension };
    start(req, res);
  });
}
