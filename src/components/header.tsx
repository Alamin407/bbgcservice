"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Building2, ChevronDown, Menu, ShoppingBag, Wind, X } from "lucide-react";
import { services, industries } from "@/lib/content";
import { Brand, ServiceIcon } from "./ui";

type Group = "services" | "industries";
export default function Header() {
  const pathname = usePathname();
  const [group, setGroup] = useState<Group | null>(null);
  const [mobile, setMobile] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const close = () => { setGroup(null); setMobile(false); };
  useEffect(() => {
    const outside = (e: PointerEvent) => { if (!headerRef.current?.contains(e.target as Node)) { setGroup(null); setMobile(false); } };
    const escape = (e: KeyboardEvent) => { if (e.key === "Escape") { setGroup(null); setMobile(false); if (mobile) menuRef.current?.focus(); else if (group) triggerRef.current?.focus(); } };
    document.addEventListener("pointerdown", outside); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [mobile, group]);
  const direct = (label: string, href: string) => <Link className={`nav-link ${pathname === href || (href !== "/" && pathname.startsWith(href + "/")) ? "active" : ""}`} href={href} onClick={close} aria-current={pathname === href ? "page" : undefined}>{label}</Link>;
  const dropdown = (name: Group, label: string) => <div className={`nav-group ${group === name ? "is-open" : ""}`}>
    <button className={`nav-link nav-trigger ${pathname.startsWith(`/${name}`) ? "active" : ""}`} type="button" aria-expanded={group === name} aria-controls={`${name}-menu`} onClick={(e) => { triggerRef.current = e.currentTarget; setGroup(group === name ? null : name); }}>{label}<ChevronDown size={13} strokeWidth={1.8} /></button>
    {group === name && <div className="nav-dropdown" id={`${name}-menu`}><span className="menu-kicker">{name === "services" ? "Our capabilities" : "Sector expertise"}</span>
      {(name === "services" ? services : industries).map((item, i) => {
        const Icon = [Building2, Wind, ShoppingBag][i % 3];
        return <Link className="dropdown-item" href={`/${name}/${item.slug}`} key={item.slug} onClick={close}><span className="dropdown-icon">{name === "services" ? <ServiceIcon slug={item.slug} size={20} /> : <Icon size={20} />}</span><span>{item.title}</span><ArrowUpRight size={14} className="dropdown-arrow" /></Link>;
      })}
      <Link className="dropdown-all" href={`/${name}`} onClick={close}>Explore all {name}<ArrowRight size={14} /></Link>
    </div>}
  </div>;
  return <header className="site-header" ref={headerRef}><div className="container header-inner">
    <div onClick={close}><Brand /></div>
    <nav className={`primary-nav ${mobile ? "mobile-open" : ""}`} aria-label="Main navigation">
      {direct("Home", "/")}{direct("About us", "/about-us")}{dropdown("services", "Services")}{dropdown("industries", "Industries")}{direct("Insights", "/insights")}{direct("Careers", "/careers")}
      <Link className="button button-primary mobile-contact" href="/contact-us" onClick={close}>Get in touch <ArrowUpRight size={16} /></Link>
    </nav>
    <div className="header-actions"><Link className="button button-primary header-contact" href="/contact-us" onClick={close}>Get in touch <ArrowUpRight size={16} /></Link>
      <button ref={menuRef} type="button" className="mobile-toggle" aria-label={mobile ? "Close navigation" : "Open navigation"} aria-expanded={mobile} onClick={() => { setMobile(!mobile); setGroup(null); }}>{mobile ? <X size={23} /> : <Menu size={23} />}</button>
    </div>
  </div></header>;
}
