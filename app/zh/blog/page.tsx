export default function ChineseBlogPage() {
  const posts = [
    {
      title: "美国机房设备上架（Rack & Stack）完整指南",
      desc: "了解服务器上架、机柜规划、供电连接及最佳实践。",
      href: "/blog/rack-and-stack-guide",
    },
    {
      title: "GPU服务器部署流程详解",
      desc: "AI服务器安装、GPU集群部署及现场验证流程。",
      href: "/blog/gpu-server-deployment",
    },
    {
      title: "Remote Hands 与 Smart Hands 的区别",
      desc: "了解两种机房现场服务模式及适用场景。",
      href: "/blog/remote-hands-vs-smart-hands",
    },
    {
      title: "美国机房收货验货注意事项",
      desc: "设备签收、开箱检查、拍照记录与库存管理。",
      href: "/blog/receiving-shipping-checklist",
    },
  ]

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <section className="border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            资源中心
          </div>

          <h1 className="mt-8 text-6xl font-black">
            技术文章
            <span className="block text-cyan-400">
              与行业指南
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
            分享美国机房运维、Remote Hands、GPU部署、设备上架、
            收货发货及数据中心管理经验。
          </p>

        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-8">

            {posts.map((post) => (

              <a
                key={post.title}
                href={post.href}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8 hover:border-cyan-400/30 transition block"
              >

                <h2 className="text-3xl font-black">
                  {post.title}
                </h2>

                <p className="mt-4 text-gray-400 leading-8">
                  {post.desc}
                </p>

                <div className="mt-8 text-cyan-400 font-semibold">
                  阅读文章 →
                </div>

              </a>

            ))}

          </div>

        </div>
      </section>

    </main>
  )
}
