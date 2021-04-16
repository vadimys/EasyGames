import Session from '../gameSessionModel';

export default function finish(req, res) {
  const { sessionId } = req.body;

  Session.findOneAndDelete({ _id: sessionId }).exec(err => {
    if (err) return res.status(500).send({ message: err });

    res.status(200).send({ message: 'Finished successfully!' });
  });
}
