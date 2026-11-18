import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Hero from "@/components/hero";
import Metrics from "@/components/metrics";
import { ContactCTA, Eyebrow, IndustryGrid, ServicesSection } from "@/components/ui";

export default function HomePage() {
  return <><Hero /><Metrics /><ServicesSection />
    <section className="section industries-section" aria-labelledby="industries-heading"><div className="container"><div className="section-heading"><div><Eyebrow>Our industries</Eyebrow><h2 id="industries-heading">Deep sector understanding.</h2></div><Link className="text-link" href="/industries">Explore industries <ArrowRight size={17} /></Link></div><IndustryGrid /></div></section>
    <section className="section home-about"><div className="container split-section"><div className="about-picture"><Image src="/images/people.webp" alt="BBGC’s collaborative approach to business and technology" fill sizes="(max-width: 760px) 100vw, 48vw" /><div className="picture-label"><span className="small-square" />People. Expertise. Partnership.</div></div><div className="split-copy"><Eyebrow>About BBGC</Eyebrow><h2>Global perspective.<br />Personal partnership.</h2><p>Great technology starts with understanding your business. Our consultants combine more than 20 years of experience with a practical, people-first approach.</p><ul className="check-list"><li><Check size={17} />Specialist teams with real industry experience</li><li><Check size={17} />Long-term partnerships, not one-off solutions</li><li><Check size={17} />Global reach, with local understanding</li></ul><Link className="text-link" href="/about-us">Discover BBGC <ArrowUpRight size={16} /></Link></div></div></section>
    <ContactCTA />
  </>;
}
