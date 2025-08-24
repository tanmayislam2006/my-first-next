import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // from .env.local
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In dev, use global variable to prevent creating multiple instances
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In prod, just create new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
