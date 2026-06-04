export default function ServicesPage() {

  const services = [
    {
      title: "Rack & Stack",
      desc: "Professional installation, mounting and deployment of servers, switches and storage equipment.",
      icon: "🗄️",
    },

    {
      title: "Receiving & Shipping",
      desc: "Receive, inspect, photograph, inventory and ship equipment worldwide.",
      icon: "📦",
    },

    {
      title: "Server Troubleshooting",
      desc: "Power issues, network issues, hardware failures and emergency diagnostics.",
      icon: "🛠️",
    },

    {
      title: "GPU Deployment",
      desc: "GPU server installation, cable verification, deployment and testing.",
      icon: "⚡",
    },

    {
      title: "Cable Management",
      desc: "Fiber, copper and structured cabling services for clean deployments.",
      icon: "🔌",
    },

    {
      title: "Hardware Replacement",
      desc: "Memory, SSD, HDD, PSU, NIC and component replacement services.",
      icon: "💾",
    },
  ]

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}
      <section className="border-b border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            FASTLINK REMOTE SERVICES
          </div>

          <h1 className="mt-8 text-6xl font-black">
            Professional
            <span className="text-cyan-400 block">
              Remote Hands Services
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
            FastLink Remote provides professional remote hands and smart hands
            support throughout Silicon Valley data centers. We help global
            customers deploy, maintain and troubleshoot critical IT
            infrastructure.
          </p>

        </div>

      </section>

      {/* Services Grid */}
      <section>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8 hover:border-cyan-400/30 transition"
              >

                <div className="text-5xl">
                  {service.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-400 leading-8">
                  {service.desc}
                </p>

                <a
  href="/contact"
  className="mt-8 inline-block text-cyan-400 font-semibold"
>
  Request Service →
</a>

              </div>

            ))}

          </div>

        </div>

      </section>

{/* Detailed Services */}
<section className="border-t border-cyan-400/10">

  <div className="max-w-7xl mx-auto px-6 py-24">

    <h2 className="text-5xl font-black text-center">
      Detailed Service Descriptions
    </h2>

    <p className="mt-6 text-center text-gray-400 max-w-3xl mx-auto">
      Professional Remote Hands and Smart Hands support throughout Silicon Valley data centers.
    </p>

    {/* Rack & Stack */}
    <div className="mt-20">

      <h3 className="text-4xl font-black text-cyan-400">
        Rack & Stack Services
      </h3>

      <p className="mt-6 text-gray-300 leading-9">
        FastLink Remote provides professional Rack & Stack services for customers
        operating equipment in Silicon Valley data centers including San Jose,
        Santa Clara, Sunnyvale and Milpitas.
      </p>

      <p className="mt-4 text-gray-300 leading-9">
        Our technicians perform server installation, switch deployment,
        storage installation, rail mounting, cable routing, labeling,
        inventory verification and rack organization according to customer
        specifications.
      </p>

      <ul className="mt-6 space-y-3 text-gray-300">
        <li>✓ Server installation and removal</li>
        <li>✓ Network switch deployment</li>
        <li>✓ Rail kit installation</li>
        <li>✓ Structured cable routing</li>
        <li>✓ Asset labeling</li>
        <li>✓ Photo documentation</li>
      </ul>

    </div>

    {/* Receiving */}
    <div className="mt-20">

      <h3 className="text-4xl font-black text-cyan-400">
        Receiving & Shipping Services
      </h3>

      <p className="mt-6 text-gray-300 leading-9">
        FastLink Remote offers receiving and shipping support for customers
        requiring local logistics assistance in Silicon Valley data centers.
      </p>

      <p className="mt-4 text-gray-300 leading-9">
        We can receive hardware shipments, verify inventory, inspect packaging,
        photograph equipment, stage assets and prepare hardware for deployment.
      </p>

      <ul className="mt-6 space-y-3 text-gray-300">
        <li>✓ Receiving incoming shipments</li>
        <li>✓ Inventory verification</li>
        <li>✓ Damage inspection</li>
        <li>✓ Equipment staging</li>
        <li>✓ Packaging assistance</li>
        <li>✓ Return shipping coordination</li>
      </ul>

    </div>

    {/* GPU */}
    <div className="mt-20">

      <h3 className="text-4xl font-black text-cyan-400">
        GPU Deployment Services
      </h3>

      <p className="mt-6 text-gray-300 leading-9">
        FastLink Remote specializes in GPU server deployment and infrastructure
        support for AI and high-performance computing environments.
      </p>

      <p className="mt-4 text-gray-300 leading-9">
        We assist customers with physical installation, power verification,
        cable validation, rack mounting, hardware replacement and deployment
        preparation for GPU clusters.
      </p>

      <ul className="mt-6 space-y-3 text-gray-300">
        <li>✓ GPU server installation</li>
        <li>✓ Power verification</li>
        <li>✓ Network cable deployment</li>
        <li>✓ Hardware inspection</li>
        <li>✓ Component replacement</li>
        <li>✓ Deployment reporting</li>
      </ul>

    </div>

  </div>

</section>

      {/* Why Choose Us */}
      <section className="border-t border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-black text-center">
            Why Choose FastLink Remote
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                7x24
              </h3>
              <p className="mt-3 text-gray-400">
                Emergency Support
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                30min
              </h3>
              <p className="mt-3 text-gray-400">
                Average Response
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                CN/EN
              </h3>
              <p className="mt-3 text-gray-400">
                Bilingual Support
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                Silicon Valley
              </h3>
              <p className="mt-3 text-gray-400">
                Local Presence
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}