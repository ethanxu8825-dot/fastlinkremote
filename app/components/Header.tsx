export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 backdrop-blur-xl bg-[#050816]/95">

      <div className="max-w-[1400px] mx-auto px-6 py-1 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center">

          <img
  src="/header.png"
  alt="FastLink Remote"
  className="h-[100px] w-auto"
/>

        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">

          <a href="/" className="hover:text-cyan-400">
            Home
          </a>

          <a href="/services" className="hover:text-cyan-400">
            Services
          </a>

          <a href="/coverage" className="hover:text-cyan-400">
            Coverage
          </a>

          <a href="/blog" className="hover:text-cyan-400">
            Resource Center
          </a>

          <a href="/faq" className="hover:text-cyan-400">
            FAQ
          </a>

          <a href="/contact" className="hover:text-cyan-400">
            Contact
          </a>

        </nav>

        {/* Right */}
        <a
          href="/contact"
          className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-2xl font-semibold transition"
        >
          Submit Ticket
        </a>

      </div>

    </header>
  )
}