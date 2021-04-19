import Session from '../gameSessionModel';

export default function getGame(req, res) {
  const { userId } = req.body;

  Session.findOne({ userId }).exec((err, doc) => {
    if (err) return res.status(500).send({ message: err });

    doc &&
      res.status(200).send({
        id: doc.id,
        sessionId: doc._id,
        dimension: doc.dimension,
      });
  });
}
