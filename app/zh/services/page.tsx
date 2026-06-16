export default function ChineseServicesPage() {

  const services = [
    {
      title: "设备上架（Rack & Stack）",
      desc: "服务器、交换机、存储设备安装部署与机柜整理。",
      icon: "🗄️",
    },

    {
      title: "收货与发货",
      desc: "设备签收、验货、拍照、库存登记与全球发货支持。",
      icon: "📦",
    },

    {
      title: "故障排查",
      desc: "服务器、网络、电源及硬件故障现场诊断。",
      icon: "🛠️",
    },

    {
      title: "GPU服务器部署",
      desc: "AI服务器安装、GPU集群部署与现场验证。",
      icon: "⚡",
    },

    {
      title: "综合布线",
      desc: "光纤、网线及结构化布线整理服务。",
      icon: "🔌",
    },

    {
      title: "硬件更换",
      desc: "内存、硬盘、SSD、电源及网卡更换服务。",
      icon: "💾",
    },
  ]

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Hero */}
      <section className="border-b border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            FASTLINK REMOTE 服务项目
          </div>

          <h1 className="mt-8 text-6xl font-black">
            美国机房
            <span className="text-cyan-400 block">
              远程运维服务
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
            FastLink Remote 为中国及全球客户提供美国硅谷机房现场支持服务，
            包括设备上架、收货发货、GPU服务器部署、Remote Hands、
            Smart Hands、硬件更换及紧急现场支持。
          </p>

        </div>

      </section>

      {/* Services Grid */}
      <section>

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8 hover:border-cyan-400/30 transition"
              >

                <div className="text-5xl">
                  {service.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-400 leading-8">
                  {service.desc}
                </p>

                <a
                  href="/zh/contact"
                  className="mt-8 inline-block text-cyan-400 font-semibold"
                >
                  提交服务请求 →
                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Detailed Services */}
      <section className="border-t border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <h2 className="text-5xl font-black text-center">
            服务详细说明
          </h2>

          <p className="mt-6 text-center text-gray-400 max-w-3xl mx-auto">
            美国硅谷机房现场运维与 Remote Hands 服务。
          </p>

          <div className="mt-20">

            <h3 className="text-4xl font-black text-cyan-400">
              设备上架（Rack & Stack）
            </h3>

            <p className="mt-6 text-gray-300 leading-9">
              我们提供服务器、交换机、存储设备及网络设备的安装部署服务。
              包括导轨安装、机柜布局、设备固定、供电连接、标签管理、
              资产登记以及现场照片记录。
            </p>

          </div>

          <div className="mt-20">

            <h3 className="text-4xl font-black text-cyan-400">
              收货与发货服务
            </h3>

            <p className="mt-6 text-gray-300 leading-9">
              可协助客户接收设备、开箱验货、拍照确认、
              库存登记、设备暂存及发货安排，
              特别适合海外客户远程管理美国机房设备。
            </p>

          </div>

          <div className="mt-20">

            <h3 className="text-4xl font-black text-cyan-400">
              GPU服务器部署
            </h3>

            <p className="mt-6 text-gray-300 leading-9">
              支持 AI 服务器、GPU 集群及高密度计算平台部署。
              包括机柜安装、电源验证、网络连接检查、
              GPU硬件检查以及现场部署支持。
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="border-t border-cyan-400/10">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-black text-center">
            为什么选择 FastLink Remote
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                7×24
              </h3>
              <p className="mt-3 text-gray-400">
                紧急支持
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                30分钟
              </h3>
              <p className="mt-3 text-gray-400">
                平均响应
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                中英双语
              </h3>
              <p className="mt-3 text-gray-400">
                沟通无障碍
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-3xl font-bold">
                硅谷本地
              </h3>
              <p className="mt-3 text-gray-400">
                现场工程师
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}