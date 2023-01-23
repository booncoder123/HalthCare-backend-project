import express from "express";

import {
  postPharmacy,
  getAllPharmacy,
  getPharmacyById,
  putPharmacyById,
  deletePharmacyById,
} from "../controllers/pharmacy.controller.js";

const router = express.Router();

router.post("/pharmacy", postPharmacy);

router.get("/pharmacies", getAllPharmacy);
router.get("/pharmacy/:id", getPharmacyById);

router.put("/pharmacy/:id", putPharmacyById);

router.delete("/pharmacy/:id", deletePharmacyById);

export default router;
