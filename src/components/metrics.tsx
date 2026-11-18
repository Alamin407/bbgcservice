import { Award, Globe2, Layers3, Building2 } from "lucide-react";
const metrics = [
  { value: "20", suffix: "+", label: "Years of experience", Icon: Award },
  { value: "6", suffix: "", label: "Global offices", Icon: Globe2 },
  { value: "4", suffix: "", label: "Core service areas", Icon: Layers3 },
  { value: "3", suffix: "", label: "Specialist industries", Icon: Building2 },
];
export default function Metrics() {
  return <section className="metrics" aria-label="BBGC at a glance"><div className="container metrics-grid">{metrics.map(({ value, suffix, label, Icon }) => <div className="metric" key={label}><span className="metric-icon"><Icon size={29} strokeWidth={1.45} /></span><div><span className="metric-value">{value}<span>{suffix}</span></span><span className="metric-label">{label}</span></div></div>)}</div></section>;
}
