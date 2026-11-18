import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { services, industries } from "@/lib/content";
import { insights } from "@/lib/insights";
import { ContactCTA, Eyebrow, InnerHero, ServiceCard } from "@/components/ui";

type Params = { section: string; slug: string };
export function generateStaticParams(): Params[] {
  return [...services.map(({slug}) => ({section: "services", slug})), ...industries.map(({slug}) => ({section: "industries", slug})), ...insights.map(({slug}) => ({section: "insights", slug}))];
}
function getItem(section: string, slug: string) {
  if (section === "services") return services.find((s) => s.slug === slug);
  if (section === "industries") return industries.find((s) => s.slug === slug);
  if (section === "insights") return insights.find((s) => s.slug === slug);
}
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { section, slug } = await params; const item = getItem(section, slug);
  return item ? { title: item.title, description: item.description } : { title: "Page not found" };
}
export default async function DetailPage({ params }: { params: Promise<Params> }) {
  const { section, slug } = await params; const item = getItem(section, slug);
  if (!item) notFound();
  if ("paragraphs" in item) return <><InnerHero eyebrow={item.category} title={item.title} description={item.description} image={item.image} trail={{ label: "Insights", href: "/insights" }} /><section className="section"><div className="container article-layout"><aside className="article-aside"><span className="menu-kicker">BBGC insights</span><strong>{item.category}</strong><Link className="text-link" href="/insights"><ArrowLeft size={15} />All insights</Link></aside><article className="article-body">{item.paragraphs.map((p) => <p key={p}>{p}</p>)}<a className="text-link" href={item.source} target="_blank" rel="noreferrer">View original announcement <ArrowUpRight size={16} /></a></article></div></section><ContactCTA /></>;
  const isService = "capabilities" in item;
  const capabilities = isService ? item.capabilities : item.focus;
  const related = isService ? services.filter((s) => s.slug !== item.slug) : services.filter((s) => item.services.includes(s.slug));
  return <><InnerHero eyebrow={item.title} title={item.title} description={item.description} image={item.image} trail={{ label: isService ? "Services" : "Industries", href: `/${section}` }}><Link href={`/contact-us${isService ? `?service=${encodeURIComponent(item.title)}` : ""}`} className="button button-primary">Talk to an expert <ArrowUpRight size={16} /></Link></InnerHero>
    <section className="section"><div className="container capability-layout"><div className="capability-intro"><Eyebrow>{isService ? "Our expertise" : "Industry understanding"}</Eyebrow><h2>How we can help.</h2><p>{item.intro}</p></div><div className="accordion-list">{capabilities.map((cap,i) => <details className="capability-detail" key={cap.title} name="capability" open={i === 0}><summary><span className="detail-number">0{i+1}</span><h3>{cap.title}</h3><Plus size={18} /></summary><p>{cap.description}</p></details>)}</div></div></section>
    <section className="section soft-section"><div className="container"><div className="section-heading"><div><Eyebrow>Connected capabilities</Eyebrow><h2>{isService ? "Explore more services." : "Expertise for your industry."}</h2></div><Link className="text-link" href="/services">All services <ArrowRight size={16} /></Link></div><div className="services-grid three-column">{related.map((s) => <ServiceCard key={s.slug} service={s} index={services.indexOf(s)} />)}</div></div></section><ContactCTA /></>;
}
