import cors from "cors";
import express from "express";
import { PORT } from "./config";
import * as PhoneNumberController from "./controllers/PhoneNumberController";

const app = express();

app.use(
  cors({
    origin: ["*"],
  })
);

app.get("/", PhoneNumberController.get);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
