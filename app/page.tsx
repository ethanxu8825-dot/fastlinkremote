export default function Home() {

  const services = [
    {
      title: 'Rack & Stack',
      icon: '🗄️',
    },
    {
      title: 'Receiving & Shipping',
      icon: '📦',
    },
    {
      title: 'Server Troubleshooting',
      icon: '🛠️',
    },
    {
      title: 'Cable Management',
      icon: '🔌',
    },
    {
      title: 'GPU Deployment',
      icon: '⚡',
    },
    {
      title: 'Hardware Replacement',
      icon: '💾',
    },
  ]

  const stats = [
    ['7x24', 'Emergency Support'],
    ['30min', 'Average Response'],
    ['CN/EN', 'Bilingual Support'],
    ['1000+', 'Completed Tasks'],
  ]

  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#00d9ff22,transparent_30%)] pointer-events-none" />

      {/* Header */}
      

      {/* Hero */}
      {/* Hero */}
<section className="relative overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">

    <img
      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop"
      alt="Data Center"
      className="w-full h-full object-cover opacity-25"
    />

    <div className="absolute inset-0 bg-[#050816]/85" />

  </div>

  {/* Blue Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00d9ff22,transparent_40%)]" />

  {/* Header */}
  

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-8 grid lg:grid-cols-2 gap-16 items-start">

    {/* Left */}
    <div>

      <div className="inline-flex items-start gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 mb-8">
        🛡️ 24/7 Silicon Valley Remote Hands Support
      </div>

      {/* Big Title */}
      <h1 className="text-7xl lg:text-8xl font-black leading-none tracking-tight">

        <span className="text-white">
          SILICON VALLEY
        </span>

        <span className="block text-cyan-400 mt-3">
          REMOTE HANDS
        </span>

      </h1>

      {/* Subtitle */}
      <div className="mt-8 text-xl text-cyan-300 font-semibold">
  Smart Hands • Remote Hands • Data Center Logistics
</div>

      {/* Description */}
      <p className="mt-10 text-xl text-gray-300 leading-10 max-w-2xl">

        Professional on-site remote hands and smart hands services
        for global customers in San Jose and Santa Clara.

        Specialized in Rack & Stack, Receiving & Shipping,
        Emergency Support, GPU Deployment,
        Smart Hands, Cable Management,
        Hardware Replacement, and Data Center Logistics.

      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap gap-5">

        <a
  href="/contact"
  className="inline-flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-5 rounded-3xl font-bold transition shadow-[0_0_30px_#00d9ff33]"
>
  Request Support →
</a>

        <a
  href="/contact"
  className="inline-flex items-center justify-center border border-cyan-400/20 px-10 py-5 rounded-3xl hover:border-cyan-400 hover:text-cyan-400 transition"
>
  Contact Us →
</a>

      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-5">

        {[
          ['7x24', 'Emergency Support'],
          ['30min', 'Average Response'],
          ['CN/EN', 'Bilingual Support'],
          ['1000+', 'Completed Tasks'],
        ].map(([number, label]) => (

          <div
            key={number}
            className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/70 backdrop-blur-xl p-6 hover:border-cyan-400/20 transition"
          >

            <div className="text-4xl font-black text-cyan-400">
              {number}
            </div>

            <div className="mt-3 text-gray-400 text-sm leading-6">
              {label}
            </div>

          </div>

        ))}

      </div>

    </div>

    {/* Right Dashboard */}
    <div className="relative">

      <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

      <div className="relative rounded-[40px] border border-cyan-400/20 bg-[#0b1229]/80 backdrop-blur-2xl p-10 shadow-[0_0_60px_#00d9ff11]">

        {/* Top */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">

          <div>

            <h3 className="text-4xl font-black">
              FastLink Remote
            </h3>

            <p className="text-gray-400 mt-2 text-lg">
              Smart Hands Dashboard
            </p>

          </div>

          <div className="flex items-center gap-3 text-green-400">

            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            Online

          </div>

        </div>

        {/* Services */}
        {/* Why Choose FastLink */}
<div className="mt-8 space-y-4">

  {[
    [
      "⚡",
      "30 Minute Response",
      "Rapid onsite support across Silicon Valley",
    ],

    [
      "🛡️",
      "24/7 Emergency Coverage",
      "Available for urgent incidents and outages",
    ],

    [
      "🌎",
      "Bilingual Support",
      "English and Chinese communication",
    ],

    [
      "🏢",
      "Local Data Center Presence",
      "San Jose, Santa Clara and Bay Area coverage",
    ],

    [
      "🔧",
      "Experienced Technicians",
      "Hands-on support for servers and network equipment",
    ],

    [
      "📋",
      "Detailed Reporting",
      "Photos, documentation and completion reports",
    ],
  ].map(([icon, title, desc]) => (

    <div
      key={title}
      className="rounded-2xl border border-cyan-400/10 bg-[#111827]/70 p-5 hover:border-cyan-400/30 transition"
    >

      <div className="flex items-start gap-4">

        <div className="text-3xl">
          {icon}
        </div>

        <div>

          <h4 className="font-bold text-xl">
            {title}
          </h4>

          <p className="mt-2 text-gray-400">
            {desc}
          </p>

        </div>

      </div>

    </div>

  ))}

</div>
  

      </div>

    </div>

  </div>

</section>

{/* Coverage Area */}
<section className="border-t border-cyan-400/10 bg-[#081127]">

  <div className="max-w-7xl mx-auto px-6 py-10">

    <div className="text-cyan-400 font-semibold">
      COVERAGE AREA
    </div>

    <h2 className="mt-4 text-5xl font-black">
      Serving Silicon Valley
    </h2>

    <p className="mt-6 text-gray-400">
      FastLink Remote provides support across San Jose,
      Santa Clara, Sunnyvale and Milpitas.
    </p>

    <div className="mt-10 grid md:grid-cols-4 gap-6">

      <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/70 p-8 text-center">
        San Jose
      </div>

      <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/70 p-8 text-center">
        Santa Clara
      </div>

      <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/70 p-8 text-center">
        Sunnyvale
      </div>

      <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/70 p-8 text-center">
        Milpitas
      </div>

    </div>

  </div>

</section>

{/* CTA */}
<section className="border-t border-cyan-400/10">

  <div className="max-w-5xl mx-auto px-6 py-20 text-center">

    <h2 className="text-5xl font-black">
      Need Remote Hands Support?
    </h2>

    <p className="mt-6 text-xl text-gray-400">
      Rack & Stack • GPU Deployment • Emergency Response
    </p>

    <a
      href="/contact"
      className="inline-block mt-10 bg-cyan-400 text-black px-10 py-5 rounded-3xl font-bold"
    >
      Request Support →
    </a>

  </div>

</section>

</main>
  )
}