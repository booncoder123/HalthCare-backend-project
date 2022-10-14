import mongoose from "mongoose";

const MedicalStaff = new mongoose.Schema(
  {
    hospitalId: {
      type: mongoose.Types.ObjectId,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    role: {
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

export default mongoose.model("medical staff", MedicalStaff);
