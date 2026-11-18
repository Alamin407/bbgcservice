import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { agentUpgrade: "security" },
  images: { qualities: [75, 85, 90] },
  async redirects() {
    return [
      { source: "/resources", destination: "/insights", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/bbgc-and-cleardox", destination: "/insights/cleardox-partnership", permanent: true },
      { source: "/bbgc-gcloud", destination: "/insights/g-cloud-supplier", permanent: true },
      { source: "/bbgc-procom-2", destination: "/insights/procom-partnership", permanent: true },
      { source: "/bbgc-rio-tinto", destination: "/insights/rio-tinto-managed-services", permanent: true },
    ];
  },
};
export default nextConfig;
