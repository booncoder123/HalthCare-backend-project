import express from "express";
import multer from "multer";
import cors from "cors";
import config from "../src/config/index.js";
import connectMongo from "./loaders/mongoDB.js";
import router from "./routes/user.routes.js";

async function startServer() {
  const forms = multer();
  const app = express();

  await connectMongo();
  //   await connectPostgres();

  //   app.use((req, res, next) => {
  //     res.header("Access-Control-Allow-Origin", "*");
  //     res.header(
  //       "Access-Control-Allow-Headers",
  //       "Origin, X-Requested-With, Content-Type, Accept"
  //     );

  //     next();
  //   });

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    next();
  });

  //   app.use("/v1", apiv1Routes);

  app.use(router);

  app.use("/", (req, res, next) => {
    res.status(404).send("Not Found");
  });

  app
    .listen(config.port, () => {
      console.log(`🛡️  Server listening on port: ${config.port} 🛡️`);
    })
    .on("error", (err) => {
      process.exit(1);
    });
}
startServer();
