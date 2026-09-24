import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rack & Stack Services in Silicon Valley | FastLink Remote",
  description:
    "Professional server, storage, switch and PDU installation for Silicon Valley data centers. FastLink Remote provides rack and stack services with cabling, labeling, photo documentation and completion reports.",
  keywords: [
    "rack and stack services",
    "rack and stack Silicon Valley",
    "server installation",
    "storage installation",
    "network switch installation",
    "PDU installation",
    "data center installation",
    "San Jose remote hands",
    "Silicon Valley data center support",
    "server rack mounting",
    "cable routing",
    "asset labeling",
  ],
  alternates: {
    canonical: "https://fastlinkremote.com/services/rack-and-stack",
  },
  openGraph: {
    title: "Rack & Stack Services in Silicon Valley | FastLink Remote",
    description:
      "Professional server, storage, switch and PDU installation for Silicon Valley data centers.",
    url: "https://fastlinkremote.com/services/rack-and-stack",
    siteName: "FastLink Remote",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rack & Stack Services in Silicon Valley | FastLink Remote",
    description:
      "Professional server, storage, switch and PDU installation for Silicon Valley data centers.",
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
    title: "Production-grade Installation",
    desc: "Rack mounting, power checks and cabling performed for live data center environments.",
  },
  {
    title: "Experienced Engineers",
    desc: "Local engineers familiar with enterprise servers, storage, switching and power equipment.",
  },
  {
    title: "Photo Documentation",
    desc: "Clear installation photos and notes help remote teams verify completed work.",
  },
  {
    title: "30 Minute Response",
    desc: "Fast coordination for urgent Silicon Valley rack and stack requests.",
  },
];

const rackStackReasons = [
  {
    title: "Local Silicon Valley Engineers",
    desc: "On-site support across major Bay Area data center markets.",
  },
  {
    title: "Fast Response",
    desc: "Responsive scheduling for urgent work and planned deployment windows.",
  },
  {
    title: "Enterprise Documentation",
    desc: "Photos, labels, notes and completion reporting for audit-ready handoff.",
  },
  {
    title: "Production Data Center Experience",
    desc: "Installation practices designed for operational racks and critical systems.",
  },
  {
    title: "Bilingual Communication",
    desc: "Clear English and Chinese communication for global infrastructure teams.",
  },
  {
    title: "Flexible Scheduling",
    desc: "Support for maintenance windows, phased deployments and priority requests.",
  },
];

const includedItems = [
  "Installation",
  "Cable Routing",
  "Asset Labeling",
  "Photo Documentation",
  "Completion Report",
  "Communication Throughout The Project",
];

const servicesIncluded = [
  {
    title: "Server Installation",
    desc: "Rack mounting and production-ready placement for enterprise servers and compute nodes.",
    tasks: [
      "Rail kit inspection and installation",
      "Server lift, mount and alignment",
      "Power and network handoff verification",
    ],
    requested: ["Dell PowerEdge", "Supermicro Servers", "GPU Servers"],
  },
  {
    title: "Storage Installation",
    desc: "Installation support for storage arrays, disk shelves and related rack equipment.",
    tasks: [
      "Rack U position confirmation",
      "Chassis mounting and stabilization",
      "Power path and cable readiness checks",
    ],
    requested: ["SAN Storage", "NAS Appliances", "Disk Shelves"],
  },
  {
    title: "Network Switch Installation",
    desc: "Physical deployment of top-of-rack switches and network appliances.",
    tasks: [
      "Switch mounting and airflow orientation",
      "Fiber and copper patch routing",
      "Port map and link light verification",
    ],
    requested: ["Cisco Switches", "Juniper Switches", "Arista Switches"],
  },
  {
    title: "PDU Installation",
    desc: "Rack PDU installation and power readiness support for redundant deployments.",
    tasks: [
      "Vertical and horizontal PDU mounting",
      "A/B power path organization",
      "Outlet labeling and connection checks",
    ],
    requested: ["APC PDUs", "Vertiv PDUs", "Metered PDUs"],
  },
  {
    title: "Cable Routing",
    desc: "Clean copper, fiber and power routing for maintainable production cabinets.",
    tasks: [
      "Cable path planning",
      "Fiber and copper dressing",
      "Power cable separation and organization",
    ],
    requested: ["Fiber Patching", "Copper Cabling", "Power Cabling"],
  },
  {
    title: "Asset Labeling",
    desc: "Clear identification of equipment, cables and power paths for remote operations.",
    tasks: [
      "Asset tag placement",
      "Cable label installation",
      "Serial number and rack position capture",
    ],
    requested: ["Asset Labels", "Cable Labels", "Rack Position Records"],
  },
];

const processSteps = [
  {
    title: "Equipment Receiving",
    desc: "Hardware, accessories and packing lists are checked before scheduled installation.",
  },
  {
    title: "Rack Preparation",
    desc: "Rack U positions, rails, power paths and cable routes are confirmed before mounting.",
  },
  {
    title: "Installation",
    desc: "Servers, storage, switches and PDUs are installed according to project instructions.",
  },
  {
    title: "Cabling",
    desc: "Power, network and management cables are routed, dressed and labeled.",
  },
  {
    title: "Verification",
    desc: "Engineers verify placement, power, link status and visual installation quality.",
  },
  {
    title: "Completion Report",
    desc: "Photos, notes, exceptions and completion details are shared with your team.",
  },
];

const supportedBrands = [
  "Dell",
  "Supermicro",
  "Cisco",
  "Juniper",
  "Arista",
  "NVIDIA",
  "APC",
  "Vertiv",
];

const installationStandards = [
  "Rack U position verification",
  "Rail alignment inspection",
  "Power redundancy verification",
  "Network link verification",
  "Cable labeling",
  "Photo documentation",
];

const deliverables = [
  "Installation photos",
  "Asset labels",
  "Cabling photos",
  "Completion report",
  "Notes",
  "Exception report (if applicable)",
];

const faqs = [
  {
    q: "What information do you need before a rack and stack project?",
    a: "We typically need the data center location, access requirements, equipment list, rack elevations, power requirements, port maps, labeling standards and the requested installation window.",
  },
  {
    q: "Can you install customer-supplied servers and network equipment?",
    a: "Yes. We install customer-supplied servers, storage systems, network switches, PDUs, optics, cables and approved accessories according to your instructions.",
  },
  {
    q: "Do you provide photo documentation after installation?",
    a: "Yes. Rack and stack work can include installation photos, cable photos, asset labels, rack position records and completion notes for remote verification.",
  },
  {
    q: "Can you support emergency installation requests?",
    a: "Yes. Emergency and priority rack and stack support is available throughout our Silicon Valley coverage area, subject to access approval and equipment readiness.",
  },
  {
    q: "Do you verify redundant power connections?",
    a: "Yes. Engineers can verify A/B power path organization, PDU outlet placement and basic power readiness based on the project instructions provided.",
  },
  {
    q: "Can you label cables and assets during installation?",
    a: "Yes. We can apply customer-provided labels or follow a documented labeling convention for equipment, cables, ports and rack positions.",
  },
  {
    q: "Do you support GPU server installation?",
    a: "Yes. We support physical installation of GPU servers and high-density compute equipment, including rack placement, power routing and documentation.",
  },
  {
    q: "What does the completion report include?",
    a: "Completion reports can include photos, rack positions, asset details, cabling notes, completed tasks and any exceptions discovered during the work.",
  },
];

const relatedResources = [
  {
    title: "GPU Deployment Best Practices",
    href: "/blog/gpu-deployment-best-practices",
  },
  {
    title: "Receiving & Shipping Checklist",
    href: "/blog/receiving-shipping-checklist",
  },
  {
    title: "Remote Hands vs Smart Hands",
    href: "/blog/remote-hands-vs-smart-hands",
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

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-400">
        {desc}
      </p>
    </div>
  );
}

export default function RackAndStackPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <section className="relative border-b border-cyan-400/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00d9ff22,transparent_34%),radial-gradient(circle_at_bottom_right,#155e7526,transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-32">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-300">
              RACK & STACK SERVICES
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Rack & Stack Services
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300 md:text-2xl md:leading-10">
              Professional server, storage, switch and PDU installation for
              Silicon Valley data centers.
            </p>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-cyan-200">
              Production-ready rack installation, cable routing, asset labeling
              and completion reporting for remote infrastructure teams.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-black shadow-[0_0_36px_#00d9ff33] transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Request Service
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-cyan-400/25 px-8 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-300"
              >
                Contact Us
              </a>
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
                  Production-ready installation for enterprise data center
                  environments.
                </h2>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-cyan-400/10 bg-black/25 p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
                  >
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-2xl font-black text-cyan-300">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Why FastLink Remote"
            title="Built for production rack deployments"
            desc="FastLink Remote combines local data center access, precise documentation and experienced engineers for enterprise rack and stack work."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/75 p-7 shadow-[0_18px_70px_#00000026] transition hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-[#0e1730]"
              >
                <div className="h-1.5 w-12 rounded-full bg-cyan-400" />
                <h3 className="mt-7 text-2xl font-black">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10 bg-[#081127]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Why Choose FastLink Remote for Rack & Stack"
            title="Local execution with enterprise reporting"
            desc="Our team supports both urgent installations and planned rollouts with clear communication from request through completion."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rackStackReasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/75 p-7 transition hover:-translate-y-1 hover:border-cyan-400/35"
              >
                <h3 className="text-2xl font-black text-cyan-300">
                  {reason.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {reason.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="What's Included"
            title="Every Rack & Stack project includes"
            desc="Core execution, documentation and communication are built into the workflow so remote teams stay informed."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-3xl border border-cyan-400/10 bg-[#0b1229]/75 p-6 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400/35 hover:bg-[#0e1730]"
              >
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeading
            eyebrow="Services Included"
            title="Installation support for the full rack"
            desc="From rail kits to final cabling photos, each service is scoped for practical data center execution."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {servicesIncluded.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-7 shadow-[0_24px_90px_#00000030] transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_28px_110px_#00d9ff14]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <ServiceIcon />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  {service.title}
                </h3>
                <p className="mt-4 min-h-24 leading-8 text-gray-400">
                  {service.desc}
                </p>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                    Typical Tasks
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {service.tasks.map((task) => (
                      <li
                        key={task}
                        className="flex gap-3 text-sm leading-6 text-gray-300"
                      >
                        <CheckIcon />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 rounded-2xl border border-cyan-400/10 bg-black/20 p-5">
                  <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                    Most Requested
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {service.requested.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-gray-300"
                      >
                        <CheckIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className="mt-7 inline-flex items-center font-bold text-cyan-300 transition group-hover:text-cyan-200"
                >
                  Learn More <span className="ml-2">-&gt;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10 bg-[#081127]">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <SectionHeading
            eyebrow="Deployment Process"
            title="A clear installation path from receiving to report"
            desc="Each step is structured to keep remote infrastructure teams aligned before, during and after the work."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/75 p-7 transition hover:-translate-y-1 hover:border-cyan-400/35"
              >
                <div className="text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-2xl font-black">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {step.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-28 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-cyan-400/15 bg-[#0b1229]/80 p-8 shadow-[0_24px_90px_#00000030] md:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Installation Standards
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Built around verification and clean handoff
            </h2>
            <p className="mt-6 leading-8 text-gray-400">
              Our installation checklist helps keep rack work consistent,
              documented and ready for production operations.
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
          </div>

          <div className="rounded-[2rem] border border-cyan-400/15 bg-[#0b1229]/80 p-8 shadow-[0_24px_90px_#00000030] md:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Deliverables
            </div>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              What your team receives after completion
            </h2>
            <p className="mt-6 leading-8 text-gray-400">
              Completion artifacts help remote teams verify the work without
              needing to be physically present at the facility.
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
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10 bg-[#081127]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Supported Equipment"
            title="Enterprise hardware vendor experience"
            desc="We regularly install and maintain equipment from leading enterprise vendors."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {supportedBrands.map((brand) => (
              <div
                key={brand}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/75 p-7 text-center text-xl font-black text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-400/35 hover:text-cyan-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10">
        <div className="mx-auto max-w-5xl px-6 py-28">
          <SectionHeading
            eyebrow="FAQ"
            title="Rack and stack questions, answered"
            desc="Practical answers for planning installation scope, access, cabling, documentation and completion reporting."
          />

          <div className="mt-16 space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl border border-cyan-400/10 bg-[#0b1229]/85 p-6 transition open:border-cyan-400/30 open:bg-[#0e1730]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-black text-white">
                  {faq.q}
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-cyan-400/20 text-cyan-300 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-6 max-w-3xl leading-8 text-gray-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-cyan-400/10 bg-[#081127]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Related Resources"
            title="Plan your next data center deployment"
            desc="Helpful resources for deployment planning, logistics and Remote Hands workflows."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {relatedResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/75 p-6 font-bold text-white transition hover:-translate-y-1 hover:border-cyan-400/35 hover:text-cyan-300"
              >
                {resource.title}
                <span className="mt-5 block text-cyan-300">-&gt;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <div className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,#00d9ff1f,transparent_38%),#0b1229] px-6 py-16 shadow-[0_30px_100px_#00d9ff12] md:px-12">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Ready to Deploy Your Equipment?
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              FastLink Remote provides professional rack and stack support for
              servers, storage, switches, PDUs and production data center
              deployments.
            </p>
            <p className="mt-5 text-lg font-bold text-cyan-300">
              Typical response within 30 minutes.
            </p>
            <a
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-9 py-4 font-bold text-black shadow-[0_0_36px_#00d9ff33] transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Request Rack & Stack Service
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
