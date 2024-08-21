import express from "express";

import {
  postInsurance,
  getAllInsurance,
  getInsuranceByUserId,
  getInsuranceById,
  putInsuranceById,
  deleteInsuranceById,
} from "../controllers/insurance.controller.js";

const router = express.Router();

router.post("/insurance", postInsurance);

router.get("/insurances", getAllInsurance);
router.get("/insurance/user/:userid", getInsuranceByUserId);
router.get("/insurance/:id", getInsuranceById);

router.put("/insurance/:id", putInsuranceById);

router.delete("/insurance/:id", deleteInsuranceById);

export default router;
