import mongoose from "mongoose";

const EmergencyCase = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    alertness: {
      type: String,
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
    acceptaceStatus: {
      type: String,
    },
    deliveringStatus: {
      type: String,
    },
    gender: {
      type: String,
    },
    ageRange: {
      type: String,
    },
    numOfPatient: {
      type: String
    },
    dateAndTimeConfirmArrival: {
      type: Date
    },
    latitude: {
      type: String,
    },
    longitude: {
      type: String,
    },
    assigneeName: {
      type: String
    },
    assigneeNumber: {
      type: String
    },
    
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export default mongoose.model("emergency case", EmergencyCase);
