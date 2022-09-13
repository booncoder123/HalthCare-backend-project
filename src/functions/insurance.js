import InsuranceModel from "../models/Insurance.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createInsurance(payload) {
  const { userId, insuranceNumber, insuranceType, InsuranceCompany } = payload;

  return await HospitalModel.create({
    addressId,
    hospitalName,
    hospitalType,
  });
}

export async function returnAllHospital() {
  return await HospitalModel.find({
    isDeleted: false,
  });
}

export async function returnHospitalById(hospitalId) {
  if (isMongooseId(hospitalId)) {
    return await HospitalModel.findOne({
      _id: hospitalId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function returnHospitalByAddressId(addressId) {
  if (isMongooseId(addressId)) {
    return await HospitalModel.findOne({
      addressId: addressId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function updateHospitalById(payload, hospitalId) {
  const { addressId, hospitalName, hospitalType } = payload;
  if (isMongooseId(hospitalId)) {
    return await HospitalModel.findOneAndUpdate(
      {
        _id: hospitalId,
        isDeleted: false,
      },
      {
        addressId,
        hospitalName,
        hospitalType,
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

export async function softDeleteHospitalById(hospitalId) {
  if (isMongooseId(hospitalId)) {
    return await HospitalModel.findOneAndUpdate(
      {
        _id: hospitalId,
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
