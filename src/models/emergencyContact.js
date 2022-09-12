import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const EmergencyContact = new mongoose.Schema({
  userId: {
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
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: "true",
  },
});

module.exports = mongoose.model("emergencyContect", EmergencyContact);
