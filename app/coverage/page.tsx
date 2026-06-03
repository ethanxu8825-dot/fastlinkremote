export default function CoveragePage() {
  const locations = [
    {
      city: "San Jose",
      desc: "Fast response support across major San Jose data centers.",
      facilities: ["QTS", "Digital Realty", "Colocation Facilities"],
    },
    {
      city: "Santa Clara",
      desc: "The heart of Silicon Valley data center operations.",
      facilities: ["Equinix SV1", "SV5", "SV8", "SV10"],
    },
    {
      city: "Milpitas",
      desc: "Support for network, cloud and enterprise deployments.",
      facilities: ["Carrier Hotels", "Enterprise Facilities"],
    },
    {
      city: "Sunnyvale",
      desc: "AI, GPU and hyperscale infrastructure support.",
      facilities: ["Equinix", "Digital Realty", "Private Facilities"],
    },
  ];

  const advantages = [
    "30 Minute Average Response",
    "7x24 Emergency Support",
    "Chinese & English Communication",
    "Local Silicon Valley Engineer",
    "Receiving & Shipping Services",
    "GPU Deployment Experience",
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}
      <section className="border-b border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            FASTLINK REMOTE COVERAGE
          </div>

          <h1 className="mt-8 text-6xl font-black">
            Silicon Valley
            <span className="block text-cyan-400">
              Coverage Area
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
            FastLink Remote provides on-site Remote Hands and Smart Hands
            support throughout Silicon Valley data centers including
            San Jose, Santa Clara, Sunnyvale and Milpitas.
          </p>

        </div>

      </section>

      {/* Coverage Grid */}
      <section>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-black mb-12">
            Supported Locations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {locations.map((location) => (

              <div
                key={location.city}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8 hover:border-cyan-400/30 transition"
              >

                <h3 className="text-3xl font-bold text-cyan-400">
                  {location.city}
                </h3>

                <p className="mt-4 text-gray-400 leading-8">
                  {location.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">

                  {location.facilities.map((facility) => (

                    <span
                      key={facility}
                      className="px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm"
                    >
                      {facility}
                    </span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Advantages */}
      <section className="border-t border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-black text-center">
            Why Customers Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {advantages.map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-cyan-400/10 bg-[#0b1229]/70 p-6 text-center"
              >

                <div className="text-cyan-400 text-xl font-bold">
                  ✓
                </div>

                <div className="mt-3">
                  {item}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-cyan-400/10">

        <div className="max-w-5xl mx-auto px-6 py-24 text-center">

          <h2 className="text-5xl font-black">
            Need Remote Hands
            <span className="block text-cyan-400">
              In Silicon Valley?
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-xl">
            Contact FastLink Remote for emergency support,
            equipment deployment, receiving & shipping,
            and data center operations assistance.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition">
              Submit Ticket
            </button>

            <button className="border border-cyan-400/20 px-8 py-4 rounded-2xl hover:bg-white/5 transition">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}