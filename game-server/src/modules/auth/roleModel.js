import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'Role',
  new Schema({
    name: String,
  }),
);
