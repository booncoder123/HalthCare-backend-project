import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const Hospital = new mongoose.Schema({
  addressId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  hospitalName: {
    type: String,
    required: "true",
  },
  hospitalType: {
    type: String,
    required: "true",
  },
});

module.exports = mongoose.model("hospital", Hospital);
