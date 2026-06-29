export const metadata = {
  title:
    "Rack & Stack Services in Silicon Valley | FastLink Remote",

  description:
    "Professional Rack & Stack services in Silicon Valley data centers. Server installation, rack mounting, cable management, power verification and deployment support.",

  keywords: [
    "rack and stack",
    "rack and stack services",
    "server installation",
    "data center rack and stack",
    "silicon valley rack and stack",
    "san jose remote hands",
    "smart hands services",
  ],
};

export default function RackAndStackPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}

      <section className="border-b border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            RACK & STACK SERVICES
          </div>

          <h1 className="mt-8 text-6xl font-black">

            Professional

            <span className="block text-cyan-400">
              Rack & Stack Services
            </span>

          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">

            FastLink Remote provides professional Rack & Stack
            services throughout Silicon Valley data centers.
            We install servers, switches, storage systems,
            PDUs and network equipment for global customers.

          </p>

        </div>

      </section>

      {/* Services */}

      <section>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-black">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              🖥️ Server Installation
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              🔌 Power & Network Verification
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              📦 Equipment Unboxing
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              🧵 Cable Management
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              ⚡ PDU Installation
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              📸 Photo Documentation
            </div>

          </div>

        </div>

      </section>

      {/* Why FastLink */}

      <section className="border-t border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-black">
            Why Choose FastLink Remote
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div>
              <div className="text-cyan-400 text-3xl font-bold">
                7×24
              </div>

              <p className="mt-3 text-gray-400">
                Emergency Support
              </p>
            </div>

            <div>
              <div className="text-cyan-400 text-3xl font-bold">
                30min
              </div>

              <p className="mt-3 text-gray-400">
                Average Response
              </p>
            </div>

            <div>
              <div className="text-cyan-400 text-3xl font-bold">
                CN / EN
              </div>

              <p className="mt-3 text-gray-400">
                Bilingual Support
              </p>
            </div>

            <div>
              <div className="text-cyan-400 text-3xl font-bold">
                Silicon Valley
              </div>

              <p className="mt-3 text-gray-400">
                Local Presence
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="border-t border-cyan-400/10">

        <div className="max-w-5xl mx-auto px-6 py-24 text-center">

          <h2 className="text-5xl font-black">
            Need Rack & Stack Support?
          </h2>

          <p className="mt-6 text-gray-300 text-xl">
            Contact FastLink Remote today for professional
            server installation and deployment services.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
          >
            Request Service →
          </a>

        </div>

      </section>

    </main>
  );
}