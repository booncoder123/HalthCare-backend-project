import mongoose from "mongoose";

const MedicalInformation = new mongoose.Schema({
  allergies: [
    {
      type: String,
    },
  ],
  phoneNumber: {
    type: String,
    required: "true",
  },
  congenitalDisease: {
    type: String,
  },
  DNRStatus: {
    type: String,
  },
  gender: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  NFCStatus: {
    type: String,
  },
  organDonour: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  bloodType: {
    type: String,
  },
  powerOfAttorneyName: {
    type: String,
  },
  powerOfAttorneyPhoneNumber: {
    type: String,
  },
  powerOfAttorneyRelationship: {
    type: String,
  },
  regularMed: {
    type: String,
  },
});

module.exports = mongoose.model("medicalInformation", MedicalInformation);
