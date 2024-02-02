import PageHead from "../layout/pageHead";
import ProjectTile from "./projectTile";

const headInfo = {
  headline: "My Projects",
  text: "Side projects with the latest technologies."
}

export const projectsArr: {
  id: number
  title: string
  blurb: string
  link: string
}[] = [
  {
    id: 0,
    title: "E-Commerce",
    blurb: "E-Commerce made with Angular, NestJS and deployed in GCP",
    link: "https://github.com/RenzoReccio/API.QyN"
  },
  {
    id: 1,
    title: "Collatz Conjecture",
    blurb: "Project with Golang and NextJS explaining Collatz conjecture in a linear chart",
    link: "projects/collatz-conjecture"
  }
]


export default function Projects() {
  return (
    <div data-testid="projects-index">
      <PageHead {...headInfo} />
      <div className="flex flex-row flex-wrap">
        {projectsArr.map((i) => (
          <div key={i.id} className="md:w-1/2 px-2">
            <ProjectTile {...i} />
          </div>
        ))}
      </div>
    </div>
  )
}