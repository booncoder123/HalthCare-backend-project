import {
  createHospital,
  returnAllHospital,
  returnHospitalByAddressId,
  returnHospitalById,
  softDeleteHospitalById,
  updateHospitalById,
} from "../functions/hospital.js";

export async function postHospital(req, res, next) {
  try {
    const hospital = await createHospital(req.body);
    res.send({ isOk: true, data: hospital });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getHospitalById(req, res, next) {
  try {
    const hospital = await returnHospitalById(req.params["id"]);
    res.send({ isOk: true, data: hospital });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getHospitalByAddressId(req, res, next) {
  try {
    const hospital = await returnHospitalByAddressId(req.params["addressid"]);
    res.send({ isOk: true, data: hospital });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllHospital(req, res, next) {
  try {
    const hospitals = await returnAllHospital();
    res.send({ isOk: true, data: hospitals });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putHospitaltById(req, res, next) {
  try {
    const id = req.params["id"];
    const hospital = await updateHospitalById(req.body, id);
    res.send({ isOk: true, data: hospital });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteHospitalById(req, res, next) {
  try {
    const id = req.params["id"];
    const hospital = await softDeleteHospitalById(id);
    res.send({ isOk: true, data: hospital });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
