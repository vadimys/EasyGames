import User from '../userModel';

export default async function updateGameProp(req, res) {
  const { userId, value, type, gameId } = req.body;

  User.findOne({ _id: userId }, (err, doc) => {
    if (err) return res.status(500).send({ message: err });

    const newTypes = [];

    doc[type].forEach(id => {
      if (id === gameId && !value) {
        return;
      }

      newTypes.push(id);
    });
    newTypes.indexOf(gameId) === -1 && value && newTypes.push(gameId);
    doc[type] = newTypes;
    doc.save();

    return res.status(200).send(doc[type]);
  });
}
