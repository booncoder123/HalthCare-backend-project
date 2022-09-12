import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const MedicalStaff = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  firstName: {
    type: String,
    required: "true",
  },
  lastName: {
    type: String,
    required: "true",
  },
  role: {
    type: String,
    required: "true",
  },
});

module.exports = mongoose.model("medicalStaff", MedicalStaff);
