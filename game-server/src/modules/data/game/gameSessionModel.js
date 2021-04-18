import mongoose from 'mongoose';

export default mongoose.model(
  'GameSession',
  new mongoose.Schema({
    id: Number,
    userId: mongoose.Types.ObjectId,
    dimension: {
      type: Object,
      default: {},
    },
  }),
);
