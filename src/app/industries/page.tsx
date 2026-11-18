import type { Metadata } from "next";
import { ContactCTA, Eyebrow, InnerHero, IndustryGrid } from "@/components/ui";
export const metadata: Metadata = { title: "Our Industries", description: "Technology consultancy for financial services, energy and commodities, and retail and consumer markets." };
export default function IndustriesPage() {
  return <><InnerHero eyebrow="Our industries" title="Your sector. Our understanding." description="Great solutions start with industry knowledge. We connect deep sector experience with the right technology to move your business forward." image="/images/finance.webp" />
    <section className="section"><div className="container"><div className="section-heading"><div><Eyebrow>Sector expertise</Eyebrow><h2>Specialists in your world.</h2></div></div><IndustryGrid /></div></section><ContactCTA title="Let’s talk about your industry." /></>;
}
