import { NextResponse } from "next/server";
import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString: process.env.POSTGRES_URL,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  try {
    const { rows } = await pool.query(
      "SELECT * FROM watched_media WHERE user_id = $1",
      [userId]
    );
    const watchedMediaObj = rows.reduce((acc, row) => {
      acc[row.media_id] = row.watched;
      return acc;
    }, {});
    return NextResponse.json(watchedMediaObj);
  } catch (error) {
    console.error("Error fetching watched media:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const { userId, mediaId, watched } = await request.json();
  console.log("Received data:", { userId, mediaId, watched });

  try {
    await pool.query(
      "INSERT INTO watched_media (user_id, media_id, watched) VALUES ($1, $2, $3) ON CONFLICT (user_id, media_id) DO UPDATE SET watched = $3",
      [userId, mediaId, watched]
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating watched media:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
