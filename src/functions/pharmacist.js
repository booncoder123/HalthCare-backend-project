import PharmacistModel from "../models/pharmacist.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createPharmacist(payload) {
  const { userId, imgId, verificationStatus } = payload;

  return await PharmacistModel.create({
    userId,
    imgId,
    verificationStatus,
  });
}

export async function returnAllPharmacist() {
  return await PharmacistModel.find({
    isDeleted: false,
  });
}

export async function returnPharmacistById(id) {
  if (isMongooseId(id)) {
    return await PharmacistModel.findOne({
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

export async function updatePharmacistById(payload, id) {
  const { userId, imgId, verificationStatus } = payload;
  if (isMongooseId(id)) {
    return await PharmacistModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        userId,
        imgId,
        verificationStatus,
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

export async function softDeletePharmacistById(id) {
  if (isMongooseId(id)) {
    return await PharmacistModel.findOneAndUpdate(
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
