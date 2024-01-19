import DevToolCard from "./devToolCard"

export const devToolArr: {
  key: number
  title: string
  body: string,
  image: string
}[] = [
    {
      key: 0,
      title: "C#",
      body: ".NET Core, .NET Framework, Dapper, EntityFramework.",
      image: "c-4.svg"
    },
    {
      key: 1,
      title: "Angular",
      body: "Angular Material, SCSS.",
      image: "angular.png"
    },
    {
      key: 2,
      title: "NodeJS",
      body: "Express, NestJS, TypeORM.",
      image: "node.png"
    },
    {
      key: 3,
      title: "React",
      body: "Tailwind, NextJS.",
      image: "react.png"
    },
  ];

export default function DevTool() {
  return (
    <div data-testid="posts-div" className="lg:w-3/4">
      <h2 className="m-4 font-semibold text-zinc-900 dark:text-zinc-100">Dev Tools</h2>
      <div className="lg:flex flex-row">
        {devToolArr.map(i => (
          <div className="lg:w-1/4" key={i.key}>
            <DevToolCard devTool={i} />
          </div>
        ))}
      </div>
    </div>
  )
}