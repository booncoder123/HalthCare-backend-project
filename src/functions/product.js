import ProductModel from "../models/product.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createProduct(payload) {
  const { pharmacyId, name, amount, price } = payload;

  return await ProductModel.create({
    pharmacyId,
    name,
    amount,
    price,
  });
}

export async function returnAllProduct() {
  return await ProductModel.find({
    isDeleted: false,
  });
}

export async function returnProductById(id) {
  if (isMongooseId(id)) {
    return await ProductModel.findOne({
      _id: id,
      isDeleted: false,
    });
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function updateProductById(payload, id) {
  const { name, amount, price } = payload;
  if (isMongooseId(id)) {
    return await ProductModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        name,
        amount,
        price,
      },
      {
        new: true,
        omitUndefined: true,
      }
    );
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function softDeleteProductById(id) {
  if (isMongooseId(id)) {
    return await ProductModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        isDeleted: true,
      },
      { new: true, omitUndefined: true }
    );
  } else {
    throw {
      message: "id is not valid",
      status: 404,
    };
  }
}
