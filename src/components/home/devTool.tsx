import DevToolCard from "./devToolCard";

export const devToolArr: {
  key: number;
  title: string;
  body: string;
  image: string;
}[] = [
  {
    key: 0,
    title: "C#",
    body: ".NET Core, .NET Framework, Dapper, EntityFramework",
    image: "c-4.svg",
  },
  {
    key: 1,
    title: "Angular",
    body: "Angular Material, SCSS, RxJS, State Management",
    image: "angular.png",
  },
  {
    key: 2,
    title: "NodeJS",
    body: "Express, NestJS, TypeORM, REST & GraphQL",
    image: "node.png",
  },
  {
    key: 3,
    title: "React",
    body: "Tailwind, NextJS, TypeScript, Framer Motion",
    image: "react.png",
  },
];

export default function DevTool() {
  return (
    <section data-testid="posts-div" className="w-full mt-0">
      <div className="mb-8">
        <div className="section-label">
          <span className="num">02</span>
          <span className="divider">⁄</span>
          <span>Core Technologies</span>
        </div>
        <h2 className="ui-headline text-ink mt-2">
          Development Stack<span className="text-amber-400">.</span>
        </h2>
        <p className="text-sm text-muted mt-1.5 max-w-xl">
          Languages, frameworks, and architecture patterns used across production services and distributed systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {devToolArr.map((i) => (
          <DevToolCard key={i.key} devTool={i} />
        ))}
      </div>
    </section>
  );
}