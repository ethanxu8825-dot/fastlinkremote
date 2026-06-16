export default function ChineseFaqPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <section className="border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-6xl font-black">
            常见问题
          </h1>

          <p className="mt-8 text-xl text-gray-300">
            关于美国机房 Remote Hands 服务的常见问题。
          </p>

        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 space-y-8">

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
            <h2 className="text-2xl font-bold">
              什么是 Remote Hands？
            </h2>
            <p className="mt-4 text-gray-300">
              由现场工程师代替客户完成机房中的物理操作。
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
            <h2 className="text-2xl font-bold">
              你们提供 GPU 部署服务吗？
            </h2>
            <p className="mt-4 text-gray-300">
              提供。支持 AI 服务器安装、GPU 集群部署及现场验证。
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
            <h2 className="text-2xl font-bold">
              响应时间多久？
            </h2>
            <p className="mt-4 text-gray-300">
              普通请求通常当天响应，紧急情况支持 7×24 小时服务。
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
            <h2 className="text-2xl font-bold">
              如何提交需求？
            </h2>
            <p className="mt-4 text-gray-300">
              请访问 /zh/contact 提交服务请求。
            </p>
          </div>

        </div>
      </section>

    </main>
  )
}
