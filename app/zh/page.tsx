export default function ChineseHome() {
return (<main className="min-h-screen bg-[#050816] text-white overflow-hidden">

  <section className="relative overflow-hidden">

    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop"
        alt="Data Center"
        className="w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[#050816]/85" />
    </div>

    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00d9ff22,transparent_40%)]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-16 items-start">

      <div>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 mb-8">
          🇺🇸 美国硅谷机房远程运维服务
        </div>

        <h1 className="text-6xl lg:text-7xl font-black leading-tight">

          <span className="block text-white">
            美国机房
          </span>

          <span className="block text-cyan-400">
            远程运维服务
          </span>

        </h1>

        <div className="mt-8 text-xl text-cyan-300 font-semibold">
          Remote Hands · Smart Hands · GPU部署
        </div>

        <p className="mt-10 text-xl text-gray-300 leading-10 max-w-2xl">

          FastLink Remote 专注于美国硅谷地区数据中心现场运维服务。

          为中国及全球客户提供设备上架（Rack & Stack）、
          收货验货（Receiving & Shipping）、
          GPU服务器部署、远程协助（Remote Hands）、
          Smart Hands、故障排查、硬件更换、
          综合布线以及紧急现场支持服务。

        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <a
            href="/zh/contact"
            className="inline-flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-black px-10 py-5 rounded-3xl font-bold transition"
          >
            提交服务请求 →
          </a>

          <a
            href="/zh/services"
            className="inline-flex items-center justify-center border border-cyan-400/20 px-10 py-5 rounded-3xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            查看服务 →
          </a>

        </div>

      </div>

      <div className="rounded-[40px] border border-cyan-400/20 bg-[#0b1229]/80 backdrop-blur-2xl p-10">

        <h3 className="text-4xl font-black">
          服务内容
        </h3>

        <div className="mt-8 grid gap-4">

          <div className="rounded-2xl border border-cyan-400/10 p-5">
            🗄️ 设备上架（Rack & Stack）
          </div>

          <div className="rounded-2xl border border-cyan-400/10 p-5">
            📦 收货、验货、发货
          </div>

          <div className="rounded-2xl border border-cyan-400/10 p-5">
            ⚡ GPU服务器部署
          </div>

          <div className="rounded-2xl border border-cyan-400/10 p-5">
            🔧 故障排查与维护
          </div>

          <div className="rounded-2xl border border-cyan-400/10 p-5">
            🔌 综合布线与理线
          </div>

          <div className="rounded-2xl border border-cyan-400/10 p-5">
            🚨 24/7 紧急支持
          </div>

        </div>

      </div>

    </div>

  </section>

</main>

)
}
