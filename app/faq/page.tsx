export default function FAQPage() {
  const faqs = [
    {
      q: "What Is Remote Hands?",
      a: "Remote Hands services provide on-site assistance inside data centers when customers cannot be physically present. Typical tasks include hardware installation, troubleshooting, cable management and equipment replacement.",
    },
    {
      q: "What Is Smart Hands?",
      a: "Smart Hands refers to more advanced technical support performed by experienced engineers, including diagnostics, network verification, hardware configuration and deployment assistance.",
    },
    {
      q: "How Fast Can You Respond?",
      a: "For emergency requests, our average response time is approximately 30 minutes within our Silicon Valley coverage area.",
    },
    {
      q: "Which Data Centers Do You Support?",
      a: "We support facilities throughout San Jose, Santa Clara, Sunnyvale and Milpitas, including major colocation providers and enterprise facilities.",
    },
    {
      q: "Do You Provide Receiving & Shipping?",
      a: "Yes. We can receive equipment, inspect shipments, photograph contents, inventory assets and coordinate outbound shipping.",
    },
    {
      q: "Can You Install GPU Servers?",
      a: "Yes. We provide rack installation, cabling verification, deployment assistance and hardware replacement for GPU and AI infrastructure.",
    },
    {
      q: "Do You Offer Emergency Support?",
      a: "Yes. 24/7 emergency remote hands support is available for urgent incidents and hardware failures.",
    },
    {
      q: "Do You Support Chinese-Speaking Customers?",
      a: "Yes. We provide both English and Chinese communication for international customers.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <section className="border-b border-cyan-400/10">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="inline-flex px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h1 className="mt-8 text-6xl font-black">
            Remote Hands
            <span className="block text-cyan-400">
              FAQ
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-300 leading-9">
            Answers to the most common questions about Remote Hands,
            Smart Hands and Silicon Valley data center support.
          </p>

        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-20">

          <div className="space-y-6">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8"
              >
                <h2 className="text-2xl font-bold text-cyan-400">
                  {faq.q}
                </h2>

                <p className="mt-4 text-gray-300 leading-8">
                  {faq.a}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}