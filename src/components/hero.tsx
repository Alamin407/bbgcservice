"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Layers3, Wind } from "lucide-react";
import { Eyebrow } from "./ui";

const features = [
  { eyebrow: "Global business & technology consultancy", first: "Global expertise.", second: "Real-world impact.", text: "We bring technology and industry expertise together to solve complex challenges and deliver lasting business value.", image: "/images/london-skyline.webp", alt: "London’s financial district overlooking the Thames at blue hour", primary: "Explore our services", href: "#services", secondary: "About BBGC", secondHref: "/about-us", location: "London, United Kingdom" },
  { eyebrow: "Cloud & digital transformation", first: "Cloud foundations.", second: "New possibilities.", text: "Modernise your infrastructure with cloud platforms designed for your people, your ambitions, and your next stage of growth.", image: "/images/cloud.webp", alt: "A modern data centre with blue-illuminated servers", primary: "Explore cloud services", href: "/services/cloud-services", secondary: "Talk to an expert", secondHref: "/contact-us?service=Cloud%20Services", location: "Cloud infrastructure" },
  { eyebrow: "Commodity trading & risk management", first: "Trading insight.", second: "Clearer decisions.", text: "Bring your trading operations, systems, and data together with specialists who understand the global commodities market.", image: "/images/energy.webp", alt: "Offshore turbines in an open-sea wind farm", primary: "Explore CTRM consulting", href: "/services/ctrm-consulting", secondary: "Talk to an expert", secondHref: "/contact-us?service=CTRM%20Consulting", location: "Energy & commodities" },
];

function Network() {
  const points = [[630,508],[780,412],[870,459],[961,338],[1006,414],[1102,361],[1184,283],[1262,343],[1333,250],[1420,302],[1512,210],[1592,263],[982,515],[1197,473],[1375,438],[1560,392]];
  const edges = [[0,1],[1,2],[1,3],[2,3],[2,4],[3,4],[3,5],[4,5],[5,6],[5,7],[6,7],[6,8],[7,8],[7,9],[8,9],[8,10],[9,10],[9,11],[10,11],[2,12],[4,12],[4,13],[5,13],[7,13],[7,14],[9,14],[9,15],[11,15],[12,13],[13,14],[14,15]];
  return <svg className="hero-network" viewBox="0 0 1600 530" preserveAspectRatio="none" aria-hidden="true"><defs><filter id="node-glow"><feGaussianBlur stdDeviation="3" /></filter><linearGradient id="network-color"><stop stopColor="#96caff" stopOpacity="0" /><stop offset=".43" stopColor="#b5deff" stopOpacity=".61" /><stop offset="1" stopColor="#8dccff" stopOpacity=".8" /></linearGradient></defs><g stroke="url(#network-color)" strokeWidth="1" fill="none">{edges.map(([a,b]) => <path key={`${a}-${b}`} d={`M${points[a].join(" ")}L${points[b].join(" ")}`} />)}</g>{points.slice(1).map(([x,y],i) => <g key={i}><circle cx={x} cy={y} r="5" fill="#74c1ff" filter="url(#node-glow)" /><circle cx={x} cy={y} r={i % 3 === 0 ? 2.5 : 1.7} fill="#d1edff" /></g>)}</svg>;
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const feature = features[active];
  const LocationIcon = [MapPin, Layers3, Wind][active];
  return <section className="hero" aria-label="BBGC featured expertise" aria-roledescription="carousel">
    <Image key={feature.image} className="hero-image" src={feature.image} alt={feature.alt} fill priority={active === 0} sizes="100vw" quality={90} />
    <div className={`hero-shade ${active > 0 ? "hero-shade-alt" : ""}`} />
    {active === 0 && <Network />}
    <div className="container hero-inner"><div className="hero-content" aria-live="polite" aria-atomic="true" key={active}>
      <Eyebrow light>{feature.eyebrow}</Eyebrow>
      <h1>{feature.first}<br /><span>{feature.second}</span></h1>
      <p>{feature.text}</p>
      <div className="hero-actions"><Link className="button button-primary" href={feature.href}>{feature.primary}<ArrowRight size={17} /></Link><Link className="button button-outline-light" href={feature.secondHref}>{feature.secondary}<ArrowUpRight size={16} /></Link></div>
    </div>
    <div className="hero-bottom"><div className="slide-controls" role="group" aria-label="Choose a feature">{features.map((item, index) => <button key={item.first} type="button" className={`slide-button ${active === index ? "selected" : ""}`} onClick={() => setActive(index)} aria-label={`Show feature ${index + 1}: ${item.first} ${item.second}`} aria-pressed={active === index}><span>0{index + 1}</span><i /></button>)}</div>
      <span className="hero-location"><LocationIcon size={13} strokeWidth={1.7} />{feature.location}</span>
    </div></div>
  </section>;
}
