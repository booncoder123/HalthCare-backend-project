import express from "express";

import {
  postMedicalInformation,
  getAllMedicalInformation,
  getMedicalInformationById,
  putMedicalInformationById,
  deleteMedicalInformationById,
} from "../controllers/medicalInformation.controller.js";

const router = express.Router();

router.post("/medical/information", postMedicalInformation);

router.get("/medical/informations", getAllMedicalInformation);
router.get("/medical/information/:id", getMedicalInformationById);

router.put("/medical/information/:id", putMedicalInformationById);

router.delete("/medical/information/:id", deleteMedicalInformationById);

export default router;
