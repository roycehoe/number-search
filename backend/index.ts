import express, { Request, Response } from "express";
import { getPhoneDetails } from "./controllers/PhoneNumberController";

const app = express();
const port = 3000;

app.get("/", async (request: Request, response: Response) => {
  const phoneNumber = await getPhoneDetails(6591348131);
  console.log(phoneNumber);
  response.send(`Hello World!`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
