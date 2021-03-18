import mongoose from 'mongoose';
const { Schema } = mongoose;

const authSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    username: String,
    password: String,
  },
  { timestamps: {} },
);

export default mongoose.model('Auth', authSchema);
