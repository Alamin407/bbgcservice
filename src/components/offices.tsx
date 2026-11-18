"use client";
import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { offices } from "@/lib/content";
import { Eyebrow } from "./ui";
export default function Offices() {
  const [region, setRegion] = useState("All locations");
  const regions = ["All locations", "Europe", "Middle East", "Asia Pacific", "North America"];
  const selected = offices.filter((office) => region === "All locations" || office.region === region);
  return <section className="section soft-section" id="offices"><div className="container"><Eyebrow>Our locations</Eyebrow><h2 className="standalone-heading">One team. A global footprint.</h2>
    <div className="filter-row" role="group" aria-label="Filter offices by region">{regions.map((r) => <button className={`filter-button ${r === region ? "selected" : ""}`} key={r} aria-pressed={r === region} onClick={() => setRegion(r)}>{r}</button>)}</div>
    <div className="office-grid" aria-live="polite">{selected.map((office) => <div className="office-card" key={office.city}><div className="office-top"><MapPin size={21} /><span>{office.region}</span></div><h3>{office.city}</h3><span className="office-country">{office.country}</span><p>{office.address}</p><a className="text-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address + ", " + office.country)}`} target="_blank" rel="noreferrer">View on map <ArrowUpRight size={14} /></a></div>)}</div>
  </div></section>;
}
