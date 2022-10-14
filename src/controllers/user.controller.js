import { createUser } from "../functions/user.js";

export async function postUser(req, res, next) {
  try {
    const user = await createUser(req.body);
    res.send({ isOk: true, data: user });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
