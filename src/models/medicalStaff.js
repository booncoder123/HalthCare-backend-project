import mongoose from "mongoose";

const MedicalStaff = new mongoose.Schema(
  {
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

export default mongoose.model("medical staff", MedicalStaff);
