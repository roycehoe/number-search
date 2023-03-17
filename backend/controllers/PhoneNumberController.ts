import axios from "axios";
import { Request, Response } from "express";
import { SECRET_KEY } from "../config";
import * as Database from "../database";
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

async function getDatabaseData(phoneNumber: string) {
  const databaseData = await Database.read(phoneNumber);
  if (databaseData) {
    return databaseData;
  }
  try {
    const phoneNumberResponse = await axios.get(
      `${PHONE_VALIDATION_BASE_URL}/?api_key=${SECRET_KEY}&phone=${phoneNumber}`
    );
    await Database.write(phoneNumberResponse.data);
    const newDatabaseData = await Database.read(phoneNumber);
    return newDatabaseData;
  } catch (error) {
    console.error(error);
  }
}

export async function save(request: Request, response: Response) {
  // Obtains phone data from phone database
  const queryParams = request.query;
  const phoneNumber = queryParams.q as string;
  const databaseData = await getDatabaseData(phoneNumber);
  console.log(databaseData);
  response.send(databaseData);
}
