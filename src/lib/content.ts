export type Capability = { title: string; description: string };
export type Service = {
  slug: string; title: string; shortTitle: string; description: string; intro: string;
  image: string; imageAlt: string; capabilities: Capability[];
};

export const services: Service[] = [
  {
    slug: "software-engineering", title: "Software Engineering", shortTitle: "Software engineering",
    description: "Scalable, secure software built around your business needs.",
    intro: "From the first architecture decision to the final release, we build software that works for your business. Our engineers bring the right balance of technical depth, delivery discipline, and commercial understanding.",
    image: "/images/people.webp", imageAlt: "A collaborative business and technology workspace",
    capabilities: [
      { title: "Architecture & design", description: "Define a practical technical direction. We connect your business requirements with an architecture that is maintainable, secure, and ready to scale." },
      { title: "Application development", description: "Create dependable front-end experiences and robust back-end services, with engineering teams that can lead delivery or work alongside your own." },
      { title: "Quality & assurance", description: "Build confidence into every release with thoughtful testing, code review, and a delivery process focused on lasting quality." },
    ],
  },
  {
    slug: "cloud-services", title: "Cloud Services", shortTitle: "Cloud services",
    description: "Modern cloud platforms that give your business room to grow.",
    intro: "Make cloud a business advantage. Whether you are moving critical workloads or improving an existing platform, our consultants help you build a cloud environment that fits the way you work.",
    image: "/images/cloud.webp", imageAlt: "Illuminated servers in a modern data centre",
    capabilities: [
      { title: "Cloud strategy", description: "Understand your current estate, weigh your platform choices, and create a clear roadmap grounded in your commercial and operational goals." },
      { title: "Migration & modernisation", description: "Move applications and data in manageable stages, with a focus on continuity, dependencies, and a smooth transition for your teams." },
      { title: "Platform optimisation", description: "Improve reliability, resource use, and cost visibility across your cloud infrastructure so your platform keeps pace with demand." },
    ],
  },
  {
    slug: "ctrm-consulting", title: "CTRM Consulting", shortTitle: "CTRM consulting",
    description: "Specialist solutions for commodity trading and risk management.",
    intro: "Connect your trading operation with technology that understands it. Our commodity trading and risk management specialists support the full system lifecycle, from product selection to ongoing improvement.",
    image: "/images/energy.webp", imageAlt: "An offshore wind farm supplying the energy market",
    capabilities: [
      { title: "System selection", description: "Map your trading workflows and risk requirements to a practical shortlist of CTRM and ETRM systems, with a clear assessment of business fit." },
      { title: "Implementation & integration", description: "Translate your front-, middle-, and back-office requirements into a coordinated implementation, connecting the platform to your wider technology estate." },
      { title: "Support & customisation", description: "Keep your trading systems aligned with new products, markets, and processes through specialist support and considered customisation." },
    ],
  },
  {
    slug: "data-services", title: "Data Services", shortTitle: "Data services",
    description: "Turn complex data into clear insights and better decisions.",
    intro: "Bring clarity to your data landscape. We help organisations connect fragmented information, create dependable data foundations, and put useful insights into the hands of decision-makers.",
    image: "/images/finance.webp", imageAlt: "The structured glass facade of a modern office tower",
    capabilities: [
      { title: "Data architecture", description: "Design a coherent data landscape that reflects your organisation, with clear ownership, practical governance, and a foundation for future growth." },
      { title: "Data engineering", description: "Build reliable pipelines that connect business systems and make consistent, well-structured information available where it is needed." },
      { title: "Modelling & analytics", description: "Turn raw information into meaningful business measures through considered modelling, reporting, and analytical tools." },
    ],
  },
];

export type Industry = { slug: string; title: string; description: string; intro: string; image: string; imageAlt: string; focus: Capability[]; services: string[] };
export const industries: Industry[] = [
  {
    slug: "financial-services", title: "Financial Services", description: "Technology that keeps financial institutions moving forward.",
    intro: "Financial institutions need to modernise while protecting the services their customers rely on. We bring engineering, architecture, and delivery expertise to banking, investment, and insurance teams.",
    image: "/images/finance.webp", imageAlt: "Glass office towers in a financial district",
    focus: [
      { title: "Modernise core systems", description: "Develop an achievable path from complex legacy applications to flexible, maintainable platforms." },
      { title: "Connect your data", description: "Make information consistent and accessible across reporting, operations, and customer-facing teams." },
      { title: "Strengthen delivery", description: "Add specialist expertise to your teams, or work with a dedicated partner to deliver a technology programme." },
    ], services: ["software-engineering", "cloud-services", "data-services"],
  },
  {
    slug: "energy-commodities-utilities", title: "Energy, Commodities & Utilities", description: "Specialist expertise for a changing global energy market.",
    intro: "Trading businesses operate at the intersection of physical markets, financial exposure, and complex data. Our consultants know this environment and help make its technology more useful, connected, and reliable.",
    image: "/images/energy.webp", imageAlt: "Wind turbines along a calm stretch of open water",
    focus: [
      { title: "Connect the trade lifecycle", description: "Bring trading, scheduling, risk, and settlement workflows together with the right CTRM or ETRM platform." },
      { title: "Understand market data", description: "Structure the information behind positions, exposure, and reporting so teams can make better-informed decisions." },
      { title: "Adapt your infrastructure", description: "Modernise applications and cloud platforms to support changing products, markets, and operational requirements." },
    ], services: ["ctrm-consulting", "data-services", "cloud-services"],
  },
  {
    slug: "retail-consumer-markets", title: "Retail & Consumer Markets", description: "Connected experiences for a new generation of consumers.",
    intro: "As consumer behaviour shifts, retail technology needs to adapt. We help businesses connect their digital experiences, operational systems, and data to better understand and serve their customers.",
    image: "/images/retail.webp", imageAlt: "A contemporary retail and consumer environment",
    focus: [
      { title: "Improve customer experiences", description: "Bring customer needs into the design of digital products and connect the experience across channels." },
      { title: "Make data actionable", description: "Create a consistent view of customer, product, and operational information to guide everyday decisions." },
      { title: "Build for demand", description: "Develop applications and cloud infrastructure that can respond to changing demand and new business opportunities." },
    ], services: ["software-engineering", "data-services", "cloud-services"],
  },
];

export const offices = [
  { city: "London", country: "United Kingdom", region: "Europe", address: "145 City Road, London EC1V 1AZ", timeZone: "Europe/London" },
  { city: "Dubai", country: "United Arab Emirates", region: "Middle East", address: "Building A2, Dubai Digital Park, Dubai Silicon Oasis", timeZone: "Asia/Dubai" },
  { city: "Singapore", country: "Singapore", region: "Asia Pacific", address: "160 Robinson Road, Singapore 068895", timeZone: "Asia/Singapore" },
  { city: "Paris", country: "France", region: "Europe", address: "33 Rue La Fayette, 75009 Paris", timeZone: "Europe/Paris" },
  { city: "Chicago", country: "United States", region: "North America", address: "515 N State Street, Chicago, Illinois 60654", timeZone: "America/Chicago" },
  { city: "Pune", country: "India", region: "Asia Pacific", address: "Magarpatta, Pune, Maharashtra", timeZone: "Asia/Kolkata" },
];

export const careersUrl = "https://apply.workable.com/bbgc/?lng=en";
export const companyEmail = "info@bbgcservices.com";
export const companyPhone = "+44 (0) 203 916 5405";
export const enquiryTopics = [...services.map((service) => service.title), "Careers", "Partnerships", "General enquiry"];
