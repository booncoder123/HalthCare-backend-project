import express from "express";

import {
  postPharmacy,
  getAllPharmacy,
  getPharmacyById,
  putPharmacyById,
  deletePharmacyById,
  getAllProductsById,
} from "../controllers/pharmacy.controller.js";

const router = express.Router();

router.post("/pharmacy", postPharmacy);

router.get("/pharmacies", getAllPharmacy);
router.get("/pharmacy/:id", getPharmacyById);
router.get("/pharmacy/product/:id", getAllProductsById)

router.put("/pharmacy/:id", putPharmacyById);

router.delete("/pharmacy/:id", deletePharmacyById);

export default router;
