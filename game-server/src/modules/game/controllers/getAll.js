import Game from '../gameModel';

export default async function getAll(req, res) {
  Game.find({}, (err, games) => {
    if (err) return res.status(500).send({ message: err });

    res.status(200).send({ list: games });
  });
}
