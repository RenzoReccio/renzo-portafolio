"use client";

import Image from "next/image";
import { useState } from "react";
import Menu, { menuLinks } from "./menu";
import { BsMoonStars, BsSun } from 'react-icons/bs'
import Link from "next/link";

interface HeaderProps {
  setShowMenu: () => void
  showMenu: boolean
  offset: number
}

export default function Header(props: HeaderProps) {
  const { setShowMenu, showMenu, offset } = props

  const handleToggle = () => {
    if (!localStorage.theme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
    }

  }

  const offsetFormula = offset < 100 ? 100 - (offset / 2) : 50

  return (
    <div className={showMenu
      ? "rounded-t-[20px] dark:bg-zinc-900 blur saturate-50 body-width bg-white flex flex-row justify-between h-24 items-center "
      : "rounded-t-[20px] z-40 dark:bg-zinc-900 body-width bg-white flex flex-row justify-between h-48 items-start "} data-testid="header-div">
      <div className="self-end  w-32">
        <Image className="self-end rounded-full m-5" src={"http://placebeard.it/200/200"} width={offsetFormula} height={offsetFormula} alt="Placeholder for a profile pic" title="Profile picture placeholder" />
      </div>
      {/* </Link>
      </div> */}
      <div className="sticky top-0 w-full flex flex-row justify-end md:justify-evenly">

        <div className={" mt-6 hidden md:flex border shadow-sm py-2 px-8 rounded-full flex-row text-slate-800 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600"}>
          {menuLinks.map(i => (
            <Link className=" px-2 hover:text-emerald-500" href={i.link} key={i.title}>
              {i.title}
            </Link>
          ))}

        </div>
        <div className="mt-6 mr-8 flex flex-row items-center">
          <button className=" md:hidden text-slate-800 font-normal hover:bg-slate-100 dark:hover:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600 border shadow-sm rounded-full h-10 px-4 mx-2" data-testid="menu-btn" onClick={() => setShowMenu()}>
            Menu
          </button>
          <button className=" hover:bg-slate-100 border shadow-sm rounded-full text-xl h-10 px-4 mx-2 dark:hover:bg-zinc-800 dark:text-emerald-300 dark:border-zinc-600" data-testid="night-toggle" onClick={() => handleToggle()}>
            <div className="hidden dark:flex" data-testid="moon-icon">
              <BsMoonStars />
            </div>
            <div className="dark:hidden flex" data-testid="sun-icon">
              <BsSun />
            </div>
          </button>
        </div>
      </div>

    </div>
  )
}