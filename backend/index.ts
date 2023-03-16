import express, { Request, Response } from "express";
import { getPhoneDetails } from "./controllers/PhoneNumberController";

const app = express();
const port = 3000;

app.get("/", async (request: Request, response: Response) => {
  const queryParams = request.query;
  const phoneNumber = await getPhoneDetails(queryParams.q as string);
  response.send(phoneNumber);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
