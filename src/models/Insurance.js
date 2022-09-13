import mongoose from "mongoose";

const Insurance = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  number: {
    type: String,
  },
  type: {
    type: String,
  },
  company: {
    type: String,
  },
});

export default mongoose.model("insurance", Insurance);
