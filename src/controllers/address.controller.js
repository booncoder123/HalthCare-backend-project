import {
  createAddress,
  returnAllAddress,
  returnAddressById,
  updateAddressById,
  softDeleteAddressById,
} from "../functions/address.js";

export async function postAddress(req, res, next) {
  try {
    const address = await createAddress(req.body);
    res.send({ isOk: true, data: address });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllAddress(req, res, next) {
  try {
    const addresses = await returnAllAddress();
    res.send({ isOk: true, data: addresses });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAddressById(req, res, next) {
  try {
    const id = req.params["id"];
    const address = await returnAddressById(id);
    res.send({ isOk: true, data: address });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putAddressById(req, res, next) {
  try {
    const id = req.params["id"];
    const address = await updateAddressById(req.body, id);
    res.send({ isOk: true, data: address });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteAddressById(req, res, next) {
  try {
    const id = req.params["id"];
    const address = await softDeleteAddressById(id);
    res.send({ isOk: true, data: address });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
