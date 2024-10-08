import MedicalInformationModel from "../models/medicalInformation.js";
import UserModel from "../models/user.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createMedicalInformation(payload) {
  const {
    userId,
    allergies,
    phoneNumber,
    congenitalDisease,
    DNRStatus,
    gender,
    firstName,
    lastName,
    organDonour,
    dateOfBirth,
    bloodType,
    powerOfAttorneyName,
    powerOfAttorneyPhoneNumber,
    powerOfAttorneyRelationship,
    regularMed,
  } = payload;

  const medicalInformation = await MedicalInformationModel.create({
    allergies,
    phoneNumber,
    congenitalDisease,
    DNRStatus,
    gender,
    firstName,
    lastName,
    organDonour,
    dateOfBirth,
    bloodType,
    powerOfAttorneyName,
    powerOfAttorneyPhoneNumber,
    powerOfAttorneyRelationship,
    regularMed,
  });

  //add medicalId to user model
  await UserModel.findByIdAndUpdate(
    {
      _id: userId,
      isDeleted: false,
    },
    {
      medicalId: medicalInformation._id,
    },
    {
      new: true,
      omitUndefined: true,
    }
  );

  return medicalInformation;
}

export async function returnAllMedicalInformation() {
  return await MedicalInformationModel.find({
    isDeleted: false,
  });
}

export async function returnMedicalInformationById(id) {
  if (isMongooseId(id)) {
    return await MedicalInformationModel.findOne({
      _id: id,
      isDeleted: false,
    });
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function updateMedicalInformationById(payload, id) {
  const {
    allergies,
    phoneNumber,
    congenitalDisease,
    DNRStatus,
    gender,
    firstName,
    lastName,
    organDonour,
    dateOfBirth,
    bloodType,
    powerOfAttorneyName,
    powerOfAttorneyPhoneNumber,
    powerOfAttorneyRelationship,
    regularMed,
  } = payload;
  if (isMongooseId(id)) {
    return await MedicalInformationModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        allergies,
        phoneNumber,
        congenitalDisease,
        DNRStatus,
        gender,
        firstName,
        lastName,
        organDonour,
        dateOfBirth,
        bloodType,
        powerOfAttorneyName,
        powerOfAttorneyPhoneNumber,
        powerOfAttorneyRelationship,
        regularMed,
      },
      {
        new: true,
        omitUndefined: true,
      }
    );
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function softDeleteMedicalInformationById(id) {
  if (isMongooseId(id)) {
    return await MedicalInformationModel.findOneAndUpdate(
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
