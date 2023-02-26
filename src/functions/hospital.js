import HospitalModel from "../models/hospital.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createHospital(payload) {
  const { name, type } = payload;

  return await HospitalModel.create({
    name,
    type,
  });
}

export async function returnAllHospital() {
  return await HospitalModel.find({
    isDeleted: false,
  });
}

export async function returnHospitalById(id) {
  if (isMongooseId(id)) {
    return await HospitalModel.findOne({
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

export async function updateHospitalById(payload, id) {
  const { addressId, name, type } = payload;
  if (isMongooseId(id)) {
    return await HospitalModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        addressId,
        name,
        type,
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

export async function softDeleteHospitalById(id) {
  if (isMongooseId(id)) {
    return await HospitalModel.findOneAndUpdate(
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
