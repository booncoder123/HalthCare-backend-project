import express from "express";

import {
  postOrder,
  getAllOrder,
  getOrderById,
  putOrderById,
  putStatusById,
  deleteOrderById,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/order", postOrder);

router.get("/orders", getAllOrder);
router.get("/order/:id", getOrderById);

router.put("/order/:id", putOrderById);
router.put("/order/status/:id", putStatusById);

router.delete("/order/:id", deleteOrderById);

export default router;
