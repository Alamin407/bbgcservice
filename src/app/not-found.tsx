import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui";
export default function NotFound() {
  return <section className="not-found"><div className="container"><Eyebrow>404 · Page not found</Eyebrow><h1>This page has moved.</h1><p>We couldn’t find the page you were looking for. Explore our services or return to the homepage.</p><div className="hero-actions"><Link className="button button-primary" href="/">Back to homepage <ArrowRight size={16} /></Link><Link className="text-link" href="/services">Our services <ArrowRight size={15} /></Link></div></div></section>;
}
