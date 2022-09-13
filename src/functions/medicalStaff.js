import MedicalStaffModel from "../models/medicalStaff.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createMedicalStaff(payload) {
  const { hospitalId, firstName, lastName, role } = payload;

  return await MedicalStaffModel.create({
    hospitalId,
    firstName,
    lastName,
    role,
  });
}

export async function returnAllMedicalStaff() {
  return await MedicalStaffModel.find({
    isDeleted: false,
  });
}

export async function returnMedicalStaffById(id) {
  if (isMongooseId(id)) {
    return await MedicalStaffModel.findOne({
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

export async function returnMedicalStaffByHospitalId(hospitalId) {
  if (isMongooseId(hospitalId)) {
    return await MedicalStaffModel.findOne({
      hospitalId: hospitalId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function updateMedicalStaffById(payload, id) {
  const { hospitalId, firstName, lastName, role } = payload;
  if (isMongooseId(id)) {
    return await MedicalStaffModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        hospitalId,
        firstName,
        lastName,
        role,
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

export async function softDeleteMedicalStaffById(id) {
  if (isMongooseId(id)) {
    return await MedicalStaffModel.findOneAndUpdate(
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
