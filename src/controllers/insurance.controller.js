import {
  createInsurance,
  returnAllInsurance,
  returnInsuranceByUserId,
  returnInsuranceById,
  softDeleteInsuranceById,
  updateInsuranceById,
} from "../functions/insurance.js";

export async function postInsurance(req, res, next) {
  try {
    const insurance = await createInsurance(req.body);
    res.send({ isOk: true, data: insurance });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getInsuranceById(req, res, next) {
  try {
    const insurance = await returnInsuranceById(req.params["id"]);
    res.send({ isOk: true, data: insurance });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getInsuranceByUserId(req, res, next) {
  try {
    const insurance = await returnInsuranceByUserId(req.params["userid"]);
    res.send({ isOk: true, data: insurance });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllInsurance(req, res, next) {
  try {
    const insurances = await returnAllInsurance();
    res.send({ isOk: true, data: insurances });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putInsuranceById(req, res, next) {
  try {
    const id = req.params["id"];
    const insurance = await updateInsuranceById(req.body, id);
    res.send({ isOk: true, data: insurance });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteInsuranceById(req, res, next) {
  try {
    const id = req.params["id"];
    const insurance = await softDeleteInsuranceById(id);
    res.send({ isOk: true, data: insurance });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
