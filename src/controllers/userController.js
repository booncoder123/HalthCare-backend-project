import {
  createAddress,
  returnAllAddress,
  returnAddressByAddressId,
  updateAddressByAddressId,
  softDeleteAddressByAddressId,
} from "../functions/address.js";

import { createEmergencyCase } from "../functions/emergencyCase.js";

export async function postAddress(req, res) {
  try {
    const address = await createAddress(req.body);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export async function getAllAddress(req, res) {
  try {
    const addresses = await returnAllAddress();
    res.send(addresses);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export async function getAddressByAddressId(req, res) {
  try {
    const addressId = req.body.addressId;
    const address = await returnAddressByAddressId(addressId);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export async function putAddressByAddressId(req, res) {
  try {
    const addressId = req.body.addressId;
    const address = await updateAddressByAddressId(req.body, addressId);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export async function deleteAddressByAddressId(req, res) {
  try {
    const addressId = req.body.addressId;
    const address = await softDeleteAddressByAddressId(addressId);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export async function postEmergencyCase(req, res) {
  try {
    const emergencyCase = await createEmergencyCase(req.body);
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
