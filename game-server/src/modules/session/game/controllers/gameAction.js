import Session from '../gameSessionModel';

export default function gameAction(req, res) {
  const { sessionId, gridIndex } = req.body;

  const session = Session.findOne({ _id: sessionId }, (err, doc) => {
    if (err) return res.status(500).send({ message: err });
    const { dimension } = doc;
    const [height, width] = gridIndex.split('');
    const arr = [...dimension];

    arr[Number(height)][Number(width)] = 1;
    console.log(arr);
    doc[dimension] = arr;
    doc.save();

    // res.status(200).send({ message: 'Finished successfully!' });
  });

  /*Session.update({'items.id': 2}, {'$set': {
      'items.$.name': 'updated item2',
      'items.$.value': 'two updated'
    }}, function(err) { ...*/

    /*players.updateOne(
      { name: "Cristiano Ronaldo" },
      { $push: { clubs: ["Manchester United"] } },
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
    );*/
}
