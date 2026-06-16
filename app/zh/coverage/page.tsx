export default function ChineseCoveragePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <section className="border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            服务区域
          </div>

          <h1 className="mt-8 text-6xl font-black">
            美国硅谷
            <span className="block text-cyan-400">
              机房覆盖区域
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
            FastLink Remote 为美国硅谷及湾区数据中心客户提供
            Remote Hands、Smart Hands、设备上架、GPU部署及紧急支持服务。
          </p>

        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              <h2 className="text-3xl font-black">San Jose</h2>
              <p className="mt-4 text-gray-300">服务器部署、Remote Hands、紧急支持。</p>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              <h2 className="text-3xl font-black">Santa Clara</h2>
              <p className="mt-4 text-gray-300">GPU服务器部署、机柜安装与运维支持。</p>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              <h2 className="text-3xl font-black">Sunnyvale</h2>
              <p className="mt-4 text-gray-300">收货验货、发货及现场服务。</p>
            </div>

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">
              <h2 className="text-3xl font-black">Milpitas</h2>
              <p className="mt-4 text-gray-300">设备更换、故障排查与Smart Hands支持。</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
