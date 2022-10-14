import {
  createEmergencyCase,
  returnAllEmergencyCase,
  returnEmergencyCaseById,
  returnEmergencyCaseByUserId,
  softDeleteEmergencyCaseById,
  updateEmergencyCaseById,
} from "../functions/emergencyCase.js";

export async function postEmergencyCase(req, res, next) {
  try {
    const emergencyCase = await createEmergencyCase(req.body);
    res.send({ isOk: true, data: emergencyCase });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getEmergencyCaseById(req, res, next) {
  try {
    const emergencyCase = await returnEmergencyCaseById(req.params["id"]);
    res.send({ isOk: true, data: emergencyCase });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getEmergencyCaseByUserId(req, res, next) {
  try {
    const emergencyCase = await returnEmergencyCaseByUserId(
      req.params["userid"]
    );
    res.send({ isOk: true, data: emergencyCase });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllEmergencyCase(req, res, next) {
  try {
    const emergencyCases = await returnAllEmergencyCase();
    res.send({ isOk: true, data: emergencyCases });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putEmergencyCaseById(req, res, next) {
  try {
    const id = req.params["id"];
    const emergencyCase = await updateEmergencyCaseById(req.body, id);
    res.send({ isOk: true, data: emergencyCase });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteEmergencyCaseById(req, res, next) {
  try {
    const id = req.params["id"];
    const emergencyCase = await softDeleteEmergencyCaseById(id);
    res.send({ isOk: true, data: emergencyCase });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
