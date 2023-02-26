import express from "express";

import {
  postHospital,
  getAllHospital,
  getHospitalByAddressId,
  getHospitalById,
  putHospitaltById,
  deleteHospitalById,
} from "../controllers/hospital.controller.js";

const router = express.Router();

router.post("/hospital", postHospital);

router.get("/hospitals", getAllHospital);
router.get("/hospital/address/:addressid", getHospitalByAddressId);
router.get("/hospital/:id", getHospitalById);

router.put("/hospital/:id", putHospitaltById);

router.delete("/hospital/:id", deleteHospitalById);

export default router;
