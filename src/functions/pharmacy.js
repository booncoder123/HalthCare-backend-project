import PharmacyModel from "../models/pharmacy.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createPharmacy(payload) {
  const { name, description } = payload;

  return await PharmacyModel.create({
    name,
    description,
  });
}

export async function returnAllPharmacy() {
  return await PharmacyModel.find({
    isDeleted: false,
  });
}

export async function returnPharmacyById(id) {
  if (isMongooseId(id)) {
    return await PharmacyModel.findOne({
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

export async function updatePharmacyById(payload, id) {
  const { name, description } = payload;
  if (isMongooseId(id)) {
    return await PharmacyModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        name,
        description,
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

export async function softDeletePharmacyById(id) {
  if (isMongooseId(id)) {
    return await PharmacyModel.findOneAndUpdate(
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
