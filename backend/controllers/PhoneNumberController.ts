import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const { SECRET_KEY } = process.env;
const PHONE_VALIDATION_BASE_URL = "https://phonevalidation.abstractapi.com/v1";

export async function getPhoneDetails(phoneNumber: string) {
  try {
    const phoneNumberResponse = await axios.get(
      `${PHONE_VALIDATION_BASE_URL}/?api_key=${SECRET_KEY}&phone=${phoneNumber}`
    );
    return phoneNumberResponse.data;
  } catch (error) {
    console.error("error!");
  }
}
