import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

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
