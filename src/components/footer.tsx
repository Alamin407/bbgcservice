import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./ui";
import Newsletter from "./newsletter";
import { companyEmail, companyPhone } from "@/lib/content";

export default function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-grid">
    <div className="footer-brand"><Brand /><p>A global business and technology consultancy. Built on expertise. Driven by impact.</p><a className="social-link" href="https://www.linkedin.com/company/bbgcservices" target="_blank" rel="noreferrer" aria-label="BBGC on LinkedIn (opens in a new tab)"><span aria-hidden="true" className="linkedin-mark">in</span></a></div>
    <div className="footer-links"><h3>Explore</h3><Link href="/about-us">About us</Link><Link href="/services">Our services</Link><Link href="/industries">Our industries</Link><Link href="/insights">Insights</Link><Link href="/careers">Careers</Link></div>
    <div className="footer-links"><h3>Get in touch</h3><a href={`mailto:${companyEmail}`}>{companyEmail}</a><a href="tel:+442039165405">{companyPhone}</a><Link href="/contact-us#offices">Our global offices <ArrowUpRight size={13} /></Link></div>
    <Newsletter />
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} BBGC. All rights reserved.</span><div><a href="https://bbgcservices.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy</a><a href="https://bbgcservices.com/cookie-policy/" target="_blank" rel="noreferrer">Cookie policy</a><a href="https://bbgcservices.com/modern-slavery-act/" target="_blank" rel="noreferrer">Modern Slavery Act</a></div></div></div></footer>;
}
