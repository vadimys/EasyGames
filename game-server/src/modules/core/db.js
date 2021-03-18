import mongoose from 'mongoose';

export default function mongoConnection() {
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
  const db = mongoose.connection;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db.on('error', console.error.bind(console, 'Mongoose connection error:'));
  db.on('disconnected', () => console.log('Mongoose connection disconnected'));
  db.once('open', () => console.log('Mongoose connection opened!'));
}
