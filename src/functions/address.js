import AddressModel from "../models/address.js";

import mongoose from "mongoose";

async function createAddress(input) {
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
  } = input;

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

export default createAddress;
