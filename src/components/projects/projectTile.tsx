import Link from "next/link"
import { BsLink45Deg } from "react-icons/bs"

interface ProjectTileProps {
  id: number
  title: string
  blurb: string
  link: string
}

export default function ProjectTile(props: ProjectTileProps) {
  const { title, blurb, link, id } = props

  return (
    <Link href={"/"} data-testid={"project-tile-" + id} className="text-zinc-700 dark:text-zinc-400 
    hover:text-emerald-500 dark:hover:border-zinc-700 shadow-sm w-full md:w-1/3 rounded-lg p-6">
      <h2 className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-100 font-semibold py-4">{title}</h2>
      <p className="text-zinc-900 hover:text-zinc-900 dark:text-zinc-400">{blurb.slice(0, 150)}</p>
      <div className=" flex flex-row items-center py-4 dark:text-zinc-100" >
        <div className="mr-2">
          <BsLink45Deg />
        </div>
        {link}
      </div>
    </Link>
  )
}