import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, Cloud, CodeXml, Database, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { services, industries, type Service } from "@/lib/content";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`brand${light ? " brand-light" : ""}`} aria-label="BBGC home">
    <svg className="brand-mark" viewBox="0 0 44 40" fill="none" aria-hidden="true">
      <path d="M1 29 15.5 4h9L10 29H1Z" fill="#65a5ff" />
      <path d="M10 36 28.5 4h9L19 36h-9Z" fill="#2367e8" />
      <path d="m23 36 12-20h9L32 36h-9Z" fill={light ? "#a0c5ff" : "#153e90"} />
    </svg>
    <span className="brand-wordmark">BBGC</span>
  </Link>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`eyebrow${light ? " eyebrow-light" : ""}`}><span aria-hidden="true" />{children}</div>;
}

export function ServiceIcon({ slug, size = 29 }: { slug: string; size?: number }) {
  const Icon = slug === "software-engineering" ? CodeXml : slug === "cloud-services" ? Cloud : slug === "ctrm-consulting" ? ChartNoAxesCombined : Database;
  return <Icon size={size} strokeWidth={1.65} aria-hidden="true" />;
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return <Link className="service-card" href={`/services/${service.slug}`}>
    <div className="service-card-top"><span className="service-icon"><ServiceIcon slug={service.slug} /></span><span className="card-index">0{index + 1}</span></div>
    <h3>{service.title}</h3><p>{service.description}</p>
    <span className="card-link">Explore service <ArrowRight size={16} /></span>
  </Link>;
}

export function ServicesSection() {
  return <section className="section services-section" id="services" aria-labelledby="services-heading">
    <div className="container">
      <div className="section-heading"><div><Eyebrow>Our services</Eyebrow><h2 id="services-heading">Expertise that delivers.</h2></div>
        <Link className="text-link" href="/services">View all services <ArrowRight size={17} /></Link>
      </div>
      <div className="services-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} index={index} />)}</div>
    </div>
  </section>;
}

export function IndustryGrid() {
  return <div className="industry-grid">{industries.map((industry, index) => <Link className="industry-card" key={industry.slug} href={`/industries/${industry.slug}`}>
    <Image src={industry.image} alt={industry.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" />
    <div className="industry-shade" /><span className="photo-index">0{index + 1} / 03</span>
    <div className="industry-caption"><h3>{industry.title}</h3><span className="circle-arrow"><ArrowUpRight size={19} /></span></div>
  </Link>)}</div>;
}

export function InnerHero({ eyebrow, title, description, image, trail, children }: { eyebrow: string; title: string; description: string; image?: string; trail?: { label: string; href: string }; children?: ReactNode }) {
  return <section className={`inner-hero${image ? " has-image" : ""}`}>
    {image && <Image className="inner-hero-image" src={image} alt="" fill priority sizes="100vw" />}
    <div className="inner-hero-shade" /><div className="container inner-hero-content">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={12} />{trail && <><Link href={trail.href}>{trail.label}</Link><ChevronRight size={12} /></>}<span>{eyebrow}</span></nav>
      <Eyebrow light>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p>{children}
    </div>
  </section>;
}

export function ContactCTA({ title = "Let’s build what’s next.", description = "Bring us your business challenge. We’ll bring the expertise." }: { title?: string; description?: string }) {
  return <section className="contact-cta"><div className="cta-decoration" aria-hidden="true"><i /><i /><i /></div><div className="container cta-inner"><div><Eyebrow light>Work with BBGC</Eyebrow><h2>{title}</h2><p>{description}</p></div><Link className="button button-white" href="/contact-us">Start a conversation <ArrowUpRight size={17} /></Link></div></section>;
}
