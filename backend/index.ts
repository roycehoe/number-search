import express from "express";
import * as PhoneNumberController from "./controllers/PhoneNumberController";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", PhoneNumberController.get);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
