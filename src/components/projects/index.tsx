import PageHead from "../layout/pageHead";
import ProjectTile from "./projectTile";

const headInfo = {
  headline: "My Projects",
  text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
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
    link: "github.com"
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