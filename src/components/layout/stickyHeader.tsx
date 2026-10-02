"use client";

import Link from "next/link";
import { menuLinks } from "./menu";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps {
  setShowMenu: () => void;
  showMenu: boolean;
  offset: number;
}

export default function StickyHeader(props: HeaderProps) {
  const { setShowMenu, showMenu } = props;
  const pathName = usePathname();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleToggle = () => {
    if (!document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    }
  };

  const isActive = (link: string) => {
    if (link === "/" && pathName === "/") return true;
    if (link !== "/" && pathName?.startsWith(link)) return true;
    return false;
  };

  return (
    <header className="sticky top-3.5 z-50 w-full px-4 sm:px-6 flex justify-center pointer-events-none">
      <div className="pointer-events-auto ui-nav rounded-full px-3.5 sm:px-4 py-2 flex items-center justify-between w-full max-w-3xl transition-all duration-300">
        {/* Left: Brand mark & Identity */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group apple-press focus:outline-none"
          aria-label="Renzo Reccio Home"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/profile.jpg"
              alt="Renzo Reccio"
              fill
              className="object-cover"
              sizes="32px"
              priority
            />
          </div>
          <span className="font-semibold text-sm tracking-tight text-ink flex items-center gap-1 group-hover:text-amber-500 transition-colors">
            <span className="text-amber-500 font-bold font-mono">/</span>
            <span>renzo</span>
          </span>
        </Link>

        {/* Center: Segmented Pill Navigation (Desktop) */}
        <nav
          className="hidden md:flex items-center p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.04] dark:border-white/[0.06]"
          aria-label="Primary Navigation"
        >
          {menuLinks.map((item) => {
            const active = isActive(item.link);
            return (
              <Link
                key={item.title}
                href={item.link}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 apple-press ${active
                  ? "bg-amber-300 text-zinc-950 font-bold shadow-sm"
                  : "text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions (Theme Toggle & Mobile Menu) */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleToggle}
            className="w-8 h-8 rounded-full flex items-center justify-center text-ink hover:bg-black/5 dark:hover:bg-white/10 apple-press transition-colors duration-200 focus:outline-none"
            title="Toggle theme"
            aria-label="Toggle dark/light mode"
            data-testid="night-toggle"
          >
            {isDark ? (
              <BsSun className="text-amber-400 text-sm transition-transform duration-300 rotate-0 hover:rotate-45" />
            ) : (
              <BsMoonStars className="text-zinc-700 text-xs transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          <button
            onClick={() => setShowMenu()}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-ink hover:bg-black/5 dark:hover:bg-white/10 apple-press focus:outline-none"
            aria-label="Toggle menu"
            data-testid="menu-btn"
          >
            <HiMenuAlt4 className="text-lg" />
          </button>
        </div>
      </div>
    </header>
  );
}