import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SprintBoard",
    description:
      "Platform manajemen proyek ala kanban dengan real-time update, drag & drop, dan analytics tim.",
    tags: ["React", "FastAPI", "MongoDB", "Socket"],
    links: {
      github: "https://github.com/",
      demo: "#",
    },
  },
  {
    title: "Insightify",
    description:
      "Dashboard analitik bisnis dengan ETL ringan, caching, dan chart performa yang interaktif.",
    tags: ["Next.js", "Python", "PostgreSQL", "Redis"],
    links: {
      github: "https://github.com/",
      demo: "#",
    },
  },
  {
    title: "ShopLite",
    description:
      "Starter e-commerce headless dengan arsitektur modular dan integrasi pembayaran lokal.",
    tags: ["Vite", "Tailwind", "Node", "Stripe"],
    links: {
      github: "https://github.com/",
      demo: "#",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Proyek Pilihan</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              Beberapa pekerjaan terbaik yang pernah saya kerjakan.
            </p>
          </div>
          <a href="#contact" className="text-sm text-blue-600 hover:text-blue-700">Butuh bantuan?</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-black/10 dark:border-white/10 p-5 bg-white dark:bg-neutral-900 hover:shadow-md transition">
              <h3 className="font-semibold text-lg group-hover:text-blue-600 transition">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:text-blue-600"
                >
                  <Github className="h-4 w-4" /> Kode
                </a>
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:text-blue-600"
                >
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
