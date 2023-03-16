import { MongoClient } from "mongodb";
import { DB_NAME, DB_URL } from "./config";
import { PhoneValidationResponse } from "./controllers/PhoneNumberController";

const dbClient = new MongoClient(DB_URL);

export function test() {
  console.log("I am in the database");
}

export async function write(data: PhoneValidationResponse) {
  try {
    await dbClient.connect();
    const db = dbClient.db(DB_NAME);
    const collection = db.collection("documents");
    await collection.insertOne(data);
    console.log("Data saved");
    console.log(data);
  } catch (e) {
    console.error(e);
  } finally {
    dbClient.close();
  }
}

export async function read(phoneNumber: string) {
  try {
    await dbClient.connect();
    const db = dbClient.db(DB_NAME);
    const collection = db.collection("documents");

    const findResult = await collection.find({ phone: phoneNumber }).toArray();
    return findResult;
  } catch (e) {
    console.error(e);
  } finally {
    dbClient.close();
  }
}
