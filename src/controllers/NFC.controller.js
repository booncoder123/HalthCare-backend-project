import {
  createNFC,
  returnAllNFC,
  returnNFCById,
  softDeleteNFCById,
  updateNFCById,
} from "../functions/NFC.js";

export async function postNFC(req, res, next) {
  try {
    const NFC = await createNFC(req.body);
    res.send({ isOk: true, data: NFC });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getNFCById(req, res, next) {
  try {
    const NFC = await returnNFCById(req.params["id"]);
    res.send({ isOk: true, data: NFC });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function getAllNFC(req, res, next) {
  try {
    const NFC = await returnAllNFC();
    res.send({ isOk: true, data: NFC });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function putNFCById(req, res, next) {
  try {
    const id = req.params["id"];
    const NFC = await updateNFCById(req.body, id);
    res.send({ isOk: true, data: NFC });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}

export async function deleteNFCById(req, res, next) {
  try {
    const id = req.params["id"];
    const NFC = await softDeleteNFCById(id);
    res.send({ isOk: true, data: NFC });
  } catch (error) {
    console.log("error: ", error);
    next({ message: error.message, status: error.status });
  }
}
