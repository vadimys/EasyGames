import Game from '../data/game/gameModel';

export default function setGameLike(req, res, next) {
  const { gameId, value } = req.body;

  Game.findOne({ id: gameId }, (err, doc) => {
    if (err) return res.status(500).send({ message: err });

    if (doc.likeCount) {
      doc.likeCount = value ? doc.likeCount++ : doc.likeCount > 0 && doc.likeCount--;
    } else {
      doc.likeCount = 1;
    }

    next();
    doc.save();
  });
}
