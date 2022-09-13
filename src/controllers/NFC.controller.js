import {
  createNFC,
  returnAllNFC,
  returnNFCById,
  softDeleteNFCById,
  updateNFCById,
} from "../functions/NFC.js";

export async function postNFC(req, res) {
  try {
    const NFC = await createNFC(req.body);
    res.send(NFC);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getNFCById(req, res) {
  try {
    const NFC = await returnNFCById(req.params["id"]);
    res.send(NFC);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function getAllNFC(req, res) {
  try {
    const NFC = await returnAllNFC();
    res.send(NFC);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function putNFCById(req, res) {
  try {
    const id = req.params["id"];
    const NFC = await updateNFCById(req.body, id);
    res.send(NFC);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}

export async function deleteNFCById(req, res) {
  try {
    const id = req.params["id"];
    const NFC = await softDeleteNFCById(id);
    res.send(NFC);
  } catch (error) {
    console.log("error: ", error);
    res.status(error.status || 500);
  }
}
