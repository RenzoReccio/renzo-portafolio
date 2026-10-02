import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FiArrowUpRight, FiLayers } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="py-12 sm:py-20 max-w-5xl relative overflow-hidden"
      data-testid="hero-div"
      aria-label="Introduction"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-8 space-y-6">
          <div className="section-label">
            <span className="num">01</span>
            <span className="divider">⁄</span>
            <span>Software Engineer &amp; Fullstack Developer</span>
          </div>

          <h1
            className="ui-display text-ink tracking-tight"
            data-testid="hero-h1"
          >
            Renzo Reccio<span className="text-amber-400 inline-block">.</span>
          </h1>

          {/* Subtitle / Blurb */}
          <p
            className="ui-subheadline text-ink/75 max-w-2xl font-normal"
            data-testid="hero-blurb"
          >
            Software Engineer specializing in scalable cloud systems, fluid user interfaces, and high-throughput backend services across C# .NET, React, TypeScript, and Go.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="ui-btn-primary flex items-center gap-2 group text-sm font-semibold"
            >
              <FiLayers className="text-base" />
              <span>Explore Projects</span>
            </Link>

            <Link
              href="/articles"
              className="ui-btn-secondary flex items-center gap-2 text-sm font-medium"
            >
              <span>Read Articles</span>
            </Link>

            <div className="flex items-center gap-2 ml-1" data-testid="social-links">
              <Link
                className="w-10 h-10 rounded-full flex items-center justify-center bg-paper-2 hover:bg-paper-3 text-ink border border-rule hover:border-rule-2 text-lg apple-press transition-colors shadow-sm"
                target="_blank"
                href="https://github.com/RenzoReccio"
                data-testid="github-link"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <AiOutlineGithub />
              </Link>
              <Link
                className="w-10 h-10 rounded-full flex items-center justify-center bg-paper-2 hover:bg-paper-3 text-ink border border-rule hover:border-rule-2 text-lg apple-press transition-colors shadow-sm"
                target="_blank"
                href="https://www.linkedin.com/in/renzo-reccio/"
                data-testid="linkedin-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <AiOutlineLinkedin />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Playful Geometric Composition */}
        <div className="lg:col-span-4 hidden lg:flex justify-center items-center pointer-events-none" aria-hidden="true">
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* Soft background radial glow */}
            <div className="absolute inset-0 bg-amber-200/20 dark:bg-amber-400/10 rounded-full blur-2xl" />

            {/* Organic Pear/Amber Blob */}
            <div className="absolute w-36 h-36 bg-amber-300 dark:bg-amber-400/90 rounded-[40px] rotate-12 animate-float shadow-lg flex items-center justify-center">
              <span className="font-mono text-zinc-950 font-bold text-lg select-none">{"<dev />"}</span>
            </div>

            {/* Cyan Pill */}
            <div className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-full bg-cyan-400 text-zinc-950 font-mono text-xs font-semibold shadow-md animate-float-delayed">
              Fullstack
            </div>

            {/* Coral-Red Pop Dot */}
            <div className="absolute -bottom-2 -left-2 w-7 h-7 rounded-full bg-rose-500 shadow-md animate-pulse-subtle" />

            {/* Soft Mint Ring */}
            <div className="absolute -bottom-4 right-6 w-12 h-12 rounded-full border-4 border-emerald-400/80 dark:border-emerald-400/60 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
}