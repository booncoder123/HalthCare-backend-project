import mongoose from "mongoose";
import { required } from "nodemon/lib/config";

const Address = new mongoose.Schema({
  houseNumber: {
    type: String,
  },
  street: {
    type: String,
  },
  sunDistrict: [
    {
      type: String,
    },
  ],
  district: {
    type: String,
  },
  province: {
    type: String,
  },
  country: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  type: {
    type: String,
  },
});
