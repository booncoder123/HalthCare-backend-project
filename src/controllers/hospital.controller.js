import {
  createHospital,
  returnAllHospital,
  returnHospitalByAddressId,
  returnHospitalById,
  softDeleteHospitalById,
  updateHospitalById,
} from "../functions/hospital.js";

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
    const hospital = await returnHospitalById(req.params["id"]);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getHospitalByAddressId(req, res) {
  try {
    const hospital = await returnHospitalByAddressId(req.params["addressid"]);
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
    const id = req.params["id"];
    const hospital = await updateHospitalById(req.body, id);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteHospitalById(req, res) {
  try {
    const id = req.params["id"];
    const hospital = await softDeleteHospitalById(id);
    res.send(hospital);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
