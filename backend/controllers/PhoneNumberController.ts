import axios from "axios";
import dotenv from "dotenv";
import { Request, Response } from "express";
import * as Database from "../database";
dotenv.config();

const { SECRET_KEY } = process.env;
const PHONE_VALIDATION_BASE_URL = "https://phonevalidation.abstractapi.com/v1";

export interface Format {
  international: string;
  local: string;
}

export interface Country {
  code: string;
  name: string;
  prefix: string;
}

export interface PhoneValidationResponse {
  phone: string;
  valid: boolean;
  format: Format;
  country: Country;
  location: string;
  type: string;
  carrier: string;
}

export async function save(request: Request, response: Response) {
  // Saves phone data to phone database
  const queryParams = request.query;
  const phoneNumber = queryParams.q as string;
  try {
    const phoneNumberResponse = await axios.get(
      `${PHONE_VALIDATION_BASE_URL}/?api_key=${SECRET_KEY}&phone=${phoneNumber}`
    );
    Database.write(phoneNumberResponse.data);
  } catch (error) {
    console.error(error);
  }
}

export async function get(request: Request, response: Response) {
  // Retrieves phone data from phone database
  const queryParams = request.query;
  const phoneNumber = queryParams.q as string;
  try {
    const databaseData = await Database.read(phoneNumber);
    console.log(databaseData);
    response.send(databaseData);
  } catch (error) {
    console.error(error);
  }
}
