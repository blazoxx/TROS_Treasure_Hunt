import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

async function getVisitorCount() {
  try {
    console.log('🔵 GET - Starting...');
    const client = await getMongoClient();
    console.log('🔵 GET - Client connected');
    const db = client.db('thunt');
    const collection = db.collection('stats');
    
    const stats = await collection.findOne({ _id: 'visitor_count' });
    console.log('🔵 GET - Stats found:', stats);
    return stats?.count || 0;
  } catch (error) {
    console.error('🔴 GET Error:', error);
    return 0;
  }
}

async function incrementVisitorCount() {
  try {
    console.log('🟢 POST - Starting...');
    const client = await getMongoClient();
    console.log('🟢 POST - Client connected');
    const db = client.db('thunt');
    const collection = db.collection('stats');
    
    const result = await collection.findOneAndUpdate(
      { _id: 'visitor_count' },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: 'after' }
    );
    
    console.log('🟢 POST - Result:', result);
    return result.value?.count || 1;
  } catch (error) {
    console.error('🔴 POST Error:', error);
    return 0;
  }
}

export async function GET(request: NextRequest) {
  const total = await getVisitorCount();
  console.log('🔵 GET Response:', { total });
  return NextResponse.json({ total });
}

export async function POST(request: NextRequest) {
  const total = await incrementVisitorCount();
  console.log('🟢 POST Response:', { total });
  return NextResponse.json({ total });
}
