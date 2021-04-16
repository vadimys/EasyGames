import mongoose from 'mongoose';

export default mongoose.model(
  'Game',
  new mongoose.Schema({
    id: Number,
    type: String,
    name: String,
    isExclusive: Boolean,
    isAvailable: Boolean,
    likeCount: Number,
    data: {
      selectStep: Boolean,
      dimension: Array,
    },
    info: {
      general: String,
      description: String,
      history: String,
      strategy: String,
      variations: String,
    },
  }),
);
