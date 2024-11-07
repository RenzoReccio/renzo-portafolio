import Link from "next/link";
import { menuLinks } from "./menu";
import { BsMoonStars, BsSun } from "react-icons/bs";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface HeaderProps {
  setShowMenu: () => void
  showMenu: boolean
  offset: number
}

export default function StickyHeader(props: HeaderProps) {
  const { setShowMenu, showMenu, offset } = props
  const pathName = usePathname()


  const offsetFormula = offset < 100 ? 100 - (offset/2): 50

  const handleToggle = () => {
    if (!localStorage.theme){
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem("theme")
    }
    
  }


  return (
    <div className={showMenu ? "rounded-t-[20px] blur bg-white body-width dark:bg-zinc-900 w-full z-20 flex flex-col  items-center" :"rounded-t-[20px] bg-white body-width dark:bg-zinc-900 w-full z-20 flex flex-col  items-center"}>
      <div className="w-1/2 pb-2 mt-2 sticky top-4 flex flex-row items-center justify-center ml-24 self-end md:self-center">
      <div className="border shadow-sm px-8 rounded-full hidden md:flex flex-row justify-evenly items-center text-slate-800 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-600">
        {menuLinks.map(i => (
          <Link className={String(pathName).split('/')[1] === i.page.toLowerCase() 
          ? " px-2 z-40 py-2 text-emerald-500 border-b bg-gradient dark:bg-gradient  border-0 "
          : " px-2 py-2 hover:text-emerald-500"} href={i.link} key={i.title}>
            {i.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-row ">
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
      {pathName === "/"
      ? <div className={offset > 100 
          ? " self-start mt-16 ml-2 sm:ml-12 rounded-full overflow-hidden flex items-center p-1 shadow" 
          : " self-start mt-16 ml-2 sm:ml-12 rounded-full overflow-hidden flex items-center p-1"}>
        <Image className="rounded-full " src={"/images/profile.jpg"} width={offsetFormula} height={offsetFormula} alt="Profile pic" title="Profile pic" />
      </div>
      : <Link href="/" className="absolute self-start top-2 ml-12 rounded-full overflow-hidden flex items-center p-1 shadow">
          <Image className="rounded-full " src={"/images/profile.jpg"} width={50} height={50} alt="Profile pic" title="Profile pic" />
      </Link>
      }
    </div>
  )
}