import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

let cachedClient: MongoClient | null = null;

export async function getMongoClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }

  if (cachedClient) {
    return cachedClient;
  }

  cachedClient = new MongoClient(uri);
  await cachedClient.connect();
  return cachedClient;
}
