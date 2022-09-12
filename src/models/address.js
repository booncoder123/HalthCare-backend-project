import mongoose from "mongoose";

const Address = new mongoose.Schema({
  houseNumber: {
    type: String,
  },
  street: {
    type: String,
  },
  subDistrict: {
    type: String,
  },

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

export default mongoose.model("AddressModel", Address);
