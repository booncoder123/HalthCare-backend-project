import {
  createOrder,
  returnAllOrder,
  returnOrderById,
  updateOrderById,
  updateStatusById,
  softDeleteOrderById,
} from "../functions/order.js";

export async function postOrder(req, res, next) {
  try {
    const order = await createOrder(req.body);
    res.send({ isOk: true, data: order });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getOrderById(req, res, next) {
  try {
    const order = await returnOrderById(req.params["id"]);
    res.send({ isOk: true, data: order });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllOrder(req, res, next) {
  try {
    const orders = await returnAllOrder();
    res.send({ isOk: true, data: orders });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putOrderById(req, res, next) {
  try {
    const id = req.params["id"];
    const order = await updateOrderById(req.body, id);
    res.send({ isOk: true, data: order });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putStatusById(req, res, next) {
  try {
    const id = req.params["id"];
    const order = await updateStatusById(req.body, id);
    res.send({ isOk: true, data: order });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteOrderById(req, res, next) {
  try {
    const id = req.params["id"];
    const order = await softDeleteOrderById(id);
    res.send({ isOk: true, data: order });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
