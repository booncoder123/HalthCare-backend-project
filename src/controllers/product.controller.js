import {
    createProduct,
    returnAllProduct,
    returnProductById,
    updateProductById,
    softDeleteProductById,
  } from "../functions/product.js";
  
  export async function postProduct(req, res, next) {
    try {
      const product = await createProduct(req.body);
      res.send({ isOk: true, data: product });
    } catch (error) {
      console.log("error: ", error);
      next({ message: error.message, status: error.status });
    }
  }
  
  export async function getProductById(req, res, next) {
    try {
      const product = await returnProductById(req.params["id"]);
      res.send({ isOk: true, data: product });
    } catch (error) {
      console.log("error: ", error);
      next({ message: error.message, status: error.status });
    }
  }
  
  export async function getAllProduct(req, res, next) {
    try {
      const pharmacies = await returnAllProduct();
      res.send({ isOk: true, data: pharmacies });
    } catch (error) {
      console.log("error: ", error);
      next({ message: error.message, status: error.status });
    }
  }
  
  export async function putProductById(req, res, next) {
    try {
      const id = req.params["id"];
      const product = await updateProductById(req.body, id);
      res.send({ isOk: true, data: product });
    } catch (error) {
      console.log("error: ", error);
      next({ message: error.message, status: error.status });
    }
  }
  
  export async function deleteProductById(req, res, next) {
    try {
      const id = req.params["id"];
      const product = await softDeleteProductById(id);
      res.send({ isOk: true, data: product });
    } catch (error) {
      console.log("error: ", error);
      next({ message: error.message, status: error.status });
    }
  }
  