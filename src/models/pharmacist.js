import mongoose from "mongoose";

const Pharmacist = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    imgId: {
      type: String,
    },
    verificationStatus: {
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

export default mongoose.model("pharmacist", Pharmacist);
