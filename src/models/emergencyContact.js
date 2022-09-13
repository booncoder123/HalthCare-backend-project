import mongoose from "mongoose";

const EmergencyContact = new mongoose.Schema(
  {
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
