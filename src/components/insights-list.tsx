"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, X } from "lucide-react";
import { insights } from "@/lib/insights";
export default function InsightsList() {
  const [category, setCategory] = useState("All insights");
  const [search, setSearch] = useState("");
  const filtered = insights.filter((item) => (category === "All insights" || item.category === category) && `${item.title} ${item.description}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <section className="section"><div className="container"><div className="insights-tools"><div className="filter-row" role="group" aria-label="Filter insights">{["All insights", "Company news", "Partnerships"].map((c) => <button key={c} className={`filter-button ${category === c ? "selected" : ""}`} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</button>)}</div><label className="search-field"><Search size={16} /><input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search insights" aria-label="Search insights" /></label></div>
    <div className="insights-grid" aria-live="polite">{filtered.map((item) => <Link key={item.slug} className="insight-card" href={`/insights/${item.slug}`}><div className="insight-image"><Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><div className="insight-copy"><span className="category-tag">{item.category}</span><h2>{item.title}</h2><p>{item.description}</p><span className="card-link">Read the story <ArrowRight size={15} /></span></div></Link>)}</div>
    {filtered.length === 0 && <div className="empty-state"><Search size={30} /><h3>No matching insights</h3><p>Try another search term or browse all company news.</p><button className="button button-primary" onClick={() => { setCategory("All insights"); setSearch(""); }}>Clear filters <X size={15} /></button></div>}
  </div></section>;
}
