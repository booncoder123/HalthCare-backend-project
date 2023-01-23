import {
  createPharmacy,
  returnAllPharmacy,
  returnPharmacyById,
  updatePharmacyById,
  softDeletePharmacyById,
  returnAllProductsById,
} from "../functions/pharmacy.js";

export async function postPharmacy(req, res, next) {
  try {
    const pharmacy = await createPharmacy(req.body);
    res.send({ isOk: true, data: pharmacy });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getPharmacyById(req, res, next) {
  try {
    const pharmacy = await returnPharmacyById(req.params["id"]);
    res.send({ isOk: true, data: pharmacy });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllPharmacy(req, res, next) {
  try {
    const pharmacies = await returnAllPharmacy();
    res.send({ isOk: true, data: pharmacies });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllProductsById(req, res, next) {
  try {
    const products = await returnAllProductsById(req.params["id"]);
    res.send({ isOk: true, data: products });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putPharmacyById(req, res, next) {
  try {
    const id = req.params["id"];
    const pharmacy = await updatePharmacyById(req.body, id);
    res.send({ isOk: true, data: pharmacy });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deletePharmacyById(req, res, next) {
  try {
    const id = req.params["id"];
    const pharmacy = await softDeletePharmacyById(id);
    res.send({ isOk: true, data: pharmacy });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
