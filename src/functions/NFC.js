import NFCModel from "../models/NFC.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createNFC(payload) {
  const { userId } = payload;

  return await NFCModel.create({ userId });
}

export async function returnAllNFC() {
  return await NFCModel.find({
    isDeleted: false,
  });
}

export async function returnNFCById(id) {
  if (isMongooseId(id)) {
    return await NFCModel.findOne({
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

export async function updateNFCById(payload, id) {
  const { userId } = payload;
  if (isMongooseId(id)) {
    return await NFCModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        userId,
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

export async function softDeleteNFCById(id) {
  if (isMongooseId(id)) {
    return await NFCModel.findOneAndUpdate(
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
