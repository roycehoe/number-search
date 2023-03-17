import dotenv from "dotenv";

dotenv.config();

const IS_DEV = process.env.NODE_ENV === "development";

const DEV_DB_URL = process.env.DEV_DB_URL || "";
const PROD_DB_URL = process.env.PROD_DB_URL || "";

export const SECRET_KEY = process.env.SECRET_KEY || "";
export const DB_NAME = process.env.DB_NAME || "";
export const DB_URL = IS_DEV ? DEV_DB_URL : PROD_DB_URL;
