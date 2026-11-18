import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ChevronRight, Mail, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";
import Offices from "@/components/offices";
import { Eyebrow } from "@/components/ui";
import { companyEmail, companyPhone, enquiryTopics } from "@/lib/content";
export const metadata: Metadata = { title: "Get in Touch", description: "Talk to BBGC about your business and technology challenges. Contact our team or find one of our six global offices." };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const query = await searchParams; const topic = typeof query.service === "string" && enquiryTopics.includes(query.service) ? query.service : "";
  return <><section className="contact-page"><div className="container"><nav className="breadcrumbs dark-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={12} /><span>Get in touch</span></nav><div className="contact-layout"><div className="contact-intro"><Eyebrow>Get in touch</Eyebrow><h1>Let’s talk about<br />your next challenge.</h1><p>Whether you have a project in mind or a question about our services, we’d love to hear from you.</p><div className="contact-methods"><a href={`mailto:${companyEmail}`}><span className="contact-method-icon"><Mail size={21} /></span><div><small>Email our team</small><strong>{companyEmail}</strong></div></a><a href="tel:+442039165405"><span className="contact-method-icon"><Phone size={20} /></span><div><small>Call our London office</small><strong>{companyPhone}</strong></div></a></div><a className="text-link" href="#offices">Find a global office <ArrowDown size={15} /></a></div><ContactForm initialTopic={topic} /></div></div></section><Offices /></>;
}
