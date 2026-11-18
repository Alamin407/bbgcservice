"use client";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

export default function Newsletter() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setState("loading");
    try {
      const response = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: data.get("email"), website: data.get("website") }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Please try again.");
      setState("success");
    } catch (err) { setError(err instanceof Error ? err.message : "Please try again."); setState("error"); }
  }
  return <div className="footer-newsletter"><h3>Stay in the know</h3><p>Company news and perspectives, in your inbox.</p>
    {state === "success" ? <div className="subscribed" role="status"><CheckCircle2 size={19} /><span>You’re on the list. Thank you!</span></div> : <form onSubmit={submit}>
      <label className="sr-only" htmlFor="newsletter-email">Email address for the BBGC newsletter</label>
      <div className="subscribe-field"><input id="newsletter-email" name="email" type="email" maxLength={254} required placeholder="Your email address" autoComplete="email" disabled={state === "loading"} /><button type="submit" aria-label="Subscribe to the newsletter" disabled={state === "loading"}>{state === "loading" ? <LoaderCircle className="spin" size={18} /> : <ArrowRight size={19} />}</button></div>
      <input className="honey-field" tabIndex={-1} name="website" aria-hidden="true" autoComplete="off" />
      <small className="newsletter-consent">By signing up, you agree to our <a href="https://bbgcservices.com/privacy-policy/" target="_blank" rel="noreferrer">privacy policy</a>.</small>
      {state === "error" && <p className="newsletter-error" role="alert">{error}</p>}
    </form>}
  </div>;
}
