import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/30 dark:to-neutral-950 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-blue-600 mb-3">Software Engineer</p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Membangun produk yang cepat, bersih, dan mudah di-scale.
            </h1>
            <p className="mt-5 text-neutral-600 dark:text-neutral-300 max-w-xl">
              Saya fokus pada pengembangan web end-to-end: arsitektur API yang rapi, UI/UX yang halus,
              dan performa optimal. Tertarik kolaborasi? Mari diskusi!
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-md shadow hover:bg-blue-700 transition"
              >
                Lihat Proyek <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
              >
                Unduh CV <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[2px] shadow-lg">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-neutral-900 flex items-center justify-center">
                  <span className="text-6xl select-none">👨‍💻</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-neutral-900 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 shadow-sm">
                <p className="text-xs text-neutral-500">Tersedia untuk freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
