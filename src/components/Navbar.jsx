import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">Portofolio</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600">Tentang</a>
          <a href="#projects" className="hover:text-blue-600">Proyek</a>
          <a href="#articles" className="hover:text-blue-600">Artikel</a>
          <a href="#contact" className="hover:text-blue-600">Kontak</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            aria-label="Email"
            className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
