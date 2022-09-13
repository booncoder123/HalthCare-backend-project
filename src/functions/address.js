import AddressModel from "../models/address.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createAddress(payload) {
  const {
    houseNumber,
    street,
    subDistrict,
    district,
    province,
    country,
    postalCode,
    latitude,
    longitude,
    type,
  } = payload;

  return await AddressModel.create({
    houseNumber,
    street,
    subDistrict,
    district,
    province,
    country,
    postalCode,
    latitude,
    longitude,
    type,
  });
}

export async function returnAllAddress() {
  return await AddressModel.find({
    isDeleted: false,
  });
}

export async function returnAddressById(id) {
  if (isMongooseId(id)) {
    return await AddressModel.findOne({
      _id: id,
      isDeleted: false,
    });
  } else {
    throw {
      message: "id is not valid",
      status: 404,
    };
  }
}

export async function updateAddressById(payload, id) {
  const {
    houseNumber,
    street,
    subDistrict,
    district,
    province,
    country,
    postalCode,
    latitude,
    longitude,
    type,
  } = payload;
  if (isMongooseId(id)) {
    return await AddressModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        houseNumber,
        street,
        subDistrict,
        district,
        province,
        country,
        postalCode,
        latitude,
        longitude,
        type,
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

export async function softDeleteAddressById(id) {
  if (isMongooseId(id)) {
    return await AddressModel.findOneAndUpdate(
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
