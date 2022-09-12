import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const NFC = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("NFC", NFC);
