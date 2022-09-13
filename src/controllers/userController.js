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
import {
  createEmergencyContact,
  returnAllEmergencyContact,
  returnEmergencyContactById,
  returnEmergencyContactByUserId,
  softDeleteEmergencyContactById,
  updateEmergencyContactById,
} from "../functions/emergencyContact.js";
import {
  createHospital,
  returnAllHospital,
  returnHospitalByAddressId,
  returnHospitalById,
  softDeleteHospitalById,
  updateHospitalById,
} from "../functions/hospital.js";

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
    const emergencyCases = await returnAllEmergencyCase();
    res.send(emergencyCases);
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

export async function postEmergencyContact(req, res) {
  try {
    const emergencyContact = await createEmergencyContact(req.body);
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getEmergencyContactById(req, res) {
  try {
    const emergencyContact = await returnEmergencyContactById(
      req.body.emergencyContactId
    );
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getEmergencyContactByUserId(req, res) {
  try {
    const emergencyContact = await returnEmergencyContactByUserId(
      req.body.userId
    );
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getAllEmergencyContact(req, res) {
  try {
    const emergencyContacts = await returnAllEmergencyContact();
    res.send(emergencyContacts);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function putEmergencyContactById(req, res) {
  try {
    const emergencyContactId = req.body.emergencyContactId;
    const emergencyContact = await updateEmergencyContactById(
      req.body,
      emergencyContactId
    );
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteEmergencyContactById(req, res) {
  try {
    const emergencyContactId = req.body.emergencyContactId;
    const emergencyContact = await softDeleteEmergencyContactById(
      emergencyContactId
    );
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function postHospital(req, res) {
  try {
    const hospital = await createHospital(req.body);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getHospitalById(req, res) {
  try {
    const hospital = await returnHospitalById(req.body.hospitalId);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getHospitalByAddressId(req, res) {
  try {
    const hospital = await returnHospitalByAddressId(req.body.addressId);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getAllHospital(req, res) {
  try {
    const hospitals = await returnAllHospital();
    res.send(hospitals);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function putHospitaltById(req, res) {
  try {
    const hospitalId = req.body.hospitalId;
    const hospital = await updateHospitalById(req.body, hospitalId);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteHospitalById(req, res) {
  try {
    const hospitalId = req.body.hospitalId;
    const hospital = await softDeleteHospitalById(hospitalId);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
