import InsuranceModel from "../models/Insurance.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createInsurance(payload) {
  const { userId, number, type, company } = payload;

  return await InsuranceModel.create({
    userId,
    number,
    type,
    company,
  });
}

export async function returnAllInsurance() {
  return await InsuranceModel.find({
    isDeleted: false,
  });
}

export async function returnInsuranceById(id) {
  if (isMongooseId(id)) {
    return await InsuranceModel.findOne({
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

export async function returnInsuranceByUserId(userId) {
  if (isMongooseId(userId)) {
    return await InsuranceModel.findOne({
      userId: userId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function updateInsuranceById(payload, id) {
  const { userId, number, type, company } = payload;
  if (isMongooseId(id)) {
    return await InsuranceModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        userId,
        number,
        type,
        company,
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

export async function softDeleteInsuranceById(id) {
  if (isMongooseId(id)) {
    return await InsuranceModel.findOneAndUpdate(
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
