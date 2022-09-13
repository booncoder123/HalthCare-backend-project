import mongoose from "mongoose";

const Insurance = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  insuranceNumber: {
    type: String,
  },
  insuranceType: {
    type: String,
  },
  insuranceCompany: {
    type: String,
  },
});

module.exports = mongoose.model("insurance", Insurance);
