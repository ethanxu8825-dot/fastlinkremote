'use client'

import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname()
  const isChinese = pathname.startsWith('/zh')

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 backdrop-blur-xl bg-[#050816]/95">

      <div className="max-w-[1400px] mx-auto px-6 py-1 flex items-center justify-between">

        {/* Logo */}
        <a
          href={isChinese ? "/zh" : "/"}
          className="flex items-center"
        >
          <img
            src="/header.png"
            alt="FastLink Remote"
            className="h-[100px] w-auto"
          />
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">

          <a
            href={isChinese ? "/zh" : "/"}
            className="hover:text-cyan-400"
          >
            {isChinese ? "首页" : "Home"}
          </a>

          <a
            href={isChinese ? "/zh/services" : "/services"}
            className="hover:text-cyan-400"
          >
            {isChinese ? "服务项目" : "Services"}
          </a>

          <a
            href={isChinese ? "/zh/coverage" : "/coverage"}
            className="hover:text-cyan-400"
          >
            {isChinese ? "服务区域" : "Coverage"}
          </a>

          <a
            href={isChinese ? "/zh/blog" : "/blog"}
            className="hover:text-cyan-400"
          >
            {isChinese ? "资源中心" : "Resource Center"}
          </a>

          <a
            href={isChinese ? "/zh/faq" : "/faq"}
            className="hover:text-cyan-400"
          >
            {isChinese ? "常见问题" : "FAQ"}
          </a>

          <a
            href={isChinese ? "/zh/contact" : "/contact"}
            className="hover:text-cyan-400"
          >
            {isChinese ? "联系我们" : "Contact"}
          </a>

          {/* Language Switch */}
          {isChinese ? (
            <a
              href="/"
              className="text-cyan-300 hover:text-cyan-400"
            >
              EN
            </a>
          ) : (
            <a
              href="/zh"
              className="text-cyan-300 hover:text-cyan-400"
            >
              中文
            </a>
          )}

        </nav>

        {/* Right Button */}
        <a
          href={isChinese ? "/zh/contact" : "/contact"}
          className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-3 rounded-2xl font-semibold transition"
        >
          {isChinese ? "提交需求" : "Submit Ticket"}
        </a>

      </div>

    </header>
  )
}