import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const EmergencyCase = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  alertness: {
    type: String,
    required: "true",
  },
  alertnessLevel: {
    type: String,
  },
  symptoms: [
    {
      type: String,
    },
  ],
  patientNumber: {
    type: String,
  },
  urgencyLevel: {
    type: String,
  },
  emergencyStatus: {
    type: String,
  },
  gender: {
    type: String,
  },
  ageRange: {
    type: String,
  },
});

module.exports = mongoose.model("emergencyCase", EmergencyCase);
