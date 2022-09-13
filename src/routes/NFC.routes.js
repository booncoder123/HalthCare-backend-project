import express from "express";

import {
  postNFC,
  getAllNFC,
  getNFCById,
  putNFCById,
  deleteNFCById,
} from "../controllers/NFC.controller.js";

const router = express.Router();

router.post("/nfc", postNFC);

router.get("/nfcs", getAllNFC);
router.get("/nfc/:id", getNFCById);

router.put("/nfc/:id", putNFCById);

router.delete("/nfc/:id", deleteNFCById);

export default router;
