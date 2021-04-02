import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema({
  id: Number,
  type: String,
  name: String,
  likeCount: Number,
  players: {
    amount: String,
    text: String,
  },
  description: String,
  history: String,
  strategy: String,
  variations: String,
});

export default mongoose.model('Game', schema);
