import {
  createAddress,
  returnAllAddress,
  returnAddressById,
  updateAddressById,
  softDeleteAddressById,
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

export async function getAddressById(req, res) {
  try {
    const id = req.params["id"];
    const address = await returnAddressById(id);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export async function putAddressById(req, res) {
  try {
    const id = req.params["id"];
    const address = await updateAddressById(req.body, id);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export async function deleteAddressById(req, res) {
  try {
    const id = req.params["id"];
    const address = await softDeleteAddressById(id);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}
