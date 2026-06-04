'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">

      <div className="max-w-2xl text-center px-6">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-5xl font-black">
          Request Submitted
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Thank you for contacting FastLink Remote.
        </p>

        <p className="mt-3 text-gray-400">
          Your request has been received and we will respond as soon as possible.
        </p>

        <a
          href="/"
          className="inline-block mt-10 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
        >
          Return Home
        </a>

      </div>

    </main>
  )
}
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}
      <section className="border-b border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            CONTACT FASTLINK REMOTE
          </div>

          <h1 className="mt-8 text-6xl font-black">
            Request
            <span className="block text-cyan-400">
              Remote Hands Support
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
            Need assistance in Silicon Valley data centers?
            Contact FastLink Remote for Rack & Stack,
            Receiving & Shipping, GPU Deployment,
            Smart Hands and Emergency Support.
          </p>

        </div>

      </section>

      {/* Main */}
      <section>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
<div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">

  <h2 className="text-3xl font-black">
    Submit A Request
  </h2>

  <form
  className="mt-8 space-y-5"
  onSubmit={async (e) => {

    e.preventDefault()

    const form = e.currentTarget

    const formData = new FormData(form)

    const response = await fetch(
      'https://formspree.io/f/xpqeajow',
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (response.ok) {
      setSubmitted(true)
    }

  }}
>

    <input
      name="name"
      type="text"
      placeholder="Name"
      required
      className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
    />

    <input
      name="company"
      type="text"
      placeholder="Company"
      className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
    />

    <input
      name="email"
      type="email"
      placeholder="Email"
      required
      className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
    />

    <input
      name="datacenter"
      type="text"
      placeholder="Data Center (QTS, Equinix, CoreSite...)"
      className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
    />

    <select
      name="service"
      className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
    >
      <option>Rack & Stack</option>
      <option>Receiving & Shipping</option>
      <option>GPU Deployment</option>
      <option>Smart Hands</option>
      <option>Emergency Support</option>
      <option>Hardware Replacement</option>
    </select>

    <select
      name="priority"
      className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
    >
      <option>Normal</option>
      <option>Urgent</option>
      <option>Emergency (&lt; 2 Hours)</option>
    </select>

    <textarea
      name="request"
      rows={6}
      placeholder="Describe Your Request"
      required
      className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
    />

    <button
      type="submit"
      className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition"
    >
      Submit Request
    </button>

  </form>

</div>

            {/* Contact Info */}
            <div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">

                <h2 className="text-3xl font-black">
                  Contact Information
                </h2>

                <div className="mt-8 space-y-8">

                  <div>

                    <h3 className="text-cyan-400 font-bold">
                      Email
                    </h3>

                    <p className="mt-2 text-gray-300">
                      {/* sales@fastlinkremote.com*/}
                      ethanxu8825@gmail.com
                    </p>

                  </div>

                  <div>

                    <h3 className="text-cyan-400 font-bold">
                      WhatsApp
                    </h3>

                    <p className="mt-2 text-gray-300">
                      Available Upon Request
                    </p>

                  </div>

                  <div>

                    <h3 className="text-cyan-400 font-bold">
                      WeChat
                    </h3>

                    <p className="mt-2 text-gray-300">
                      Available Upon Request
                    </p>

                  </div>

                  <div>

                    <h3 className="text-cyan-400 font-bold">
                      Coverage Area
                    </h3>

                    <p className="mt-2 text-gray-300">
                      San Jose · Santa Clara · Sunnyvale · Milpitas
                    </p>

                  </div>

                  <div>

                    <h3 className="text-cyan-400 font-bold">
                      Support Hours
                    </h3>

                    <p className="mt-2 text-gray-300">
                      24/7 Emergency Response
                    </p>

                  </div>

                  <div>

                    <h3 className="text-cyan-400 font-bold">
                      Languages
                    </h3>

                    <p className="mt-2 text-gray-300">
                      English · 中文
                    </p>

                  </div>

                </div>

              </div>

              {/* Services */}
              <div className="mt-8 rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">

                <h3 className="text-2xl font-black">
                  Services Available
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div>✓ Rack & Stack</div>
                  <div>✓ Smart Hands</div>

                  <div>✓ GPU Deployment</div>
                  <div>✓ Emergency Support</div>

                  <div>✓ Receiving & Shipping</div>
                  <div>✓ Hardware Replacement</div>

                  <div>✓ Cable Management</div>
                  <div>✓ Troubleshooting</div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}