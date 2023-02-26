import mongoose from "mongoose";
import config from "../config/index.js";

async function connectMongo() {
  await mongoose
    .connect(config.databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("🎈 Server connecting to mongodb database 🎈");
    })
    .catch((error) => {
      process.exit(1);
    });
}
export default connectMongo;
