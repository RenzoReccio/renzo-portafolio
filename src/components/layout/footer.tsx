import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const footerLinks = [
  {
    title: "Home",
    id: "home-link",
    link: "/",
  },
  {
    title: "Projects",
    id: "projects-link",
    link: "/projects",
  },
  {
    title: "Articles",
    id: "articles-link",
    link: "/articles",
  },
  {
    title: "Collatz Interactive",
    id: "collatz-link",
    link: "/projects/collatz-conjecture",
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-rule mt-24 pt-12 pb-14 transition-colors duration-300 bg-paper-2/60"
      data-testid="footer-div"
      role="contentinfo"
      aria-label="Colophon"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-8 border-b border-rule">
          <div className="flex items-center gap-2">
            <span className="font-mono text-amber-500 font-bold text-xl">/</span>
            <span className="font-bold text-lg tracking-tight text-ink">renzo-reccio</span>
          </div>
          <span className="font-mono text-xs text-muted">
            Software Engineer · Fullstack &amp; Cloud Systems
          </span>
        </div>

        {/* 3-Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-rule">
          {/* Block 1: Status */}
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              Current Status
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-ink">
                Learning new tech
              </span>
            </div>
          </div>

          {/* Block 2: Architecture & Focus */}
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              Core Engineering
            </p>
            <p className="text-xs text-ink/80 leading-relaxed font-mono pt-1">
              C# .NET Core · TypeScript · Next.js · React · Node.js · REST &amp; GraphQL · Cloud Microservices
            </p>
            <p className="text-xs text-muted">
              Built on strict component contracts and high-performance design patterns.
            </p>
          </div>

          {/* Block 3: Navigation & Connect */}
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-muted font-semibold">
              Directory &amp; Connect
            </p>
            <div className="flex flex-col gap-1.5 pt-1 text-xs" data-testid="footer-links">
              {footerLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  data-testid={item.id}
                  className="text-ink/80 hover:text-amber-600 dark:hover:text-amber-400 transition-colors w-fit"
                >
                  {item.title} &rarr;
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-2 text-base text-ink/70">
              <Link
                href="https://github.com/RenzoReccio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
                aria-label="GitHub"
              >
                <AiOutlineGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/renzo-reccio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
                aria-label="LinkedIn"
              >
                <AiOutlineLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Colophon Base Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-mono" data-testid="copyright-info">
          <p>
            &copy; {new Date().getFullYear()} Renzo Reccio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}