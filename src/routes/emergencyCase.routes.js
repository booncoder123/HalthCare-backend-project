import express from "express";

import {
  postEmergencyCase,
  getAllEmergencyCase,
  getEmergencyCaseByUserId,
  getEmergencyCaseById,
  putEmergencyCaseById,
  deleteEmergencyCaseById,
} from "../controllers/emergencyCase.controller.js";

const router = express.Router();

router.post("/emergency/case", postEmergencyCase);

router.get("/emergency/cases", getAllEmergencyCase);
router.get("/emergency/case/user/:userid", getEmergencyCaseByUserId);
router.get("/emergency/case/:id", getEmergencyCaseById);

router.put("/emergency/case/:id", putEmergencyCaseById);

router.delete("/emergency/case/:id", deleteEmergencyCaseById);

export default router;
