import mongoose from 'mongoose';

const { Schema } = mongoose;

const schema = new Schema(
  {
    email: String,
    username: String,
    password: String,
    favorite: Array,
    like: Array,
    score: [
      {
        type: Number,
        value: Number,
      },
    ],
  },
  { timestamps: {} },
);

export default mongoose.model('User', schema);
