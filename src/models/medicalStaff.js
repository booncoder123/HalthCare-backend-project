import mongoose from "mongoose";

const MedicalStaff = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  firstName: {
    type: String,
    required: "true",
  },
  lastName: {
    type: String,
    required: "true",
  },
  role: {
    type: String,
    required: "true",
  },
});

export default mongoose.model("medical staff", MedicalStaff);
