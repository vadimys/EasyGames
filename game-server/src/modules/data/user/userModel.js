import mongoose from 'mongoose';

export default mongoose.model(
  'User',
  new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    favorite: Array,
    like: Array,
    settings: {
      type: Object,
      default: {
        firstStep: true,
        gripSymbol: '0',
      },
    },
  }),
);
