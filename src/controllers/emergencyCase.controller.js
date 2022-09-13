import {
  createEmergencyCase,
  returnAllEmergencyCase,
  returnEmergencyCaseById,
  returnEmergencyCaseByUserId,
  softDeleteEmergencyCaseById,
  updateEmergencyCaseById,
} from "../functions/emergencyCase.js";

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
    const emergencyCase = await returnEmergencyCaseById(req.params["id"]);
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getEmergencyCaseByUserId(req, res) {
  try {
    const emergencyCase = await returnEmergencyCaseByUserId(
      req.params["userid"]
    );
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
    const id = req.params["id"];
    const emergencyCase = await updateEmergencyCaseById(req.body, id);
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteEmergencyCaseById(req, res) {
  try {
    const id = req.params["id"];
    const emergencyCase = await softDeleteEmergencyCaseById(id);
    res.send(emergencyCase);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
