import mongoose from 'mongoose';
const { Schema } = mongoose;

export default mongoose.model(
  'User',
  new Schema(
    {
      email: String,
      username: String,
      password: String,
      roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
      },
    },
    { timestamps: {} },
  ),
);
