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

export async function returnEmergencyCaseById(emergencyCaseId) {
  if (isMongooseId(emergencyCaseId)) {
    return await EmergencyCaseModel.findOne({
      _id: emergencyCaseId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "id is invalid",
      status: 404,
    };
  }
}

export async function returnEmergencyCaseByUserId(userId) {
  if (isMongooseId(userId)) {
    return await EmergencyCaseModel.findOne({
      userId: userId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "id is invalid",
      status: 404,
    };
  }
}

export async function returnAllEmergencyCase() {
  return await EmergencyCaseModel.find({
    isDeleted: false,
  });
}

export async function updateEmergencyCaseById(payload, emergencyCaseId) {
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

  if (isMongooseId(emergencyCaseId)) {
    return await EmergencyCaseModel.findOneAndUpdate(
      {
        _id: emergencyCaseId,
        isDeleted: false,
      },
      {
        userId,
        alertness,
        alertnessLevel,
        symptoms,
        patientNumber,
        urgencyLevel,
        emergencyStatus,
        gender,
        ageRange,
      },
      { new: true, omitUndefined: true }
    );
  } else {
    throw {
      message: "id is invalid",
      status: 404,
    };
  }
}

export async function softDeleteEmergencyCaseById(emergencyCaseId) {
  if (isMongooseId(emergencyCaseId)) {
    return await EmergencyCaseModel.findOneAndUpdate(
      {
        _id: emergencyCaseId,
        isDeleted: false,
      },
      {
        isDeleted: true,
      },
      { new: true, omitUndefined: true }
    );
  } else {
    throw {
      message: "id is not valid",
      status: 404,
    };
  }
}
