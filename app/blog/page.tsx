export default function BlogPage() {
  const posts = [
    {
      title: "How to Find Remote Hands Services in Silicon Valley",
      description:
        "Learn how to evaluate and choose reliable Remote Hands providers for Silicon Valley data centers.",
      slug: "HTFRMT",
    },
    {
      title: "Remote Hands vs Smart Hands: What's the Difference?",
      description:
        "Understand the key differences between Remote Hands and Smart Hands services.",
      slug: "remote-hands-vs-smart-hands",
    },
    {
      title: "GPU Deployment Best Practices",
      description:
        "Important considerations when deploying GPU servers and AI infrastructure.",
      slug: "gpu-deployment-best-practices",
    },
    {
      title: "Receiving & Shipping Checklist for Data Centers",
      description:
        "A practical checklist for receiving, inventory verification and shipping hardware.",
      slug: "receiving-shipping-checklist",
    },
    {
      title: "Choosing a Silicon Valley Remote Hands Provider",
      description:
        "Factors to consider when selecting a Remote Hands company in the Bay Area.",
      slug: "choosing-remote-hands-provider",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}
      <section className="border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

          <div className="inline-flex px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            FASTLINK REMOTE RESOURCE CENTER
          </div>

          <h1 className="mt-8 text-6xl font-black">
            Resource
            <span className="block text-cyan-400">
              Center
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-gray-300 leading-9">
            Guides, best practices and industry knowledge related to
            Remote Hands, Smart Hands, data center operations and
            Silicon Valley infrastructure support.
          </p>

        </div>
      </section>

      {/* Articles */}
      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-8">

            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8 hover:border-cyan-400/30 transition"
              >
                <h2 className="text-2xl font-bold group-hover:text-cyan-400 transition">
                  {post.title}
                </h2>

                <p className="mt-4 text-gray-400 leading-8">
                  {post.description}
                </p>

                <div className="mt-8 text-cyan-400 font-semibold">
                  Read Article →
                </div>

              </a>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}