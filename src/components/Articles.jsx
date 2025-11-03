import { Calendar, Tag } from "lucide-react";

const articles = [
  {
    title: "Clean Architecture untuk Aplikasi Web Skala Menengah",
    date: "2025-04-12",
    tags: ["Architecture", "Best Practices"],
    excerpt:
      "Membedah batasan layer, pemetaan dependency, dan pola yang membuat codebase lebih mudah dirawat.",
    link: "#",
  },
  {
    title: "Optimasi Rendering React: dari Memoization sampai Suspense",
    date: "2025-03-18",
    tags: ["React", "Performance"],
    excerpt:
      "Strategi praktis mencegah re-render tidak perlu dan memanfaatkan concurrent features modern.",
    link: "#",
  },
  {
    title: "Mendesain API yang Konsisten dengan FastAPI + MongoDB",
    date: "2025-02-02",
    tags: ["Backend", "API Design"],
    excerpt:
      "Konvensi penamaan, versi, hingga validasi skema untuk pengalaman dev yang lebih mulus.",
    link: "#",
  },
];

export default function Articles() {
  return (
    <section id="articles" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Artikel</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Tulisannya fokus di performa, arsitektur, dan produktivitas engineer.
          </p>
        </div>

        <div className="space-y-4">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.link}
              className="block rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-neutral-900 hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-lg hover:text-blue-600">{a.title}</h3>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(a.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{a.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10">
                    <Tag className="h-3 w-3" /> {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
