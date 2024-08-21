import express from "express";

import {
  postPharmacist,
  getAllPharmacist,
  getPharmacistById,
  putPharmacistById,
  deletePharmacistById,
} from "../controllers/pharmacist.controller.js";

const router = express.Router();

router.post("/pharmacist", postPharmacist);

router.get("/pharmacists", getAllPharmacist);
router.get("/pharmacist/:id", getPharmacistById);

router.put("/pharmacist/:id", putPharmacistById);

router.delete("/pharmacist/:id", deletePharmacistById);

export default router;
