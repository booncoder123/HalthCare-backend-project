import createAddress from "../functions/address.js";

async function postAddress(req, res) {
  try {
    const address = await createAddress(req.body);
    res.send(address);
  } catch (error) {
    console.log("error: ", error);
    res
      .status(error.status || 500)
      .send(error.message || "Internal Server Error");
  }
}

export default postAddress;
