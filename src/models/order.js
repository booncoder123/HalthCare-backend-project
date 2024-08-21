import mongoose from "mongoose";

const Order = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
    },
    products: [
      {
        id: { type: mongoose.Types.ObjectId },
        amount: { type: String },
      },
    ],
    status: {
      type: String,
      default: false,
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

export default mongoose.model("order", Order);
