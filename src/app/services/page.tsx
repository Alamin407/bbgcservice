import type { Metadata } from "next";
import { ContactCTA, Eyebrow, InnerHero, ServiceCard } from "@/components/ui";
import { services } from "@/lib/content";
export const metadata: Metadata = { title: "Our Services", description: "Explore BBGC’s software engineering, cloud, CTRM consulting, and data services." };
export default function ServicesPage() {
  return <><InnerHero eyebrow="Our services" title="Technology, with a business purpose." description="Four complementary capabilities. One partner to help you navigate complexity and deliver meaningful change." image="/images/cloud.webp" />
    <section className="section"><div className="container"><div className="section-heading"><div><Eyebrow>Our capabilities</Eyebrow><h2>Expertise that delivers.</h2></div></div><div className="services-grid">{services.map((s,i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div></div></section>
    <section className="section soft-section"><div className="container"><Eyebrow>Our approach</Eyebrow><h2 className="standalone-heading">From understanding to delivery.</h2><div className="process-grid">{[["Understand", "We start with your people, processes, and priorities to define the business challenge clearly."], ["Design", "We bring the right specialists together to shape a practical solution around your organisation."], ["Deliver", "We work alongside your team to implement, refine, and support the solution over time."]].map(([title,text],i) => <div className="process-item" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section><ContactCTA /></>;
}
