import Link from "next/link";
import { 
  AiOutlineGithub, 
  AiOutlineLinkedin } from "react-icons/ai"

export default function Hero() {
  return (
    <div className=" px-4 my-8 w-full lg:w-2/3 text-zinc-700 dark:text-zinc-400" data-testid="hero-div">
      <h1 className="dark:text-zinc-100 font-semibold text-5xl text-black" data-testid="hero-h1">
        Renzo Reccio
      </h1>
      <p className="py-4 " data-testid="hero-blurb">
      As a Fullstack Developer, I like to build all kind of projects in different programming languages.
      </p>
      <div className="p-4 flex flex-row text-2xl" data-testid="social-links">
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" target="_blank" href={"https://github.com/RenzoReccio"} data-testid="github-link">
          <AiOutlineGithub />
        </Link>
        <Link className="p-1 m-2 dark:hover:text-zinc-200 hover:text-zinc-600" target="_blank" href={"https://www.linkedin.com/in/renzo-reccio/"} data-testid="linkedin-link">
          <AiOutlineLinkedin />
        </Link>
      </div>
    </div>
  )
}