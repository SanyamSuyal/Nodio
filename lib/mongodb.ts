import { MongoClient } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var __mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

export async function getMongoClient(): Promise<MongoClient> {
  if (clientPromise) {
    return clientPromise;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global.__mongoClientPromise) {
      const client = new MongoClient(uri);
      global.__mongoClientPromise = client.connect();
    }
    clientPromise = global.__mongoClientPromise;
  } else {
    const client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export default getMongoClient;
