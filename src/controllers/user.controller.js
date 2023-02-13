import {
  createUser,
  returnAllUser,
  returnUserById,
  softDeleteUserById,
  updateUserById,
} from "../functions/user.js";

export async function postUser(req, res, next) {
  try {
    const user = await createUser(req.body);
    res.send({ isOk: true, data: user });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllUser(req, res, next) {
  try {
    const users = await returnAllUser();
    res.send({ isOk: true, data: users });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getUserById(req, res, next) {
  try {
    const user = await returnUserById(req.params["id"]);
    res.send({ isOk: true, data: user });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putUserById(req, res, next) {
  try {
    const id = req.params["id"];
    const user = await updateUserById(req.body, id);
    res.send({ isOk: true, data: user });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteUserById(req, res, next) {
  try {
    const id = req.params["id"];
    const user = await softDeleteUserById(id);
    res.send({ isOk: true, data: user });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
