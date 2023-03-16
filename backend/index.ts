import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";

const app = express();
const port = 3000;
const { SECRET_KEY } = process.env;

app.get("/", (request: Request, response: Response) => {
  response.send(`Hello World! Your secret key ${SECRET_KEY}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
