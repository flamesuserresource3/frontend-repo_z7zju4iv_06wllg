import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Articles from "./components/Articles";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Tentang Saya</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-3xl">
              Saya seorang Software Engineer dengan fokus pada pengembangan web end-to-end. Saya suka
              membangun sistem yang bersih, scalable, dan mudah dirawat. Tech favorit: React, FastAPI,
              dan arsitektur yang rapi. Di waktu senggang, saya menulis artikel dan bereksperimen
              dengan tooling untuk meningkatkan produktivitas tim.
            </p>
          </div>
        </section>
        <Projects />
        <Articles />
        <section id="contact" className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-black/10 dark:border-white/10 p-8 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-neutral-900">
              <h3 className="text-xl sm:text-2xl font-semibold">Mari Bekerja Sama</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
                Punya ide atau butuh engineer untuk eksekusi cepat? Kirim pesan dan saya akan
                merespons dalam 24 jam.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-block bg-blue-600 text-white px-4 py-2.5 rounded-md shadow hover:bg-blue-700 transition"
                >
                  Email Saya
                </a>
                <a
                  href="https://cal.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-4 py-2.5 rounded-md border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition"
                >
                  Jadwalkan Panggilan
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 border-t border-black/5 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Portofolio • Dibuat dengan cinta dan kopi.</p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="hover:text-blue-600">Proyek</a>
            <a href="#articles" className="hover:text-blue-600">Artikel</a>
            <a href="#contact" className="hover:text-blue-600">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
