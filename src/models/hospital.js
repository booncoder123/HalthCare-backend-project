import mongoose from "mongoose";

const Hospital = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
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
export default mongoose.model("hospital", Hospital);
