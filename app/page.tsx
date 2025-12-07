import Link from "next/link";

const featuredProducts = [
  {
    name: "Spotify Premium",
    type: "SPOTIFY",
    description:
      "Akses musik tanpa iklan, skip tanpa batas, dan kualitas tinggi.",
    badge: "Best seller",
    priceFrom: 15000,
  },
  {
    name: "Netflix Premium",
    type: "NETFLIX",
    description: "Tonton film & series Full HD di banyak device.",
    badge: "Popular",
    priceFrom: 30000,
  },
  {
    name: "Discord Nitro",
    type: "DISCORD",
    description:
      "Badge Nitro, upload besar, dan emoji custom di semua server.",
    badge: "Gamers",
    priceFrom: 25000,
  },
  {
    name: "Rockstar Account",
    type: "ROCKSTAR",
    description:
      "Account original untuk game favoritmu di Rockstar Launcher.",
    badge: "Limited",
    priceFrom: 15000,
  },
];

// jumlah kepingan salju
const SNOWFLAKE_COUNT = 40;

export default function HomePage() {
  return (
    <div className="relative">
      {/* SNOWFALL OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
        {Array.from({ length: SNOWFLAKE_COUNT }).map((_, i) => {
          const delay = ((i * 1.37) % 10).toFixed(2); // 0–10s
          const duration = 14 + (i % 10); // 14–23s
          const left = ((i * 7.91) % 100).toFixed(2); // 0–100%

          return (
            <span
              key={i}
              className="snowflake"
              style={{
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            >
              ✦
            </span>
          );
        })}
      </div>

      {/* MAIN CONTENT */}
      <div className="space-y-16 relative z-30">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-900/20 px-3 py-1 text-[11px] font-medium text-purple-200 shadow-sm shadow-purple-900/40">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Instant delivery • Trusted seller • Discord Login</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Semua kebutuhan digitalmu,
                <span className="block bg-gradient-to-r from-purple-400 via-purple-200 to-purple-500 bg-clip-text text-transparent">
                  dalam satu store yang aman.
                </span>
              </h1>
              <p className="max-w-xl text-sm text-slate-300 sm:text-base">
                Top up langganan Spotify, Netflix, Discord Nitro, dan banyak
                lagi. Pembayaran fleksibel, pengiriman cepat, dan riwayat
                pesanan rapi di dashboard-mu.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="#products"
                className="rounded-full bg-gradient-to-r from-purple-500 to-purple-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/50 hover:brightness-110"
              >
                Mulai belanja
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 hover:bg-white/10"
              >
                Join Discord komunitas
              </Link>
              <p className="w-full text-xs text-slate-400 sm:w-auto">
                Login cepat dengan Discord, tanpa ribet bikin akun baru.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="space-y-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Produk pilihan
              </h2>
              <p className="text-sm text-slate-400">
                Kategori yang paling sering dibeli di NordStore.
              </p>
            </div>
            <Link
              href="/products"
              className="text-xs font-medium text-purple-300 hover:text-purple-100"
            >
              Lihat semua →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="group flex flex-col justify-between rounded-xl border border-white/5 bg-white/5 p-4 transition hover:border-purple-400/70 hover:bg-purple-900/20"
              >
                <div className="space-y-1.5">
                  <p className="text-[11px] uppercase tracking-wide text-purple-300/80">
                    {product.type}
                  </p>
                  <h3 className="text-sm font-semibold text-white">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {product.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xs text-slate-300">
                    Mulai dari{" "}
                    <span className="font-semibold text-purple-200">
                      Rp {product.priceFrom.toLocaleString("id-ID")}
                    </span>
                  </p>
                  <button className="rounded-full bg-purple-600/80 px-3 py-1 text-[11px] font-semibold text-white shadow-sm shadow-purple-900/60 group-hover:bg-purple-500">
                    Pilih paket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="space-y-6">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            Cara kerja NordStore
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <StepCard
              step="01"
              title="Login dengan Discord"
              description="Gunakan akun Discord-mu untuk login hanya dengan satu klik. Tidak perlu registrasi baru."
            />
            <StepCard
              step="02"
              title="Pilih produk & paket"
              description="Pilih layanan yang kamu mau: Spotify, Netflix, Nitro, atau lainnya, lalu pilih durasi paket."
            />
            <StepCard
              step="03"
              title="Bayar & terima dalam hitungan menit"
              description="Setelah pembayaran terverifikasi, pesananmu diproses otomatis dan dikirim ke dashboard / email."
            />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="space-y-5">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">
            FAQ singkat
          </h2>
          <div className="space-y-3 text-sm text-slate-300">
            <FaqItem
              question="Apakah ini aman dan legal?"
              answer="Kami hanya menyediakan akun dan layanan dari sumber terpercaya. Tidak ada data sensitif yang kami minta dari kamu selain yang dibutuhkan untuk memproses pesanan."
            />
            <FaqItem
              question="Berapa lama pesanan diproses?"
              answer="Rata-rata 1–5 menit setelah pembayaran terverifikasi. Untuk kondisi tertentu bisa sedikit lebih lama, tapi kamu bisa memantau status di dashboard."
            />
            <FaqItem
              question="Metode pembayaran apa saja yang tersedia?"
              answer="Kamu bisa menggunakan berbagai metode pembayaran lokal (e-wallet / bank transfer) sesuai integrasi yang kami sediakan di halaman checkout."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-4">
      <p className="text-[11px] font-semibold tracking-[0.2em] text-purple-300">
        {step}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1 text-xs text-slate-300">{description}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-4">
      <p className="text-sm font-semibold text-white">{question}</p>
      <p className="mt-1 text-xs text-slate-300">{answer}</p>
    </div>
  );
}
