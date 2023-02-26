import mongoose from "mongoose";

const User = new mongoose.Schema({
  addressId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  contactId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  NFCId: {
    type: mongoose.Types.ObjectId,
  },
  medicalId: {
    type: mongoose.Types.ObjectId,
  },
  role: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  faceImg: {
    type: String,
    required: true,
  },
  nationalIdImg: {
    type: String,
    required: true,
  },
  verificationStatus: {
    type: String,
    required: true,
  },
});
