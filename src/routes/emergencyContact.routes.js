import express from "express";

import {
  postEmergencyContact,
  getAllEmergencyContact,
  getEmergencyContactByUserId,
  getEmergencyContactById,
  putEmergencyContactById,
  deleteEmergencyContactById,
} from "../controllers/emergencyContact.controller.js";

const router = express.Router();

router.post("/emergency/contact", postEmergencyContact);

router.get("/emergency/contacts", getAllEmergencyContact);
router.get("/emergency/contact/user/:userid", getEmergencyContactByUserId);
router.get("/emergency/contact/:id", getEmergencyContactById);

router.put("/emergency/contact/:id", putEmergencyContactById);

router.delete("/emergency/contact/:id", deleteEmergencyContactById);

export default router;
