import mongoose from 'mongoose';

export default function mongoConnection() {
  const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
  const db = mongoose.connection;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  db.on('error', console.error.bind(console, 'Mongoose connection error:'));
  db.on('disconnected', () => console.log('Mongoose connection disconnected'));
  db.once('open', () => console.log('Mongoose connection opened!'));

  /*const MongoDBStore = connectMongoDBSession(session);
  const TWO_HOURS = 1000 * 60 * 60 * 24;
  const IN_PROD = process.env.NODE_ENV === 'prod';
  const {
    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!easygames-!secret',
    SESS_LIFETIME = TWO_HOURS,
  } = process.env;
  const store = new MongoDBStore({
    uri,
    collection: 'sessions',
  });

  app.use(cookieParser());
  app.use(
    session({
      name: SESS_NAME,
      resave: false,
      saveUninitialized: true,
      secret: SESS_SECRET,
      cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD,
      },
      store,
    }),
  );*/
}
