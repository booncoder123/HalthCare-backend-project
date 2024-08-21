import mongoose from "mongoose";

const Product = new mongoose.Schema(
  {
    pharmacyId: {
        type: mongoose.Types.ObjectId
      },
    name: {
      type: String,
    },
    amount: {
      type: String,
    },
    price: {
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

export default mongoose.model("product", Product);
