import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI is not set');
}

let cachedClient: MongoClient | null = null;

export async function getMongoClient(): Promise<MongoClient> {
  // For production (Vercel), create a fresh connection each time
  // For development, cache the connection
  if (process.env.NODE_ENV === 'production') {
    const client = new MongoClient(uri);
    await client.connect();
    return client;
  }

  // Development: cache connection
  if (cachedClient && cachedClient.topology?.isConnected()) {
    return cachedClient;
  }

  cachedClient = new MongoClient(uri);
  await cachedClient.connect();
  return cachedClient;
}
