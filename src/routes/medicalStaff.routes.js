import express from "express";

import {
  postMedicalStaff,
  getAllMedicalStaff,
  getMedicalStaffById,
  getMedicalStaffByHospitalId,
  putMedicalStaffById,
  deleteMedicalStaffById,
} from "../controllers/medicalStaff.controller.js";

const router = express.Router();

router.post("/medical/staff", postMedicalStaff);

router.get("/medical/staffs", getAllMedicalStaff);
router.get("/medical/staff/:id", getMedicalStaffById);
router.get("/medical/staff/hospital/:hospitalid", getMedicalStaffByHospitalId);

router.put("/medical/staff/:id", putMedicalStaffById);

router.delete("/medical/staff/:id", deleteMedicalStaffById);

export default router;
