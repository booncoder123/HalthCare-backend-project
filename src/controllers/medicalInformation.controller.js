import {
  createMedicalInformation,
  returnAllMedicalInformation,
  returnMedicalInformationById,
  softDeleteMedicalInformationById,
  updateMedicalInformationById,
} from "../functions/medicalInformation.js";

export async function postMedicalInformation(req, res) {
  try {
    const medicalInformation = await createMedicalInformation(req.body);
    res.send(medicalInformation);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getMedicalInformationById(req, res) {
  try {
    const medicalInformation = await returnMedicalInformationById(
      req.params["id"]
    );
    res.send(medicalInformation);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getAllMedicalInformation(req, res) {
  try {
    const medicalInformation = await returnAllMedicalInformation();
    res.send(medicalInformation);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function putMedicalInformationById(req, res) {
  try {
    const id = req.params["id"];
    const medicalInformation = await updateMedicalInformationById(req.body, id);
    res.send(medicalInformation);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteMedicalInformationById(req, res) {
  try {
    const id = req.params["id"];
    const medicalInformation = await softDeleteMedicalInformationById(id);
    res.send(medicalInformation);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
