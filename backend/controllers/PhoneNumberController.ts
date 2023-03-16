import axios from "axios";
import dotenv from "dotenv";
import { Request, Response } from "express";
dotenv.config();

const { SECRET_KEY } = process.env;
const PHONE_VALIDATION_BASE_URL = "https://phonevalidation.abstractapi.com/v1";

export async function search(request: Request, response: Response) {
  const queryParams = request.query;
  const phoneNumber = queryParams.q as string;
  try {
    const phoneNumberResponse = await axios.get(
      `${PHONE_VALIDATION_BASE_URL}/?api_key=${SECRET_KEY}&phone=${phoneNumber}`
    );
    response.send(phoneNumberResponse.data);
  } catch (error) {
    console.error(error);
  }
}
