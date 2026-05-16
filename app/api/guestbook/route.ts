import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();
const KEY = "guestbook:entries";

interface GuestEntry {
  name: string;
  msg: string;
  time: string;
}

// GET /api/guestbook — return all entries (newest first)
export async function GET() {
  try {
    const entries = await redis.lrange<GuestEntry>(KEY, 0, -1);
    return NextResponse.json(entries);
  } catch {
    return NextResponse.json([], { status: 500 });
  }
}

// POST /api/guestbook — add a new entry
export async function POST(req: NextRequest) {
  try {
    const { name, msg } = await req.json();

    if (!name || !msg || typeof name !== "string" || typeof msg !== "string") {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const entry: GuestEntry = {
      name: name.trim().toUpperCase().slice(0, 30),
      msg: msg.trim().slice(0, 280),
      time: new Date().toISOString().slice(0, 16).replace("T", " "),
    };

    // Push to the front of the list so newest is first
    await redis.lpush(KEY, entry);

    return NextResponse.json(entry, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
