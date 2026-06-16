'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <div className="max-w-2xl text-center px-6">
          <div className="text-7xl mb-6">✅</div>

          <h1 className="text-5xl font-black">
            服务请求已提交
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            感谢您联系 FastLink Remote。
          </p>

          <p className="mt-3 text-gray-400">
            我们已经收到您的需求，将尽快与您联系。
          </p>

          <a
            href="/zh"
            className="inline-block mt-10 bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold"
          >
            返回首页
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <section className="border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            联系 FASTLINK REMOTE
          </div>

          <h1 className="mt-8 text-6xl font-black">
            提交
            <span className="block text-cyan-400">
              远程运维服务请求
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-9">
            需要美国硅谷机房现场支持？
            FastLink Remote 提供设备上架（Rack & Stack）、
            收货验货、GPU服务器部署、Remote Hands、Smart Hands、
            故障排查、硬件更换及紧急支持服务。
          </p>

        </div>
      </section>

      <section>
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">

              <h2 className="text-3xl font-black">
                提交服务需求
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
                  placeholder="姓名"
                  required
                  className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
                />

                <input
                  name="company"
                  type="text"
                  placeholder="公司名称"
                  className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
                />

                <input
                  name="email"
                  type="email"
                  placeholder="邮箱"
                  required
                  className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
                />

                <input
                  name="datacenter"
                  type="text"
                  placeholder="机房名称（QTS、Equinix、CoreSite 等）"
                  className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
                />

                <select
                  name="service"
                  className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
                >
                  <option>设备上架（Rack & Stack）</option>
                  <option>收货与发货</option>
                  <option>GPU服务器部署</option>
                  <option>Remote Hands</option>
                  <option>紧急支持</option>
                  <option>硬件更换</option>
                </select>

                <select
                  name="priority"
                  className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
                >
                  <option>普通</option>
                  <option>紧急</option>
                  <option>非常紧急（2小时内）</option>
                </select>

                <textarea
                  name="request"
                  rows={6}
                  placeholder="请详细描述您的需求"
                  required
                  className="w-full bg-black/30 border border-cyan-400/10 rounded-xl p-4"
                />

                <button
                  type="submit"
                  className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition"
                >
                  提交服务请求
                </button>

              </form>

            </div>

            <div>

              <div className="rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">

                <h2 className="text-3xl font-black">
                  联系方式
                </h2>

                <div className="mt-8 space-y-8">

                  <div>
                    <h3 className="text-cyan-400 font-bold">邮箱</h3>
                    <p className="mt-2 text-gray-300">
                      ethanxu8825@gmail.com
                    </p>
                  </div>

                  <div>
                    <h3 className="text-cyan-400 font-bold">WhatsApp</h3>
                    <p className="mt-2 text-gray-300">
                      需要时提供
                    </p>
                  </div>

                  <div>
                    <h3 className="text-cyan-400 font-bold">微信</h3>
                    <p className="mt-2 text-gray-300">
                      需要时提供
                    </p>
                  </div>

                  <div>
                    <h3 className="text-cyan-400 font-bold">服务区域</h3>
                    <p className="mt-2 text-gray-300">
                      San Jose · Santa Clara · Sunnyvale · Milpitas
                    </p>
                  </div>

                  <div>
                    <h3 className="text-cyan-400 font-bold">服务时间</h3>
                    <p className="mt-2 text-gray-300">
                      7×24 小时紧急响应
                    </p>
                  </div>

                  <div>
                    <h3 className="text-cyan-400 font-bold">服务语言</h3>
                    <p className="mt-2 text-gray-300">
                      中文 · English
                    </p>
                  </div>

                </div>

              </div>

              <div className="mt-8 rounded-3xl border border-cyan-400/10 bg-[#0b1229]/80 p-8">

                <h3 className="text-2xl font-black">
                  可提供服务
                </h3>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>✓ 设备上架</div>
                  <div>✓ Remote Hands</div>
                  <div>✓ GPU服务器部署</div>
                  <div>✓ 紧急支持</div>
                  <div>✓ 收货与发货</div>
                  <div>✓ 硬件更换</div>
                  <div>✓ 综合布线</div>
                  <div>✓ 故障排查</div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}
