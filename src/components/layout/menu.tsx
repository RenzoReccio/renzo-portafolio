import Link from "next/link"
import { AiOutlineClose } from "react-icons/ai"

interface MenuProps {
  setShowMenu: (arg: boolean) => void
}

export const menuLinks: {
  title: string
  link: string,
  page: string
}[] = [
  {
    title: "Home",
    page: "",    
    link: "/"
  },
  {
    title: "Articles",
    page: "Articles",
    link: "/articles"
  },
  {
    title: "Projects",
    page: "Projects",
    link: "/projects"
  }
]

export default function Menu(props: MenuProps) {
  const { setShowMenu } = props
  return(
    <div className="shadow p-6 rounded-2xl w-full mt-8 absolute z-20 bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800" data-testid="menu-div">
      <div className="mb-2 flex flex-row justify-between dark:text-zinc-400">
        <h2 className=" text-sm">Navigation</h2>
        <button className="text-lg dark:hover:text-zinc-300" onClick={() => setShowMenu(false)} data-testid="close-btn">
          <AiOutlineClose />
        </button>
      </div>
      {menuLinks.map(i => (
        <Link href={i.link} key={i.title}>
          <p className="font-light border-b dark:border-zinc-800 py-2 my-1 px-2">{i.title}</p>
        </Link>
      ))}
    </div>
  )
}