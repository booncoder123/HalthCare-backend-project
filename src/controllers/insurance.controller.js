import {
  createInsurance,
  returnAllInsurance,
  returnInsuranceByUserId,
  returnInsuranceById,
  softDeleteInsuranceById,
  updateInsuranceById,
} from "../functions/insurance.js";

export async function postInsurance(req, res) {
  try {
    const insurance = await createInsurance(req.body);
    res.send(insurance);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getInsuranceById(req, res) {
  try {
    const insurance = await returnInsuranceById(req.params["id"]);
    res.send(insurance);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getInsuranceByUserId(req, res) {
  try {
    const insurance = await returnInsuranceByUserId(req.params["userid"]);
    res.send(insurance);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getAllInsurance(req, res) {
  try {
    const insurances = await returnAllInsurance();
    res.send(insurances);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function putInsuranceById(req, res) {
  try {
    const id = req.params["id"];
    const insurance = await updateInsuranceById(req.body, id);
    res.send(insurance);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteInsuranceById(req, res) {
  try {
    const id = req.params["id"];
    const insurance = await softDeleteInsuranceById(id);
    res.send(insurance);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
