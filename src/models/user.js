import mongoose from "mongoose";

const User = new mongoose.Schema(
  {
    addressId: {
      type: mongoose.Types.ObjectId
    },
    contactId: {
      type: mongoose.Types.ObjectId,
    },
    medicalId: {
      type: mongoose.Types.ObjectId,
    },
    role: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    faceImg: {
      type: String,
    },
    nationalIdImg: {
      type: String,
    },
    emailVerify: {
      type: Boolean,
      default: false,
    },
    uid: {
      type: String,
      unique: true,
    },
    providerId: { type: String, lowercase: true },
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

export default mongoose.model("user", User);
