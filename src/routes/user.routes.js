import express from "express";
import multer from "multer";

import { postUser } from "../controllers/user.controller.js";

// import authMiddleware from "../../middlewares/Auth.middleware";
// import userService from "../../services/user.service";

// const fileFilter = (req, file, cb) => {
//   console.log("image", file);
//   if (
//     file.mimetype === "image/png" ||
//     file.mimetype === "image/jpg" ||
//     file.mimetype === "image/jpeg"
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const router = express.Router();

router.post("/user", postUser);

// router.get("/user-detail", authMiddleware, userService.getDetail);

export default router;
