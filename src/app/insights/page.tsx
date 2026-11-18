import type { Metadata } from "next";
import { InnerHero, ContactCTA } from "@/components/ui";
import InsightsList from "@/components/insights-list";
export const metadata: Metadata = { title: "Insights & News", description: "Explore company news, technology partnerships, and the latest announcements from BBGC." };
export default function InsightsPage() {
  return <><InnerHero eyebrow="Insights" title="Ideas, news, and perspectives." description="Discover the partnerships, people, and developments shaping our work across technology and business." image="/images/london-day.webp" /><InsightsList /><ContactCTA /></>;
}
