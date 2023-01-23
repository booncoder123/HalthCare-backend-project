import OrderModel from "../models/order.js";
import ProductModel from "../models/product.js";

import mongoose from "mongoose";

const isMongooseId = mongoose.Types.ObjectId.isValid;

export async function createOrder(payload) {
  const { userId, products, status } = payload;

  return await OrderModel.create({
    userId,
    products,
    status,
  });
}

export async function returnAllOrder() {
  return await OrderModel.find({
    isDeleted: false,
  });
}

export async function returnOrderById(id) {
  if (isMongooseId(id)) {
    return await OrderModel.findOne({
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

export async function updateOrderById(payload, id) {
  const { userId, products, status } = payload;
  if (isMongooseId(id)) {
    return await OrderModel.findOneAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        userId,
        products,
        status,
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

export async function updateStatusById(payload, id) {
  const { products } = payload;
  if (isMongooseId(id)) {
    const order = await OrderModel.findByIdAndUpdate(
      {
        _id: id,
        isDeleted: false,
      },
      {
        status: true,
      },
      {
        new: true,
        omitUndefined: true,
      }
    );

    //remove the amount of products from pharmacy
      products.forEach(async function (productOrder) {
        //product in storage
        const product = await ProductModel.findOne({
          _id: productOrder.id,
          isDeleted: false,
        });

        const newAmount =
          parseInt(product.amount) - parseInt(productOrder.amount);

        //update new number of product in storage
        await ProductModel.findOneAndUpdate(
          {
            _id: product.id,
            isDeleted: false,
          },
          {
            amount: newAmount,
          },
          {
            new: true,
            omitUndefined: true,
          }
        );
      });
      
      return order;
      
  } else {
    throw {
      message: "invalid id",
      status: 404,
    };
  }
}

export async function softDeleteOrderById(id) {
  if (isMongooseId(id)) {
    return await OrderModel.findOneAndUpdate(
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
