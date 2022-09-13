import {
  createMedicalStaff,
  returnAllMedicalStaff,
  returnMedicalStaffByHospitalId,
  returnMedicalStaffById,
  softDeleteMedicalStaffById,
  updateMedicalStaffById,
} from "../functions/medicalStaff.js";

export async function postMedicalStaff(req, res) {
  try {
    const medicalStaff = await createMedicalStaff(req.body);
    res.send(medicalStaff);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getMedicalStaffById(req, res) {
  try {
    const medicalStaff = await returnMedicalStaffById(req.params["id"]);
    res.send(medicalStaff);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getMedicalStaffByHospitalId(req, res) {
  try {
    const medicalStaff = await returnMedicalStaffByHospitalId(
      req.params["hospitalid"]
    );
    res.send(medicalStaff);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getAllMedicalStaff(req, res) {
  try {
    const medicalStaff = await returnAllMedicalStaff();
    res.send(medicalStaff);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function putMedicalStaffById(req, res) {
  try {
    const id = req.params["id"];
    const medicalStaff = await updateMedicalStaffById(req.body, id);
    res.send(medicalStaff);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteMedicalStaffById(req, res) {
  try {
    const id = req.params["id"];
    const medicalStaff = await softDeleteMedicalStaffById(id);
    res.send(medicalStaff);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
