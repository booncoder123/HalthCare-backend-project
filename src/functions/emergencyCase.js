import EmergencyCaseModel from "../models/emergencyCase.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createEmergencyCase(payload) {
  const {
    userId,
    alertness,
    alertnessLevel,
    symptoms,
    patientNumber,
    urgencyLevel,
    emergencyStatus,
    gender,
    ageRange,
  } = payload;

  if (isMongooseId(userId)) {
    return await EmergencyCaseModel.create({
      userId,
      alertness,
      alertnessLevel,
      symptoms,
      patientNumber,
      urgencyLevel,
      emergencyStatus,
      gender,
      ageRange,
    });
  } else {
    throw {
      message: "user id is invalid",
      status: 404,
    };
  }
}
