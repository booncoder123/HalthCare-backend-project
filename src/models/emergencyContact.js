import mongoose from "mongoose";

const EmergencyContact = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
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

export default mongoose.model("emergency contact", EmergencyContact);
