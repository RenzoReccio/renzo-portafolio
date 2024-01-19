import Link from "next/link"

const footerLinks: {
  title: string
  id: string
  link: string
}[] = [
  {
    title: "Projects",
    id: "projects-link",
    link: "/projects"
  },
  {
    title: "Articles",
    id: "articles-link",
    link: "/articles"
  }
    
]

export default function Footer() {
  return (
    <div className="w-screen body-width text-sm flex lg:flex-row flex-col justify-evenly items-center h-32  border-t bg-white dark:bg-zinc-900 dark:border-zinc-700" data-testid="footer-div">
      <div className=" flex flex-row" data-testid="footer-links">
        {footerLinks.map(i => (
          <Link className="hover:text-emerald-500 p-1 dark:text-zinc-300" href={i.link} key={i.id} data-testid={i.id}>
            {i.title}
          </Link>
        ))}
      </div>
      <p className="font-light text-zinc-400 dark:text-zinc-500 " data-testid="copyright-info">
        Renzo Reccio 2023
      </p>
    </div>
  )
}