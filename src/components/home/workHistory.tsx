import Link from "next/link"
import { MdWorkOutline } from "react-icons/md"
import WorkListItem from "./workListItem"

export const workArr: {
  company: string
  position: string
  years: string
  id: string
}[] = [
  {
    company: "Encora",
    position: "Software Engineer II",
    years: "2024-present",
    id: "job-3"
  },
  {
    company: "Globant",
    position: "Fullstack Developer",
    years: "2022-2024",
    id: "job-0"
  },
  {
    company: "NTT DATA",
    position: "Salesforce Developer",
    years: "2021-2022",
    id: "job-1"
  },
  {
    company: "Grupo Lucky",
    position: "Fullstack Developer",
    years: "2020-2021",
    id: "job-2"
  }
]

export default function WorkHistory() {
  return (
    <div className="dark:text-zinc-400 dark:border-zinc-700 flex flex-col border shadow-sm mx-1 my-4 p-4 rounded-lg" data-testid="work-history-div">
      <div className="flex flex-row items-center py-2">
        <div data-testid="work-icon" className="text-black">
          <MdWorkOutline />
        </div>
        <h2 className="ml-2 font-semibold dark:text-zinc-100">Work</h2>
      </div>
      <div data-testid="work-arr-div">
        {workArr.map(i => (
          <div key={i.id}>
            <WorkListItem company={i.company} position={i.position} years={i.years}/>
          </div>
        ))}
      </div>
      <Link className="rounded bg-slate-50 hover:bg-slate-100 text-center p-2 text-sm dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-200" href="/" data-testid="cv-link">
        Download CV
      </Link>
    </div>
  )
}
