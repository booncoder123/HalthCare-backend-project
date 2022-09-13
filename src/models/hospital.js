import mongoose from "mongoose";

const Hospital = new mongoose.Schema(
  {
    addressId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    hospitalName: {
      type: String,
      required: "true",
    },
    hospitalType: {
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
export default mongoose.model("hospital", Hospital);
