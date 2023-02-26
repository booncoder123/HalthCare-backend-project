import {
  createMedicalInformation,
  returnAllMedicalInformation,
  returnMedicalInformationById,
  softDeleteMedicalInformationById,
  updateMedicalInformationById,
} from "../functions/medicalInformation.js";

export async function postMedicalInformation(req, res, next) {
  try {
    const medicalInformation = await createMedicalInformation(req.body);
    res.send({ isOk: true, data: medicalInformation });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getMedicalInformationById(req, res, next) {
  try {
    const medicalInformation = await returnMedicalInformationById(
      req.params["id"]
    );
    res.send({ isOk: true, data: medicalInformation });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllMedicalInformation(req, res, next) {
  try {
    const medicalInformation = await returnAllMedicalInformation();
    res.send({ isOk: true, data: medicalInformation });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putMedicalInformationById(req, res, next) {
  try {
    const id = req.params["id"];
    const medicalInformation = await updateMedicalInformationById(req.body, id);
    res.send({ isOk: true, data: medicalInformation });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteMedicalInformationById(req, res, next) {
  try {
    const id = req.params["id"];
    const medicalInformation = await softDeleteMedicalInformationById(id);
    res.send({ isOk: true, data: medicalInformation });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
