import type { Metadata } from "next";
import {
  ButtonLink,
  Container,
  ContentCard,
  CtaSection,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/app/components/DesignSystem";

export const metadata: Metadata = {
  title: "GPU Deployment Services in Silicon Valley | FastLink Remote",
  description:
    "Professional GPU server deployment, rack installation, power verification and structured cabling services for AI infrastructure across Silicon Valley data centers.",
  keywords: [
    "GPU Deployment",
    "GPU Server Installation",
    "AI Server Deployment",
    "H100 Deployment",
    "HGX Installation",
    "GPU Rack Installation",
    "GPU deployment services",
    "GPU server installation Silicon Valley",
    "AI infrastructure deployment",
    "NVIDIA HGX deployment",
    "data center GPU installation",
    "Silicon Valley data center support",
  ],
  alternates: {
    canonical: "https://fastlinkremote.com/services/gpu-deployment",
  },
  openGraph: {
    title: "GPU Deployment Services in Silicon Valley | FastLink Remote",
    description:
      "Professional GPU server deployment, rack installation, power verification and structured cabling services for AI infrastructure.",
    url: "https://fastlinkremote.com/services/gpu-deployment",
    siteName: "FastLink Remote",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPU Deployment Services in Silicon Valley | FastLink Remote",
    description:
      "Professional GPU server deployment, rack installation, power verification and structured cabling services for AI infrastructure.",
  },
};

const heroStats = [
  { label: "Typical Response", value: "30 Minutes" },
  { label: "Coverage", value: "Silicon Valley" },
  { label: "Emergency Support", value: "24/7" },
  { label: "Photo Documentation", value: "Included" },
];

const advantages = [
  {
    title: "AI Infrastructure Experience",
    desc: "Deployment support for GPU servers, AI racks and production compute environments.",
  },
  {
    title: "High-density Power Verification",
    desc: "A/B power path organization and power readiness checks for dense GPU systems.",
  },
  {
    title: "Photo Documentation",
    desc: "Clear rack, cabling and equipment photos help remote teams verify completed work.",
  },
  {
    title: "30 Minute Response",
    desc: "Fast coordination for urgent GPU deployment requests across Silicon Valley.",
  },
];

const gpuReasons = [
  {
    title: "Local Silicon Valley Engineers",
    desc: "On-site support across major Bay Area data center markets.",
  },
  {
    title: "GPU Rack Experience",
    desc: "Hands-on experience with high-density AI servers, rails, airflow and rack placement.",
  },
  {
    title: "Structured Cabling",
    desc: "Clean copper, fiber, management and power routing for maintainable GPU racks.",
  },
  {
    title: "Power Verification",
    desc: "Power path checks help confirm GPU systems are ready for production handoff.",
  },
  {
    title: "Documentation",
    desc: "Photos, labels, notes and completion reporting for audit-ready delivery.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Support for maintenance windows, phased deployments and priority requests.",
  },
];

const includedItems = [
  "GPU Installation",
  "Rack Mounting",
  "Power Verification",
  "Network Cabling",
  "Asset Labeling",
  "Completion Report",
];

const servicesIncluded = [
  {
    title: "GPU Server Installation",
    desc: "Physical installation and rack placement for enterprise GPU servers and AI compute nodes.",
    tasks: [
      "Rail kit inspection and installation",
      "GPU server lift, mount and alignment",
      "Power and management handoff verification",
    ],
    requested: ["H100 Servers", "HGX Systems", "Supermicro GPU Servers"],
  },
  {
    title: "AI Rack Deployment",
    desc: "Structured deployment support for full AI racks and high-density compute cabinets.",
    tasks: [
      "Rack U position confirmation",
      "Airflow and clearance review",
      "Phased installation coordination",
    ],
    requested: ["AI Training Racks", "Inference Racks", "GPU Clusters"],
  },
  {
    title: "Power Path Verification",
    desc: "A/B power organization and readiness checks for redundant GPU infrastructure.",
    tasks: [
      "PDU outlet mapping",
      "A/B power path organization",
      "Power cable placement checks",
    ],
    requested: ["APC PDUs", "Vertiv PDUs", "High-density Power"],
  },
  {
    title: "High-density Cabling",
    desc: "Clean fiber, copper, management and power cabling for production AI environments.",
    tasks: [
      "Cable path planning",
      "Fiber and copper dressing",
      "Management and data cable routing",
    ],
    requested: ["InfiniBand Cabling", "Fiber Patching", "Management Cabling"],
  },
  {
    title: "Labeling & Documentation",
    desc: "Clear asset, cable and rack labeling with records for remote operations teams.",
    tasks: [
      "Asset tag placement",
      "Cable label installation",
      "Serial number and rack position capture",
    ],
    requested: ["Asset Labels", "Cable Labels", "Rack Position Records"],
  },
  {
    title: "Post-installation Verification",
    desc: "Final visual inspection and handoff documentation after GPU systems are installed.",
    tasks: [
      "GPU seating inspection",
      "Link light and management checks",
      "Completion photos and exception notes",
    ],
    requested: ["Photo Reports", "Exception Reports", "Remote Handoff"],
  },
];

const processSteps = [
  {
    title: "Equipment Receiving",
    desc: "GPU servers, accessories and packing lists are checked before scheduled deployment.",
  },
  {
    title: "Rack Preparation",
    desc: "Rack U positions, rails, airflow, power paths and cable routes are confirmed.",
  },
  {
    title: "GPU Installation",
    desc: "GPU servers and AI systems are mounted according to project instructions.",
  },
  {
    title: "Cabling",
    desc: "Power, network, management and high-speed cables are routed, dressed and labeled.",
  },
  {
    title: "Verification",
    desc: "Engineers verify placement, power paths, link status and visual installation quality.",
  },
  {
    title: "Completion Report",
    desc: "Photos, notes, exceptions and completion details are shared with your team.",
  },
];

const installationStandards = [
  "Power redundancy verification",
  "GPU seating inspection",
  "PCIe verification",
  "Network connectivity verification",
  "Cable routing standards",
  "Photo documentation",
];

const supportedPlatforms = [
  "NVIDIA HGX",
  "NVIDIA DGX",
  "Dell XE9680",
  "Supermicro GPU Servers",
  "Cisco Nexus",
  "Arista",
  "APC",
  "Vertiv",
];

const deliverables = [
  "Installation Photos",
  "Rack Photos",
  "Cable Photos",
  "Asset Labels",
  "Completion Report",
  "Exception Report",
];

const faqs = [
  {
    q: "Can you install customer supplied GPU servers?",
    a: "Yes. We install customer-supplied GPU servers, rails, optics, cables and approved accessories according to your rack elevation, cabling plan and deployment instructions.",
  },
  {
    q: "Do you deploy NVIDIA HGX systems?",
    a: "Yes. We support physical installation and cabling workflows for NVIDIA HGX-based systems, including rack placement, power organization and completion documentation.",
  },
  {
    q: "Do you verify power redundancy?",
    a: "Yes. Engineers can verify A/B power path organization, PDU outlet placement and power cabling against the project instructions provided.",
  },
  {
    q: "Do you support InfiniBand?",
    a: "Yes. We can route, dress and label InfiniBand cabling for AI infrastructure deployments when port maps, cable plans and required materials are provided.",
  },
  {
    q: "Can you install liquid-cooled GPU servers?",
    a: "We can support physical placement and documented installation tasks for liquid-cooled GPU servers when the facility requirements, handling instructions and approved procedures are defined in advance.",
  },
  {
    q: "Do you provide photo documentation?",
    a: "Yes. GPU deployment work can include rack photos, equipment photos, cable photos, asset labels and completion notes for remote verification.",
  },
  {
    q: "Can you deploy during maintenance windows?",
    a: "Yes. We support scheduled maintenance windows, phased deployments and priority requests across our Silicon Valley coverage area, subject to access approval and equipment readiness.",
  },
  {
    q: "What is included in the completion report?",
    a: "Completion reports can include installation photos, rack positions, asset details, cabling notes, completed tasks and any exceptions discovered during the work.",
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
        d="M5 4h14a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3 9h18v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M7 14h5M7 17h10M17 6h.01"
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
      className="mt-1 h-4 w-4 flex-none text-cyan-300"
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

export default function GpuDeploymentPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-page text-primary-text">
      <section className="relative border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00d9ff22,transparent_34%),radial-gradient(circle_at_bottom_right,#155e7526,transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <Container className="relative grid gap-14 py-section lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <Eyebrow className="inline-flex items-center rounded-full border border-brand/20 bg-brand/10 px-5 py-2">
              GPU DEPLOYMENT SERVICES
            </Eyebrow>

            <h1 className="mt-8 max-w-5xl text-heading-1 font-extrabold tracking-[var(--type-heading-letter-spacing)]">
              GPU Deployment Services
            </h1>

            <p className="mt-8 max-w-reading text-body-large text-secondary-text">
              Professional GPU server deployment, rack installation, power
              verification and structured cabling services for AI infrastructure
              across Silicon Valley data centers.
            </p>

            <p className="mt-5 max-w-2xl text-body-large font-semibold text-accent">
              Enterprise GPU deployment for AI companies, GPU hosting providers,
              LLM startups and enterprise AI teams.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink
                href="/contact"
              >
                Request GPU Deployment
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
                  Deployment Summary
                </div>
                <h2 className="mt-3 text-3xl font-black">
                  Enterprise GPU deployment for production AI environments.
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
          title="Built for production AI infrastructure"
          description="FastLink Remote combines local data center access, GPU deployment experience and precise documentation for enterprise AI infrastructure."
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

      <Section tone="alternate">
        <SectionHeading
          eyebrow="Why Choose FastLink Remote for GPU Deployment"
          title="Local execution with enterprise reporting"
          description="Our team supports urgent GPU installs and planned AI rollouts with clear communication from request through completion."
        />

        <div className="mt-16 grid gap-grid md:grid-cols-2 lg:grid-cols-3">
          {gpuReasons.map((reason) => (
            <ContentCard key={reason.title} interactive>
              <h3 className="text-heading-3 font-extrabold text-accent">
                {reason.title}
              </h3>
              <p className="mt-4 text-muted-text">{reason.desc}</p>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What's Included"
          title="Every GPU Deployment includes"
          description="Core installation, verification, labeling and reporting are built into the workflow so remote AI teams stay informed."
        />

        <div className="mt-14 grid gap-grid md:grid-cols-2 lg:grid-cols-3">
          {includedItems.map((item) => (
            <ContentCard
              key={item}
              className="flex items-center gap-4 p-6 font-bold"
              interactive
            >
              <CheckIcon />
              <span>{item}</span>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services Included"
          title="Deployment support for AI compute environments"
          description="From GPU rail kits to final cabling photos, each service is scoped for practical data center execution."
        />

        <div className="mt-16 grid gap-grid lg:grid-cols-3">
          {servicesIncluded.map((service) => (
            <ContentCard
              key={service.title}
              className="group relative overflow-hidden"
              interactive
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="flex h-14 w-14 items-center justify-center rounded-control border border-brand/20 bg-brand/10 text-accent">
                <ServiceIcon />
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
                href="/contact"
                variant="secondary"
                className="mt-7 min-h-0 border-0 p-0 focus-visible:ring-offset-surface"
              >
                Learn More <span className="ml-2">-&gt;</span>
              </ButtonLink>
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section tone="alternate">
        <SectionHeading
          eyebrow="Deployment Process"
          title="A clear GPU deployment path from receiving to report"
          description="Each step is structured to keep AI infrastructure teams aligned before, during and after installation."
        />

        <div className="mt-16 grid gap-grid md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <ContentCard key={step.title} interactive>
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

      <Section innerClassName="grid gap-grid lg:grid-cols-2">
          <ContentCard className="p-8 md:p-10">
            <Eyebrow>
              Installation Standards
            </Eyebrow>
            <h2 className="mt-5 text-heading-2 font-extrabold tracking-[var(--type-heading-letter-spacing)]">
              Built around verification and clean handoff
            </h2>
            <p className="mt-6 text-muted-text">
              Our GPU deployment checklist helps keep high-density AI rack work
              consistent, documented and ready for production operations.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {installationStandards.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-cyan-400/10 bg-black/20 p-4 text-sm leading-6 text-gray-300"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ContentCard>

          <ContentCard className="p-8 md:p-10">
            <Eyebrow>
              Deliverables
            </Eyebrow>
            <h2 className="mt-5 text-heading-2 font-extrabold tracking-[var(--type-heading-letter-spacing)]">
              What your team receives after completion
            </h2>
            <p className="mt-6 text-muted-text">
              Completion artifacts help remote AI teams verify installation
              quality without needing to be physically present at the facility.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-cyan-400/10 bg-black/20 p-4 text-sm leading-6 text-gray-300"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ContentCard>
      </Section>

      <Section tone="alternate">
        <SectionHeading
          eyebrow="Supported GPU Platforms"
          title="Enterprise AI hardware experience"
          description="We support deployment workflows for leading GPU platforms, network vendors and power infrastructure used in production AI environments."
        />

        <div className="mt-14 grid gap-grid sm:grid-cols-2 md:grid-cols-4">
          {supportedPlatforms.map((platform) => (
            <ContentCard
              key={platform}
              className="p-7 text-center text-heading-4 font-extrabold text-primary-text"
              interactive
            >
              {platform}
            </ContentCard>
          ))}
        </div>
      </Section>

      <Section width="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title="GPU deployment questions, answered"
          description="Practical answers for planning AI server installation, power verification, high-speed cabling, documentation and completion reporting."
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
      </Section>

      <CtaSection
        title="Ready to Deploy Your GPU Infrastructure?"
        description="FastLink Remote provides professional GPU deployment support for AI servers, high-density racks, structured cabling and production data center handoff."
        supplemental="Typical response within 30 minutes."
        actions={
          <ButtonLink href="/contact">Request GPU Deployment</ButtonLink>
        }
      />
    </main>
  );
}
