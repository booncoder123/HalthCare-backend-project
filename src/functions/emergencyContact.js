import EmergencyContactModel from "../models/emergencyContact.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createEmergencyContact(payload) {
  const { userId, firstName, lastName, email, phoneNumber } = payload;

  if (isMongooseId(userId)) {
    return await EmergencyContactModel.create({
      userId,
      firstName,
      lastName,
      email,
      phoneNumber,
    });
  } else {
    throw {
      message: "user id is invalid",
      status: 404,
    };
  }
}

export async function returnEmergencyContactById(emergencyContactId) {
  if (isMongooseId(emergencyContactId)) {
    return await EmergencyContactModel.findOne({
      _id: emergencyContactId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "id is invalid",
      status: 404,
    };
  }
}

export async function returnEmergencyContactByUserId(userId) {
  if (isMongooseId(userId)) {
    return await EmergencyContactModel.findOne({
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

export async function returnAllEmergencyContact() {
  return await EmergencyContactModel.find({
    isDeleted: false,
  });
}

export async function updateEmergencyContactById(payload, emergencyContactId) {
  const { userId, firstName, lastName, email, phoneNumber } = payload;

  if (isMongooseId(emergencyContactId)) {
    return await EmergencyContactModel.findOneAndUpdate(
      {
        _id: emergencyContactId,
        isDeleted: false,
      },
      {
        userId,
        firstName,
        lastName,
        email,
        phoneNumber,
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

export async function softDeleteEmergencyContactById(emergencyContactId) {
  if (isMongooseId(emergencyContactId)) {
    return await EmergencyContactModel.findOneAndUpdate(
      {
        _id: emergencyContactId,
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
