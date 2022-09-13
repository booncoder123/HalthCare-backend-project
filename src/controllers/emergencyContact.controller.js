import {
  createEmergencyContact,
  returnAllEmergencyContact,
  returnEmergencyContactById,
  returnEmergencyContactByUserId,
  softDeleteEmergencyContactById,
  updateEmergencyContactById,
} from "../functions/emergencyContact.js";

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
    const emergencyContact = await returnEmergencyContactById(req.params["id"]);
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getEmergencyContactByUserId(req, res) {
  try {
    const emergencyContact = await returnEmergencyContactByUserId(
      req.params["userid"]
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
    const id = req.params["id"];
    const emergencyContact = await updateEmergencyContactById(req.body, id);
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteEmergencyContactById(req, res) {
  try {
    const id = req.params["id"];
    const emergencyContact = await softDeleteEmergencyContactById(id);
    res.send(emergencyContact);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
