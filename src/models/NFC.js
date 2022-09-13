import mongoose from "mongoose";

const NFC = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("NFC", NFC);
