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
  postEmergencyContact,
  getAllEmergencyContact,
  getEmergencyContactByUserId,
  getEmergencyContactById,
  putEmergencyContactById,
  deleteEmergencyContactById,
  postHospital,
  getAllHospital,
  getHospitalByAddressId,
  getHospitalById,
  putHospitaltById,
  deleteHospitalById,
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
router.post("/emergencycontact", postEmergencyContact);
router.post("/hospital", postHospital);

router.get("/addresses", getAllAddress);
router.get("/address", getAddressByAddressId);
router.get("/emergencycases", getAllEmergencyCase);
router.get("/emergencycase/userid", getEmergencyCaseByUserId);
router.get("/emergencycase/id", getEmergencyCaseById);
router.get("/emergencycontacts", getAllEmergencyContact);
router.get("/emergencycontact/userid", getEmergencyContactByUserId);
router.get("/emergencycontact/id", getEmergencyContactById);
router.get("/hospitals", getAllHospital);
router.get("/hospital/addressid", getHospitalByAddressId);
router.get("/hospital/id", getHospitalById);

router.put("/address", putAddressByAddressId);
router.put("/emergencycase", putEmergencyCaseById);
router.put("/emergencycontact", putEmergencyContactById);
router.put("/hospital", putHospitaltById);

router.delete("/address", deleteAddressByAddressId);
router.delete("/emergencycase", deleteEmergencyCaseById);
router.delete("/emergencycontact", deleteEmergencyContactById);
router.delete("/hospital", deleteHospitalById);

export default router;
