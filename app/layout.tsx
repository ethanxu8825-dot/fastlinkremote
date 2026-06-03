import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fastlinkremote.com"),

  title: {
    default: "FastLink Remote | Silicon Valley Remote Hands Services",
    template: "%s | FastLink Remote",
  },

  description:
    "Professional Remote Hands and Smart Hands services throughout Silicon Valley. Rack & Stack, Receiving & Shipping, GPU Deployment, Hardware Replacement and Emergency Support.",

  keywords: [
    "Remote Hands",
    "Smart Hands",
    "Silicon Valley",
    "San Jose Data Center",
    "Santa Clara Data Center",
    "Rack and Stack",
    "GPU Deployment",
    "Server Troubleshooting",
    "Hardware Replacement",
    "Data Center Support",
  ],

  openGraph: {
    title: "FastLink Remote",
    description:
      "Professional Silicon Valley Remote Hands & Smart Hands Services",
    url: "https://fastlinkremote.com",
    siteName: "FastLink Remote",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white">

  <Header />

  <main className="flex-1">
    {children}
  </main>

  {/* Footer */}
        <footer className="border-t border-cyan-400/10 bg-[#030712]">

          <div className="max-w-7xl mx-auto px-6 py-16">

            <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">

              {/* Company */}
              
<div>

  <img
    src="/header.png"
    alt="FastLink Remote"
    className="h-24 w-auto"
  />

  <p className="mt-6 text-gray-400 leading-8 max-w-xs">
  Silicon Valley Remote Hands &
  Smart Hands Services for global customers.
</p>

<p className="mt-4 text-gray-500 text-sm leading-7 max-w-xs">
  Rack & Stack • Smart Hands • GPU Deployment •
  Logistics • Emergency Support
</p>

</div>

              {/* Services */}
              <div>

                <h4 className="font-bold text-white mb-4">
                  Services
                </h4>

                <ul className="space-y-2 text-gray-400">

                  <li>Rack & Stack</li>
                  <li>Receiving & Shipping</li>
                  <li>GPU Deployment</li>
                  <li>Emergency Support</li>

                </ul>

              </div>

              {/* Coverage */}
              <div>

  <h4 className="font-bold text-white mb-4">
    Coverage
  </h4>

  <ul className="space-y-3 text-gray-400">

    <li>
      <a href="/coverage" className="hover:text-cyan-400">
        San Jose
      </a>
    </li>

    <li>
      <a href="/coverage" className="hover:text-cyan-400">
        Santa Clara
      </a>
    </li>

    <li>
      <a href="/coverage" className="hover:text-cyan-400">
        Silicon Valley
      </a>
    </li>

    <li>
      <a href="/coverage" className="hover:text-cyan-400">
        Bay Area
      </a>
    </li>

  </ul>

</div>

              {/* Contact */}
              <div>

                <h4 className="font-bold text-white mb-4">
                  Contact
                </h4>

                <ul className="space-y-2 text-gray-400">

                  <li>Email:</li>
                  <li>sales@fastlinkremote.com</li>

                  <li className="pt-3">
                    WhatsApp:
                  </li>

                  <li>Coming Soon</li>

                </ul>

              </div>

            </div>

            <div className="mt-12 pt-8 border-t border-cyan-400/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

              <div>
                © 2026 FastLink Remote. All Rights Reserved.
              </div>

              <div className="mt-4 md:mt-0">
                Professional • Efficient • Reliable
              </div>

            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}