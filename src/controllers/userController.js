import {
  createAddress,
  returnAllAddress,
  returnAddressByAddressId,
  updateAddressByAddressId,
} from "../functions/address.js";

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
