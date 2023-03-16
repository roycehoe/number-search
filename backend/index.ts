import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/", (request: Request, response: Response) => {
  response.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
