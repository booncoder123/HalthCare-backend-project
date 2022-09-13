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

export async function returnAddressByAddressId(addressId) {
  if (isMongooseId(addressId)) {
    return await AddressModel.findOne({
      _id: addressId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "id is not valid",
      status: 404,
    };
  }
}

export async function updateAddressByAddressId(payload, addressId) {
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
  if (isMongooseId(addressId)) {
    return await AddressModel.findOneAndUpdate(
      {
        _id: addressId,
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

export async function softDeleteAddressByAddressId(addressId) {
  if (isMongooseId(addressId)) {
    return await AddressModel.findOneAndUpdate(
      {
        _id: addressId,
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
