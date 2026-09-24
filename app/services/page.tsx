import {
  ButtonLink,
  Container,
  ContentCard,
  CtaSection,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/app/components/DesignSystem";

export const metadata = {
  title: "Remote Hands & Smart Hands Services | FastLink Remote",
  description:
    "Professional Remote Hands and Smart Hands services for Silicon Valley data centers. Rack & Stack, GPU deployment, hardware replacement, receiving & shipping, cable management and emergency support.",
  keywords: [
    "remote hands services",
    "smart hands services",
    "Silicon Valley data center support",
    "San Jose remote hands",
    "Santa Clara data center support",
    "rack and stack services",
    "GPU deployment services",
    "hardware replacement",
    "receiving and shipping",
    "cable management",
    "server troubleshooting",
    "emergency remote hands",
    "AI infrastructure support",
    "colocation support",
  ],
  alternates: {
    canonical: "https://fastlinkremote.com/services",
  },
  openGraph: {
    title: "Remote Hands & Smart Hands Services | FastLink Remote",
    description:
      "Professional Remote Hands and Smart Hands services for Silicon Valley data centers.",
    url: "https://fastlinkremote.com/services",
    siteName: "FastLink Remote",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remote Hands & Smart Hands Services | FastLink Remote",
    description:
      "Professional Remote Hands and Smart Hands services for Silicon Valley data centers.",
  },
};

const heroStats = [
  { label: "Response", value: "30 min" },
  { label: "Coverage", value: "Silicon Valley" },
  { label: "Availability", value: "24/7" },
  { label: "Support", value: "CN / EN" },
  { label: "Completed Tasks", value: "100+" },
];

const advantages = [
  {
    title: "24/7 Emergency Support",
    desc: "Urgent on-site assistance for outages, failed hardware and time-sensitive requests.",
  },
  {
    title: "30 Minute Response",
    desc: "Fast coordination for Silicon Valley facilities when every minute matters.",
  },
  {
    title: "Silicon Valley Coverage",
    desc: "Local engineers supporting major data center campuses across the Bay Area.",
  },
  {
    title: "Bilingual CN / EN Engineers",
    desc: "Clear English and Chinese communication for global infrastructure teams.",
  },
];

const services = [
  {
    title: "Rack & Stack",
    href: "/services/rack-and-stack",
    badge: "Typical Response: 30 Minutes",
    desc: "Professional server, switch, storage and PDU installation for production data center environments.",
    tasks: [
      "Rack mounting and rail installation",
      "Power and network cable routing",
      "Asset labeling and photo documentation",
    ],
    requested: [
      "New cabinet deployment",
      "Server installation",
      "Network equipment installation",
    ],
  },
  {
    title: "GPU Deployment",
    href: "/services/gpu-deployment",
    badge: "AI Infrastructure Ready",
    desc: "Physical deployment support for GPU servers, AI clusters and high-density compute infrastructure.",
    tasks: [
      "GPU server installation",
      "Power path and cable verification",
      "Deployment readiness checks",
    ],
    requested: [
      "AI server rack installation",
      "High-density power checks",
      "Cluster cabling support",
    ],
  },
  {
    title: "Receiving & Shipping",
    href: "/contact",
    cta: "Request Service",
    badge: "Logistics Support",
    desc: "Local receiving, inspection, inventory and outbound shipping coordination for remote teams.",
    tasks: [
      "Shipment receiving and inspection",
      "Inventory verification",
      "Packaging and return coordination",
    ],
    requested: [
      "Hardware receiving",
      "Damage inspection photos",
      "Return shipment preparation",
    ],
  },
  {
    title: "Hardware Replacement",
    href: "/contact",
    cta: "Request Service",
    badge: "Emergency Available",
    desc: "On-site replacement of failed or upgraded components with verification and reporting.",
    tasks: [
      "SSD, HDD and memory replacement",
      "PSU, NIC and component swaps",
      "Post-replacement verification",
    ],
    requested: [
      "Drive replacement",
      "Memory upgrades",
      "Failed power supply swaps",
    ],
  },
  {
    title: "Server Troubleshooting",
    href: "/contact",
    cta: "Request Service",
    badge: "24/7 Available",
    desc: "Remote-guided diagnostics for server power, boot, network and hardware issues.",
    tasks: [
      "Power and boot diagnostics",
      "Network link verification",
      "Hardware failure isolation",
    ],
    requested: [
      "Server not powering on",
      "Network link down",
      "Failed component isolation",
    ],
  },
  {
    title: "Cable Management",
    href: "/contact",
    cta: "Request Service",
    badge: "Clean Deployment",
    desc: "Structured fiber and copper cabling services for reliable, maintainable deployments.",
    tasks: [
      "Fiber and copper cable routing",
      "Labeling and port mapping",
      "Rack cleanup and documentation",
    ],
    requested: [
      "Cabinet recabling",
      "Fiber patching",
      "Cable labeling cleanup",
    ],
  },
];

const processSteps = [
  {
    title: "Request",
    desc: "Submit the task, location, access requirements and service window.",
  },
  {
    title: "Schedule",
    desc: "We confirm scope, timing, materials and engineer availability.",
  },
  {
    title: "Engineer On-site",
    desc: "A local engineer performs the work with live communication as needed.",
  },
  {
    title: "Completion Report",
    desc: "Receive photos, notes, asset details and task completion confirmation.",
  },
];

const industries = [
  {
    title: "Cloud Providers",
    desc: "Deployment, migration and maintenance for cloud infrastructure.",
  },
  {
    title: "AI Companies",
    desc: "GPU server deployment and physical support for AI infrastructure.",
  },
  {
    title: "Enterprise IT",
    desc: "On-site support for enterprise production systems.",
  },
  {
    title: "Colocation Customers",
    desc: "Remote Hands and Smart Hands support for colocated environments.",
  },
  {
    title: "Financial Services",
    desc: "Mission-critical infrastructure support for financial institutions.",
  },
];

const faqs = [
  {
    q: "What is Remote Hands?",
    a: "Remote Hands provides on-site data center assistance when your team cannot be physically present. Common tasks include equipment installation, cable checks, power cycling, inventory verification and visual inspection.",
  },
  {
    q: "How quickly can an engineer arrive?",
    a: "For urgent requests within our Silicon Valley coverage area, typical response is within 30 minutes after scope, access and site requirements are confirmed.",
  },
  {
    q: "Which data centers do you support?",
    a: "We support major facilities throughout San Jose, Santa Clara, Sunnyvale, Milpitas, Fremont and Newark, including colocation, enterprise and AI infrastructure environments.",
  },
  {
    q: "Can you install customer supplied hardware?",
    a: "Yes. We can install customer-supplied servers, switches, storage, GPUs, optics, drives, memory, power supplies and other approved components according to your instructions.",
  },
  {
    q: "Do you provide emergency support?",
    a: "Yes. 24/7 emergency Remote Hands support is available for urgent incidents, failed hardware, power issues, network link checks and time-sensitive troubleshooting.",
  },
  {
    q: "Can you receive and store hardware before installation?",
    a: "Yes. We can receive customer-supplied hardware, inspect packaging, verify inventory, photograph equipment and stage assets before scheduled installation. Short-term storage and deployment coordination can be arranged based on the site and project requirements.",
  },
];

const coverageCities = [
  "San Jose",
  "Santa Clara",
  "Sunnyvale",
  "Milpitas",
  "Fremont",
  "Newark",
];

const relatedResources = [
  {
    title: "Remote Hands vs Smart Hands",
    href: "/blog/remote-hands-vs-smart-hands",
  },
  {
    title: "GPU Deployment Best Practices",
    href: "/blog/gpu-deployment-best-practices",
  },
  {
    title: "Receiving & Shipping Checklist",
    href: "/blog/receiving-shipping-checklist",
  },
  {
    title: "Choosing a Remote Hands Provider",
    href: "/blog/choosing-remote-hands-provider",
  },
];

function ServiceIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
    >
      <path
        d="M6 4h12a2 2 0 0 1 2 2v3H4V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 14h4M8 17h8M16 6h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-1 h-4 w-4 flex-none text-accent"
      fill="none"
    >
      <path
        d="m4.5 10.5 3.2 3.2 7.8-8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-page text-primary-text">
      <section className="relative border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00d9ff22,transparent_34%),radial-gradient(circle_at_bottom_right,#155e7526,transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <Container className="relative grid gap-14 py-section lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Eyebrow className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-5 py-2">
              FASTLINK REMOTE SERVICES
            </Eyebrow>

            <h1 className="mt-8 max-w-5xl text-heading-1 font-extrabold tracking-[var(--type-heading-letter-spacing)]">
              Remote Hands & Smart Hands Services
            </h1>

            <p className="mt-8 max-w-reading text-body-large text-secondary-text">
              Professional on-site support for Silicon Valley data centers,
              helping global teams deploy, maintain and troubleshoot critical
              infrastructure without sending staff on-site.
            </p>

            <p className="mt-5 max-w-2xl text-body-large font-semibold text-accent">
              Serving customers worldwide, with local engineers throughout
              Silicon Valley.
            </p>

            <p className="mt-5 max-w-2xl text-body text-muted-text">
              Trusted by AI Infrastructure, Colocation and Enterprise IT Teams.
            </p>

            <ContentCard className="mt-8 p-6">
              <p className="text-label font-semibold uppercase tracking-[var(--type-label-letter-spacing)] text-accent">
                Supporting major Silicon Valley data centers including:
              </p>
              <p className="mt-4 text-body-large text-secondary-text">
                Equinix &middot; Digital Realty &middot; QTS &middot; CoreSite
                &middot; Vantage &middot; Aligned
              </p>
            </ContentCard>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact">
                Request Service
              </ButtonLink>

              <ButtonLink
                href="/contact"
                variant="secondary"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-cyan-400/20 bg-[#0b1229]/85 p-6 shadow-[0_30px_100px_#00d9ff14] backdrop-blur-xl md:p-8">
              <div className="border-b border-white/10 pb-6">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Service Readiness
                </div>
                <h2 className="mt-3 text-3xl font-black">
                  Local data center engineers for urgent and planned work.
                </h2>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <ContentCard
                    key={stat.label}
                    className="rounded-control bg-black/25 p-5 shadow-none"
                    interactive
                  >
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-2xl font-black text-cyan-300">
                      {stat.value}
                    </div>
                  </ContentCard>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Why FastLink Remote"
          title="Built for critical infrastructure work"
          description="Fast response, local coverage and precise communication for teams operating production data center environments."
        />

        <div className="mt-16 grid gap-grid md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <ContentCard key={item.title} interactive>
              <div className="h-1.5 w-12 rounded-full bg-brand" />
              <h3 className="mt-7 text-heading-3 font-extrabold">
                {item.title}
              </h3>
              <p className="mt-4 text-muted-text">{item.desc}</p>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="Remote Hands and Smart Hands support"
          description="Enterprise-grade on-site services for deployment, maintenance, logistics and troubleshooting across Silicon Valley data centers."
        />

        <div className="mt-16 grid gap-grid lg:grid-cols-3">
          {services.map((service) => (
            <ContentCard
              key={service.title}
              className="group relative overflow-hidden"
              interactive
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-control border border-brand/20 bg-brand/10 text-accent">
                  <ServiceIcon />
                </div>
                <div className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-bold text-accent">
                  {service.badge}
                </div>
              </div>

              <h3 className="mt-7 text-heading-3 font-extrabold">
                {service.title}
              </h3>
              <p className="mt-4 min-h-24 text-muted-text">{service.desc}</p>

              <div className="mt-7 border-t border-white/10 pt-6">
                <h4 className="text-label font-bold uppercase tracking-[var(--type-label-letter-spacing)] text-accent">
                  Typical Tasks
                </h4>
                <ul className="mt-4 space-y-3">
                  {service.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex gap-3 text-body-small text-secondary-text"
                    >
                      <CheckIcon />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 rounded-control border border-border bg-black/20 p-5">
                <h4 className="text-label font-bold uppercase tracking-[var(--type-label-letter-spacing)]">
                  Most Requested
                </h4>
                <ul className="mt-4 space-y-3">
                  {service.requested.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-body-small text-secondary-text"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ButtonLink
                href={service.href}
                variant="secondary"
                className="mt-7 min-h-0 border-0 p-0 focus-visible:ring-offset-surface"
              >
                {service.cta ?? "Learn More"}{" "}
                <span className="ml-2">-&gt;</span>
              </ButtonLink>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section tone="alternate">
        <SectionHeading
          eyebrow="Service Process"
          title="A clear path from request to completion"
          description="Every task is scoped, scheduled, executed and documented so remote teams stay informed from start to finish."
        />

        <div className="mt-16 grid gap-grid lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <ContentCard key={step.title}>
              <div className="text-label font-extrabold text-accent">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 text-heading-3 font-extrabold">
                {step.title}
              </h3>
              <p className="mt-4 text-muted-text">{step.desc}</p>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Supporting teams that cannot afford downtime"
          description="FastLink Remote serves infrastructure teams that need accurate on-site work, clean reporting and responsive communication."
        />

        <div className="mt-16 grid gap-grid md:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry) => (
            <ContentCard key={industry.title} interactive>
              <h3 className="text-heading-4 font-extrabold text-accent">
                {industry.title}
              </h3>
              <p className="mt-4 text-muted-text">{industry.desc}</p>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section tone="alternate" width="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="Remote Hands questions, answered"
          description="Practical answers for planning data center support, deployments, logistics and emergency tasks."
        />

        <div className="mt-16 space-y-5">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-card border border-border bg-surface p-6 transition open:border-brand/30 open:bg-surface-elevated"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-heading-4 font-extrabold">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-brand/20 text-accent transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-6 max-w-reading text-muted-text">{faq.a}</p>
            </details>
          ))}
        </div>

        <ContentCard className="mt-12 bg-brand/10 p-8 text-center">
          <h3 className="text-heading-3 font-extrabold">
            Still have questions?
          </h3>
          <p className="mt-4 text-secondary-text">
            Contact our engineers today.
          </p>
          <ButtonLink href="/contact" variant="secondary" className="mt-6">
            Contact Us <span className="ml-2">-&gt;</span>
          </ButtonLink>
        </ContentCard>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Coverage"
          title="Serving Major Silicon Valley Data Centers"
          description="Local support across the core Bay Area data center markets for planned work and urgent response."
        />

        <div className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-4">
          {coverageCities.map((city) => (
            <div
              key={city}
              className="rounded-full border border-brand/20 bg-brand/10 px-6 py-3 font-bold text-primary-text"
            >
              {city}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alternate">
        <SectionHeading
          eyebrow="Related Resources"
          title="Plan your next data center task"
          description="Helpful resources for deployment planning, logistics checklists and Remote Hands workflows."
        />

        <div className="mt-14 grid gap-grid md:grid-cols-2 lg:grid-cols-4">
          {relatedResources.map((resource) => (
            <ButtonLink
              key={resource.title}
              href={resource.href}
              variant="secondary"
              className="min-h-0 items-start justify-between rounded-card bg-surface p-6 text-left shadow-card"
            >
              <span>{resource.title}</span>
              <span className="ml-4 text-accent">-&gt;</span>
            </ButtonLink>
          ))}
        </div>
      </Section>

      <CtaSection
        title="Need Remote Hands Today?"
        description="FastLink Remote provides responsive on-site support for urgent data center tasks, planned deployments and infrastructure maintenance."
        supplemental="Typical response within 30 minutes."
        actions={<ButtonLink href="/contact">Request Remote Hands</ButtonLink>}
      />
    </main>
  );
}
