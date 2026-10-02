import PageHead from "../layout/pageHead";
import ProjectTile from "./projectTile";

const headInfo = {
  headline: "Featured Projects",
  text: "Production-grade applications, distributed backends, and interactive experiments built with modern architectures.",
  eyebrow: "Portfolio",
};

export const projectsArr: {
  id: number;
  title: string;
  blurb: string;
  link: string;
  tag?: string;
}[] = [
  {
    id: 0,
    title: "E-Commerce Cloud Platform",
    blurb: "Full-fledged e-commerce architecture engineered with Angular, NestJS, and deployed natively on Google Cloud Platform.",
    link: "https://github.com/RenzoReccio/API.QyN",
    tag: "Cloud & Microservices",
  },
  {
    id: 1,
    title: "Collatz Conjecture Visualizer",
    blurb: "Interactive mathematical visualization built with Golang and Next.js, modeling the 3n + 1 convergence dynamics.",
    link: "/projects/collatz-conjecture",
    tag: "Data & Next.js",
  },
  {
    id: 2,
    title: "Golang Azure Worker",
    blurb: "Event-driven asynchronous service built with Golang to process high-throughput Azure DevOps webhook pipelines.",
    link: "https://github.com/RenzoReccio/project-management.worker",
    tag: "Distributed Systems",
  },
];

export default function Projects() {
  return (
    <div data-testid="projects-index" className="space-y-8">
      <PageHead {...headInfo} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsArr.map((item) => (
          <ProjectTile key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
