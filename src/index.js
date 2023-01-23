import express from "express";
import multer from "multer";
import cors from "cors";
import config from "../src/config/index.js";
import connectMongo from "./loaders/mongoDB.js";
import addressRouter from "./routes/address.routes.js";
import emergencyCaseRouter from "./routes/emergencyCase.routes.js";
import emergencyContactRouter from "./routes/emergencyContact.routes.js";
import hospitalRouter from "./routes/hospital.routes.js";
import insuranceRouter from "./routes/insurance.routes.js";
import medicalInformationRouter from "./routes/medicalInformation.routes.js";
import medicalStaffRouter from "./routes/medicalStaff.routes.js";
import pharmacistRouter from "./routes/pharmacist.routes.js";
import pharmacyRouter from "./routes/pharmacy.routes.js";
import productRouter from "./routes/product.routes.js";
import orderRouter from "./routes/order.routes.js";
import userRouter from "./routes/user.routes.js";
import ErrorHandler from "./middlewares/ErrorHandler.js";

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

  app.use(addressRouter);
  app.use(emergencyCaseRouter);
  app.use(emergencyContactRouter);
  app.use(hospitalRouter);
  app.use(insuranceRouter);
  app.use(medicalInformationRouter);
  app.use(medicalStaffRouter);
  app.use(pharmacistRouter);
  app.use(pharmacyRouter);
  app.use(productRouter);
  app.use(orderRouter);
  app.use(userRouter);
  app.use(ErrorHandler);
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
