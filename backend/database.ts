import { MongoClient, WithId } from "mongodb";
import { DB_NAME, DB_URL } from "./config";
import { PhoneValidationResponse } from "./controllers/PhoneNumberController";

const dbClient = new MongoClient(DB_URL);

interface PhoneValidationDBSchema extends PhoneValidationResponse {
  createdAt: number;
}

export async function write(data: PhoneValidationResponse) {
  try {
    await dbClient.connect();
    const db = dbClient.db(DB_NAME);
    const collection = db.collection("documents");
    await collection.insertOne({
      ...data,
      createdAt: Date.now(),
    } as PhoneValidationDBSchema);
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

    const findResult = await collection
      .find({
        phone: phoneNumber,
      })
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();
    return findResult[0] as WithId<PhoneValidationDBSchema>;
  } catch (e) {
    console.error(e);
  } finally {
    dbClient.close();
  }
}
