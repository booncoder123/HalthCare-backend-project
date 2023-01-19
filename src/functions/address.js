import AddressModel from "../models/address.js";
import UserModel from "../models/user.js";
import HospitalModel from "../models/hospital.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createAddress(payload) {
  const {
    userId,
    hospitalId,
    pharmacyId,
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

  const address = await AddressModel.create({
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

  if (isMongooseId(userId)) {
    await UserModel.findOneAndUpdate(
      {
        _id: userId,
      },
      {
        addressId: address._id,
      },
      { new: true, omitUndefined: true }
    );
  } else if (isMongooseId(hospitalId)) {
    await HospitalModel.findOneAndUpdate(
      {
        _id: hospitalId,
        isDeleted: false,
      },
      {
        addressId: address._id,
      },
      { new: true, omitUndefined: true }
    );
  }

  return address;
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

export async function returnAddressByUserId(userId) {
  let user;
  if (isMongooseId(userId)) {
    user = await UserModel.findOne({
      _id: userId,
      isDeleted: false,
    });
  } else {
    throw {
      message: "user id not found",
      status: 404,
    };
  }
  const addressId = user.addressId;
  return await AddressModel.findOne({
    _id: addressId,
    isDeleted: false,
  });
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
