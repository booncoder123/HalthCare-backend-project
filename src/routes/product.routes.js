import express from "express";

import {
  postProduct,
  getAllProduct,
  getProductById,
  putProductById,
  deleteProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/product", postProduct);

router.get("/products", getAllProduct);
router.get("/product/:id", getProductById);

router.put("/product/:id", putProductById);

router.delete("/product/:id", deleteProductById);

export default router;
