import {
  createPharmacist,
  returnAllPharmacist,
  returnPharmacistById,
  updatePharmacistById,
  softDeletePharmacistById,
} from "../functions/pharmacist.js";

export async function postPharmacist(req, res, next) {
  try {
    const pharmacist = await createPharmacist(req.body);
    res.send({ isOk: true, data: pharmacist });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getPharmacistById(req, res, next) {
  try {
    const pharmacist = await returnPharmacistById(req.params["id"]);
    res.send({ isOk: true, data: pharmacist });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllPharmacist(req, res, next) {
  try {
    const pharmacists = await returnAllPharmacist();
    res.send({ isOk: true, data: pharmacists });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putPharmacistById(req, res, next) {
  try {
    const id = req.params["id"];
    const pharmacist = await updatePharmacistById(req.body, id);
    res.send({ isOk: true, data: pharmacist });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deletePharmacistById(req, res, next) {
  try {
    const id = req.params["id"];
    const pharmacist = await softDeletePharmacistById(id);
    res.send({ isOk: true, data: pharmacist });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
