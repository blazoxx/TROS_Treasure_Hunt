import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getMongoClient } from '@/lib/mongodb';

async function getVisitorCount() {
  try {
    const client = await getMongoClient();
    const db = client.db('thunt');
    const collection = db.collection('stats');
    
    const stats = await collection.findOne({ _id: 'visitor_count' });
    return stats?.count || 0;
  } catch (error) {
    console.error('Error getting visitor count:', error);
    return 0;
  }
}

async function incrementVisitorCount() {
  try {
    const client = await getMongoClient();
    const db = client.db('thunt');
    const collection = db.collection('stats');
    
    const result = await collection.findOneAndUpdate(
      { _id: 'visitor_count' },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: 'after' }
    );
    
    return result.value?.count || 1;
  } catch (error) {
    console.error('Error incrementing visitor count:', error);
    return 0;
  }
}

export async function GET(request: NextRequest) {
  const total = await getVisitorCount();
  return NextResponse.json({ total });
}

export async function POST(request: NextRequest) {
  const total = await incrementVisitorCount();
  return NextResponse.json({ total });
}
