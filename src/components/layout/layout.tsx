"use client";

import { useEffect, useState } from "react";
import Footer from "./footer";
import Menu from "./menu";
import StickyHeader from "./stickyHeader";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Respect user's explicit theme preference or fallback to OS dark mode preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-paper text-ink flex flex-col transition-colors duration-300"
      data-testid="layout-div"
    >
      <StickyHeader
        offset={offset}
        showMenu={showMenu}
        setShowMenu={() => setShowMenu(!showMenu)}
      />
      {showMenu && <Menu setShowMenu={(arg) => setShowMenu(arg)} />}
      <main
        className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1 body-width"
        data-testid="main-div"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}