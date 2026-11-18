import { db } from "@/db";
import { subscribers } from "@/db/schema";

export const runtime = "nodejs";
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ error: "Please use the subscription form." }, { status: 415 });
  let email = "";
  try {
    const raw = await request.text();
    if (raw.length > 1500) return Response.json({ error: "Request too large." }, { status: 413 });
    const data = JSON.parse(raw);
    email = typeof data.email === "string" ? data.email.trim().toLowerCase() : "";
    if (data.website) throw new Error();
  } catch { return Response.json({ error: "Please enter your email address." }, { status: 400 }); }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  try {
    await db.insert(subscribers).values({ email }).onConflictDoNothing({ target: subscribers.email });
    return Response.json({ ok: true });
  } catch { return Response.json({ error: "Sign-up is temporarily unavailable. Please try again." }, { status: 503 }); }
}
