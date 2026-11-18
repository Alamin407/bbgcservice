import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA, Eyebrow, InnerHero } from "@/components/ui";
import Metrics from "@/components/metrics";
import Offices from "@/components/offices";
export const metadata: Metadata = { title: "About Us", description: "Meet BBGC, a global business and technology consultancy bringing more than 20 years of experience to complex client challenges." };
export default function AboutPage() {
  return <><InnerHero eyebrow="About BBGC" title="Expertise you can build on." description="We are Business Benefits Global Consulting. A global team of specialists bringing technology, people, and business priorities together." image="/images/london-skyline.webp" /><Metrics />
    <section className="section"><div className="container split-section"><div className="about-picture"><Image src="/images/people.webp" alt="A collaborative approach to technology consulting" fill sizes="(max-width: 760px) 100vw, 48vw" /></div><div className="split-copy"><Eyebrow>Who we are</Eyebrow><h2>A partner in your progress.</h2><p>We work alongside organisations to solve their most important business and technology challenges. Our consultants bring more than 20 years of experience across software engineering, cloud, data, and commodity trading systems.</p><p>Our approach starts with listening. We learn how your business works, bring together the right expertise, and stay close to the people who will use the solution every day.</p></div></div></section>
    <Offices /><ContactCTA /></>;
}
