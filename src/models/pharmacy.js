import mongoose from "mongoose";

const Pharmacy = new mongoose.Schema(
  {
    addressId: {
      type: mongoose.Types.ObjectId
    },

    name: {
      type: String,
    },
    description: {
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

export default mongoose.model("pharmacy", Pharmacy);
