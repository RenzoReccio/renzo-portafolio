"use client";

import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronRight, FiHome, FiFileText, FiLayers } from "react-icons/fi";

interface MenuProps {
  setShowMenu: (arg: boolean) => void;
}

export const menuLinks = [
  {
    title: "Home",
    page: "",
    link: "/",
    icon: FiHome,
  },
  {
    title: "Articles",
    page: "Articles",
    link: "/articles",
    icon: FiFileText,
  },
  {
    title: "Projects",
    page: "Projects",
    link: "/projects",
    icon: FiLayers,
  },
];

export default function Menu(props: MenuProps) {
  const { setShowMenu } = props;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/30 dark:bg-black/60 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      onClick={() => setShowMenu(false)}
    >
      <div
        className="w-full max-w-sm ui-nav rounded-3xl p-5 shadow-2xl border border-rule overflow-hidden transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
        data-testid="menu-div"
      >
        <div className="flex items-center justify-between pb-3 border-b border-rule">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
            Navigation
          </span>
          <button
            onClick={() => setShowMenu(false)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/10 apple-press"
            data-testid="close-btn"
            aria-label="Close menu"
          >
            <AiOutlineClose className="text-sm" />
          </button>
        </div>

        <nav className="mt-2 divide-y divide-rule/60">
          {menuLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.link}
                onClick={() => setShowMenu(false)}
                className="flex items-center justify-between py-3.5 px-2 rounded-xl text-ink hover:bg-paper-3 apple-press transition-colors duration-150 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-paper-3 flex items-center justify-center text-muted group-hover:text-amber-500 transition-colors">
                    <Icon className="text-base" />
                  </div>
                  <span className="text-sm font-semibold">{item.title}</span>
                </div>
                <FiChevronRight className="text-muted text-sm group-hover:translate-x-0.5 group-hover:text-amber-500 transition-transform" />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}