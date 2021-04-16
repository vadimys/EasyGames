import mongoose from 'mongoose';

export default mongoose.model(
  'GameSession',
  new mongoose.Schema({
    id: Number,
    dimension: Array,
  }),
);
