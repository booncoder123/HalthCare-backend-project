import express from "express";
import multer from "multer";
import {
  postAddress,
  getAllAddress,
  getAddressByAddressId,
  putAddressByAddressId,
  deleteAddressByAddressId,
  postEmergencyCase,
  getAllEmergencyCase,
  getEmergencyCaseByUserId,
  getEmergencyCaseById,
  putEmergencyCaseById,
  deleteEmergencyCaseById,
} from "../controllers/userController.js";

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

// router.get("/user-detail", authMiddleware, userService.getDetail);

router.post("/address", postAddress);
router.post("/emergencycase", postEmergencyCase);

router.get("/addresses", getAllAddress);
router.get("/address", getAddressByAddressId);
router.get("/emergencycases", getAllEmergencyCase);
router.get("/emergencycase/userid", getEmergencyCaseByUserId);
router.get("/emergencycase/id", getEmergencyCaseById);

router.put("/address", putAddressByAddressId);
router.put("/emergencycase", putEmergencyCaseById);

router.delete("/address", deleteAddressByAddressId);
router.delete("/emergencycase", deleteEmergencyCaseById);

export default router;
