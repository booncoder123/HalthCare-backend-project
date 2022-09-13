import {
  createAddress,
  returnAllAddress,
  returnAddressByAddressId,
  updateAddressByAddressId,
  softDeleteAddressByAddressId,
} from "../functions/address.js";

import {
  createEmergencyCase,
  returnAllEmergencyCase,
  returnEmergencyCaseById,
  returnEmergencyCaseByUserId,
  softDeleteEmergencyCaseById,
  updateEmergencyCaseById,
} from "../functions/emergencyCase.js";

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

export async function getEmergencyCaseById(req, res) {
  try {
    const emergencyCase = await returnEmergencyCaseById(
      req.body.emergencyCaseId
    );
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getEmergencyCaseByUserId(req, res) {
  try {
    const emergencyCase = await returnEmergencyCaseByUserId(req.body.userId);
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getAllEmergencyCase(req, res) {
  try {
    const emergencyCase = await returnAllEmergencyCase();
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function putEmergencyCaseById(req, res) {
  try {
    const emergencyCaseId = req.body.emergencyCaseId;
    const emergencyCase = await updateEmergencyCaseById(
      req.body,
      emergencyCaseId
    );
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteEmergencyCaseById(req, res) {
  try {
    const emergencyCaseId = req.body.emergencyCaseId;
    const emergencyCase = await softDeleteEmergencyCaseById(emergencyCaseId);
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
