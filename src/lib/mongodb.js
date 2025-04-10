// lib/mongodb.js
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/everhelp";
const MONGODB_DB = process.env.MONGODB_DB || "everhelp";

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);
  cachedClient = client;
  cachedDb = db;
  return { client, db };
}
