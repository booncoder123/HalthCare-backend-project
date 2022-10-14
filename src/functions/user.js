import UserModel from "../models/user.js";
import MedicalInformationModel from "../models/medicalInformation.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createUser(payload) {
  const {
    addressId,
    contactId,
    NFCId,
    medicalId,
    role,
    email,
    faceImg,
    nationalIdImg,
    verificationStatus,
    emailVerify,
    uid,
    providerId,
  } = payload;

  const {
    allergies,
    phoneNumber,
    congenitalDisease,
    DNRStatus,
    gender,
    firstName,
    lastName,
    NFCStatus,
    organDonour,
    dateOfBirth,
    bloodType,
    powerOfAttorneyName,
    powerOfAttorneyPhoneNumber,
    powerOfAttorneyRelationship,
    regularMed,
  } = payload;

  let errorMessage = "";
  if (addressId && !isMongooseId(addressId))
    errorMessage += "address id is not mongoose id";
  if (contactId && !isMongooseId(contactId))
    errorMessage += "contact id is not mongoose id";
  if (NFCId && !isMongooseId(NFCId))
    errorMessage += "NFC id is not mongoose id";
  if (medicalId && !isMongooseId(medicalId))
    errorMessage += "medical id is not mongoose id";

  if (errorMessage !== "") {
    throw {
      message: errorMessage,
      status: 404,
    };
  }

  const user = await UserModel.create({
    addressId,
    contactId,
    NFCId,
    medicalId,
    role,
    email,
    faceImg,
    nationalIdImg,
    verificationStatus,
    emailVerify,
    uid,
    providerId,
  });

  const medicalInformation = await MedicalInformationModel.create({
    allergies,
    phoneNumber,
    congenitalDisease,
    DNRStatus,
    gender,
    firstName,
    lastName,
    NFCStatus,
    organDonour,
    dateOfBirth,
    bloodType,
    powerOfAttorneyName,
    powerOfAttorneyPhoneNumber,
    powerOfAttorneyRelationship,
    regularMed,
  });

  return await { user, medicalInformation };
}
