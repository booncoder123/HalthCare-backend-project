import mongoose from "mongoose";

const NFC = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

export default mongoose.model("NFC", NFC);
