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
    acceptaceStatus,
    deliveringStatus,
    gender,
    ageRange,
    numOfPatient,
    dateAndTimeConfirmArrival,
    latitude,
    longitude,
    assigneeName,
    assigneeNumber,
  } = payload;

  if (isMongooseId(userId)) {
    return await EmergencyCaseModel.create({
      userId,
      alertness,
      alertnessLevel,
      symptoms,
      patientNumber,
      urgencyLevel,
      acceptaceStatus,
      deliveringStatus,
      gender,
      ageRange,
      numOfPatient,
      dateAndTimeConfirmArrival,
      latitude,
      longitude,
      assigneeName,
      assigneeNumber,
    });
  } else {
    throw {
      message: "user id is invalid",
      status: 404,
    };
  }
}

export async function returnEmergencyCaseById(id) {
  if (isMongooseId(id)) {
    return await EmergencyCaseModel.findOne({
      _id: id,
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

export async function updateEmergencyCaseById(payload, id) {
  const {
    userId,
    alertness,
    alertnessLevel,
    symptoms,
    patientNumber,
    urgencyLevel,
    acceptaceStatus,
    deliveringStatus,
    gender,
    ageRange,
    numOfPatient,
    dateAndTimeConfirmArrival,
    latitude,
    longitude,
    assigneeName,
    assigneeNumber,
  } = payload;

  if (isMongooseId(id)) {
    return await EmergencyCaseModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        userId,
        alertness,
        alertnessLevel,
        symptoms,
        patientNumber,
        urgencyLevel,
        acceptaceStatus,
        deliveringStatus,
        gender,
        ageRange,
        numOfPatient,
        dateAndTimeConfirmArrival,
        latitude,
        longitude,
        assigneeName,
        assigneeNumber,
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

export async function softDeleteEmergencyCaseById(id) {
  if (isMongooseId(id)) {
    return await EmergencyCaseModel.findOneAndUpdate(
      {
        _id: id,
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
