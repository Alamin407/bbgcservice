import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { enquiryTopics } from "@/lib/content";
import { and, eq, gte, count } from "drizzle-orm";

export const runtime = "nodejs";
const error = (message: string, status = 400) => Response.json({ error: message }, { status });

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return error("Please submit the enquiry form.", 415);
  let data: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 14000) return error("Your enquiry is too long.", 413);
    data = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) throw new Error();
  } catch { return error("We could not read your enquiry. Please try again."); }
  const field = (key: string) => typeof data[key] === "string" ? (data[key] as string).trim() : "";
  const name = field("name"), email = field("email").toLowerCase(), company = field("company"), service = field("service"), message = field("message");
  if (field("website")) return error("Unable to accept this enquiry.");
  if (name.length < 2 || name.length > 100) return error("Please enter your full name (2–100 characters).");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return error("Please enter a valid email address.");
  if (company.length > 160) return error("Please shorten your company name.");
  if (!enquiryTopics.includes(service)) return error("Please select a topic for your enquiry.");
  if (message.length < 10 || message.length > 4000) return error("Please describe your enquiry in 10–4,000 characters.");
  if (data.consent !== true) return error("Please confirm that we may use these details to respond.");
  try {
    const [recent] = await db.select({ total: count() }).from(enquiries).where(and(eq(enquiries.email, email), gte(enquiries.createdAt, new Date(Date.now() - 15 * 60 * 1000))));
    if (recent.total >= 4) return error("You have already sent several enquiries. Please try again in 15 minutes or email us directly.", 429);
    const [saved] = await db.insert(enquiries).values({ name, email, company, service, message, consent: true }).returning({ id: enquiries.id });
    return Response.json({ ok: true, reference: `BBGC-${saved.id.slice(0, 8).toUpperCase()}` }, { status: 201 });
  } catch { return error("Your enquiry could not be saved. Please try again or email info@bbgcservices.com.", 503); }
}
