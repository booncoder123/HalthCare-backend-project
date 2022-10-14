import mongoose from "mongoose";

const NFC = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    isDeleted: {
      type: Boolean,
    },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

export default mongoose.model("NFC", NFC);
