import {
  createMedicalStaff,
  returnAllMedicalStaff,
  returnMedicalStaffByHospitalId,
  returnMedicalStaffById,
  softDeleteMedicalStaffById,
  updateMedicalStaffById,
} from "../functions/medicalStaff.js";

export async function postMedicalStaff(req, res, next) {
  try {
    const medicalStaff = await createMedicalStaff(req.body);
    res.send({ isOk: true, data: medicalStaff });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getMedicalStaffById(req, res, next) {
  try {
    const medicalStaff = await returnMedicalStaffById(req.params["id"]);
    res.send({ isOk: true, data: medicalStaff });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getMedicalStaffByHospitalId(req, res, next) {
  try {
    const medicalStaff = await returnMedicalStaffByHospitalId(
      req.params["hospitalid"]
    );
    res.send({ isOk: true, data: medicalStaff });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllMedicalStaff(req, res, next) {
  try {
    const medicalStaff = await returnAllMedicalStaff();
    res.send({ isOk: true, data: medicalStaff });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putMedicalStaffById(req, res, next) {
  try {
    const id = req.params["id"];
    const medicalStaff = await updateMedicalStaffById(req.body, id);
    res.send({ isOk: true, data: medicalStaff });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteMedicalStaffById(req, res, next) {
  try {
    const id = req.params["id"];
    const medicalStaff = await softDeleteMedicalStaffById(id);
    res.send({ isOk: true, data: medicalStaff });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
