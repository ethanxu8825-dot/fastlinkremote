export default function ContactSuccessPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">

      <div className="max-w-3xl mx-auto px-6 text-center">

        <div className="text-7xl mb-8">
          ✅
        </div>

        <h1 className="text-5xl font-black">
          Request Submitted
        </h1>

        <p className="mt-8 text-xl text-gray-300 leading-9">
          Thank you for contacting FastLink Remote.
          Your request has been received successfully.
        </p>

        <p className="mt-4 text-gray-400">
          A FastLink Remote engineer will review your request
          and respond as soon as possible.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <a
            href="/"
            className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition"
          >
            Return Home
          </a>

          <a
            href="/services"
            className="border border-cyan-400/20 px-8 py-4 rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            View Services
          </a>

        </div>

      </div>

    </main>
  )
}
