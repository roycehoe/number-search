import express from "express";
// import { get } from "./controllers/PhoneNumberController";
import * as PhoneNumberController from "./controllers/PhoneNumberController";

const app = express();
const port = 3000;

app.get("/", PhoneNumberController.save);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
