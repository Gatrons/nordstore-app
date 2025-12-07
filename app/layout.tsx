import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NordStore — Digital Goods",
  description:
    "Store kebutuhan digital: Rockstar Account, Sosmed, Discord, dan lainnya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="id">
      <body className="min-h-screen bg-black text-slate-100 antialiased">
        {/* Glow background */}
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-700/25 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          {/* NAVBAR */}
          <header className="sticky top-0 z-30 border-b border-white/5 bg-black/70 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
              {/* LEFT: LOGO + BRAND */}
              <Link
                href="/"
                className="group flex items-center gap-2 rounded-full bg-white/0 px-2 py-1 transition hover:bg-white/5"
              >
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 shadow-lg shadow-purple-900/40">
                  {/* gradient highlight di dalam logo box */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(255,255,255,0.35)_0,transparent_40%),radial-gradient(circle_at_80%_100%,rgba(147,51,234,0.5)_0,transparent_45%)] opacity-70" />
                  {/* Logo image */}
                  <Image
                    src="/images/NordLogo.png"
                    alt="NordStore Logo"
                    width={80}
                    height={80}
                    className="relative z-10 h-12 w-12 object-contain drop-shadow-[0_0_6px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold tracking-wide text-white">
                    NordStore
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Digital goods marketplace
                  </p>
                </div>
              </Link>

              {/* CENTER: NAV LINKS (desktop) */}
              <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
                <NavLink href="#products" label="Products" />
                <NavLink href="#how-it-works" label="Cara kerja" />
                <NavLink href="#faq" label="FAQ" />
              </div>

              {/* RIGHT: BUTTONS */}
              <div className="flex items-center gap-3">
                <Link
                  href="/api/auth/signin"
                  className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-[0_0_18px_rgba(88,28,135,0.6)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(129,140,248,0.9)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5865F2]">
                      <DiscordIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>Login dengan Discord</span>
                  </span>
                  {/* Soft shimmer */}
                  <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 translate-x-[-120%] bg-gradient-to-r from-white/40 via-white/0 to-transparent blur-sm transition-transform duration-[900ms] hover:translate-x-[220%]" />
                </Link>
              </div>
            </nav>
          </header>

          {/* CONTENT */}
          <main className="flex-1">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-10">
              {children}
            </div>
          </main>

          {/* FOOTER */}
          <footer className="border-t border-white/5 bg-black/80 py-4 text-xs text-slate-400 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
              <p>© {year} NordStore. All rights reserved.</p>
              <p className="hidden items-center gap-2 md:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span>Trusted digital goods & instant delivery</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative text-xs font-medium text-slate-300 transition hover:text-white"
    >
      <span>{label}</span>
      <span className="absolute left-0 top-full mt-1 h-[2px] w-0 origin-left rounded-full bg-gradient-to-r from-purple-400 via-purple-200 to-purple-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="white"
        d="M20 4.5A19.8 19.8 0 0 0 15.76 3l-.24.48a18.5 18.5 0 0 1 2.18.84 7 7 0 0 0-3.1-1 9.3 9.3 0 0 0-1.8 0 7 7 0 0 0-3.1 1 18.5 18.5 0 0 1 2.18-.84L11.24 3A19.8 19.8 0 0 0 8 4.5C4.67 9.33 3.87 14 4.2 18.6A19.7 19.7 0 0 0 9 20.25l.6-1.2a12.4 12.4 0 0 1-1.94-.94l.47-.35a14 14 0 0 0 8.74 0l.47.35a12.4 12.4 0 0 1-1.94.94l.6 1.2a19.7 19.7 0 0 0 4.8-1.65C20.13 14 19.33 9.33 16 4.5ZM10 15c-.78 0-1.42-.72-1.42-1.6S9.2 11.8 10 11.8s1.43.72 1.43 1.6S10.8 15 10 15Zm4 0c-.78 0-1.42-.72-1.42-1.6s.64-1.6 1.42-1.6 1.42.72 1.42 1.6S14.78 15 14 15Z"
      />
    </svg>
  );
}
