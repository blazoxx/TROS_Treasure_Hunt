import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

interface VisitorSession {
  ip: string;
  lastSeen: number;
}

// In-memory store for active visitor sessions
const activeSessions = new Map<string, VisitorSession>();
const TIMEOUT = 5 * 60 * 1000; // 5 minutes

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';
  return ip;
}

function cleanupExpiredSessions() {
  const now = Date.now();
  for (const [key, session] of activeSessions.entries()) {
    if (now - session.lastSeen > TIMEOUT) {
      activeSessions.delete(key);
    }
  }
}

export async function GET(request: NextRequest) {
  cleanupExpiredSessions();
  const count = activeSessions.size;
  return NextResponse.json({ count });
}

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);
  const now = Date.now();
  
  // Update or create visitor session
  activeSessions.set(clientIP, {
    ip: clientIP,
    lastSeen: now,
  });
  
  cleanupExpiredSessions();
  const count = activeSessions.size;
  
  return NextResponse.json({ count });
}
