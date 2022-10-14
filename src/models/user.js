import mongoose from "mongoose";

const User = new mongoose.Schema({
  addressId: {
    type: mongoose.Types.ObjectId,
  },
  contactId: {
    type: mongoose.Types.ObjectId,
  },
  NFCId: {
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
  password: {
    type: String,
  },
  faceImg: {
    type: String,
  },
  nationalIdImg: {
    type: String,
  },
  verificationStatus: {
    type: String,
  },
});
