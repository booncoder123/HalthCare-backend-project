import { auth } from "../loaders/firebase.js";

async function authMiddleware(req, res, next) {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = await auth.verifyIdToken(token);
    if (decodedToken) {
      const { uid } = decodedToken;
      req.uid = uid;
      next();
    }
  } catch (err) {
    const error = new Error(err.message);
    error.statusCode = 401;
    next(error);
  }
}

export default authMiddleware;
