import {
  createEmergencyContact,
  returnAllEmergencyContact,
  returnEmergencyContactById,
  returnEmergencyContactByUserId,
  softDeleteEmergencyContactById,
  updateEmergencyContactById,
} from "../functions/emergencyContact.js";

export async function postEmergencyContact(req, res, next) {
  try {
    const emergencyContact = await createEmergencyContact(req.body);
    res.send({ isOk: true, data: emergencyContact });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getEmergencyContactById(req, res, next) {
  try {
    const emergencyContact = await returnEmergencyContactById(req.params["id"]);
    res.send({ isOk: true, data: emergencyContact });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getEmergencyContactByUserId(req, res, next) {
  try {
    const emergencyContact = await returnEmergencyContactByUserId(
      req.params["userid"]
    );
    res.send({ isOk: true, data: emergencyContact });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllEmergencyContact(req, res, next) {
  try {
    const emergencyContacts = await returnAllEmergencyContact();
    res.send({ isOk: true, data: emergencyContacts });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putEmergencyContactById(req, res, next) {
  try {
    const id = req.params["id"];
    const emergencyContact = await updateEmergencyContactById(req.body, id);
    res.send({ isOk: true, data: emergencyContact });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteEmergencyContactById(req, res, next) {
  try {
    const id = req.params["id"];
    const emergencyContact = await softDeleteEmergencyContactById(id);
    res.send({ isOk: true, data: emergencyContact });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
