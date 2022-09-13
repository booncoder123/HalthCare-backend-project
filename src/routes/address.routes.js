import express from "express";
import {
  postAddress,
  getAllAddress,
  getAddressById,
  putAddressById,
  deleteAddressById,
} from "../controllers/address.controller.js";

const router = express.Router();

router.post("/address", postAddress);

router.get("/addresses", getAllAddress);
router.get("/address/:id", getAddressById);

router.put("/address/:id", putAddressById);

router.delete("/address/:id", deleteAddressById);

export default router;
