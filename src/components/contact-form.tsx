"use client";
import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, LoaderCircle } from "lucide-react";
import { enquiryTopics } from "@/lib/content";

export default function ContactForm({ initialTopic }: { initialTopic: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [firstName, setFirstName] = useState("");
  const busy = useRef(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;
    const form = new FormData(e.currentTarget);
    busy.current = true; setStatus("loading"); setError("");
    try {
      const r = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...Object.fromEntries(form.entries()), consent: form.get("consent") === "on" }) });
      const result = await r.json();
      if (!r.ok) throw new Error(result.error || "Your enquiry could not be saved. Please try again.");
      setReference(result.reference); setFirstName(String(form.get("name")).trim().split(/\s+/)[0]); setStatus("success");
    } catch (err) { setError(err instanceof Error ? err.message : "Something went wrong. Please try again."); setStatus("error"); }
    finally { busy.current = false; }
  }
  if (status === "success") return <div className="form-panel form-success" role="status"><span className="success-mark"><Check size={30} /></span><div className="menu-kicker">Enquiry received</div><h2>Thank you, {firstName}.</h2><p>Your enquiry has been saved. Keep your reference number if you contact the team about your request.</p><div className="reference-box"><span>Enquiry reference</span><strong>{reference}</strong></div><Link className="button button-primary" href="/">Back to homepage <ArrowRight size={16} /></Link><button className="text-link" onClick={() => setStatus("idle")}>Send another enquiry <ArrowUpRight size={14} /></button></div>;
  return <form className="form-panel" onSubmit={submit} aria-label="Contact BBGC"><span className="menu-kicker">Start a conversation</span><h2>Tell us how we can help.</h2><p className="form-description">Complete the form below to share your enquiry.</p>
    <div className="form-grid"><label className="form-field">Full name <span>*</span><input type="text" name="name" autoComplete="name" required minLength={2} maxLength={100} placeholder="Your full name" /></label>
      <label className="form-field">Email address <span>*</span><input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" /></label>
      <label className="form-field field-wide">Company <small>(optional)</small><input type="text" name="company" autoComplete="organization" maxLength={160} placeholder="Your organisation" /></label>
      <label className="form-field field-wide">I’m interested in <span>*</span><span className="select-wrap"><select name="service" required defaultValue={initialTopic || ""}><option value="" disabled>Select a topic</option>{enquiryTopics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}</select><ChevronDown size={16} /></span></label>
      <label className="form-field field-wide">Your message <span>*</span><textarea name="message" required minLength={10} maxLength={4000} rows={4} placeholder="Tell us a little about your project or question…" /></label>
    </div><label className="consent-field"><input type="checkbox" name="consent" required /><span>I agree that BBGC may use these details to respond to my enquiry, as described in the <a href="https://bbgcservices.com/privacy-policy/" target="_blank" rel="noreferrer">privacy policy</a>.</span></label>
    <input className="honey-field" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {status === "error" && <div className="form-error" role="alert">{error}</div>}
    <button className="button button-primary submit-button" type="submit" disabled={status === "loading"}>{status === "loading" ? <>Submitting <LoaderCircle className="spin" size={16} /></> : <>Send enquiry <ArrowUpRight size={16} /></>}</button>
    <span className="required-note">* Required fields</span>
  </form>;
}
